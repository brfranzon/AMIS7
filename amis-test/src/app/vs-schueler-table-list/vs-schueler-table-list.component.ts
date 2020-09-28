import { Component,  OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';

import { SchuelerModel } from '../vs_schueler_data/generic-http/schueler-model';
import { SchuelerModelService } from '../vs_schueler_data/generic-http/schueler-model.service';

@Component({
  selector: 'vs-schueler-table-list',
  templateUrl: './vs-schueler-table-list.component.html',
  styleUrls: ['./vs-schueler-table-list.component.css']
})

export class VsSchuelerTableListComponent implements OnInit {

  constructor(
    private messageService: MessageService, 
    private confirmationService: ConfirmationService,
    private _schuelerModelService: SchuelerModelService) 
    { }

  AllSchueler: SchuelerModel[];
  AllselectedSchueler: SchuelerModel[];
  schueler = new SchuelerModel();

  cols: any[];
  exportColumns: any[];

  submitted: boolean;
  schuelerDialog: boolean;

  dataOnClickRow: any;


  ngOnInit(): void {
    this.getAllSchueler();

    this.cols = [
      { field: 'Vorname', header: 'Vorname' },
      { field: 'Nachname', header: 'Nachname' } ,
      { field: 'Strasse', header: 'Strasse' },
      { field: 'Stadt', header: 'Stadt'},
      { field: 'IBAN', header: 'IBAN'},
      { field: 'Postleitzeil', header: 'Postleitzeil'},
      { field: 'Status', header: 'Status'},
    
    ];
 
     this.exportColumns = this.cols.map(col => ({title: col.header, dataKey: col.field}));
  }
 
  /* Alle Schueler aus dem Service */
  getAllSchueler(){
    this._schuelerModelService.findAll().subscribe(
      data => this.AllSchueler = data
    );
      
  }

 /* on Click auf die Zeile */
  schuelerRow(rowData: any){
    console.table([rowData]);
  }

 /* open Dialog */
  openNew() {
     this.schuelerDialog = true;
     this.submitted = false;
  }
  
  /* save Neuer Schueler */
  neuSchuelerSpeicher(){
       this.submitted = true;
       this.schueler.id = this.createId();
       this._schuelerModelService.save(this.schueler).subscribe( 
       success => { console.log("Schueler Created!") }
       );

       this._schuelerModelService.findAll().
       subscribe(data => this.AllSchueler = data);
       this.schuelerDialog = false;
   }

   cancelModal(){
     this.schuelerDialog = false;
   }


 /* delete Neuer Schueler */
   confirmDelete(selectedSchueler: any) {
     console.log(selectedSchueler[0].id);

     this.confirmationService.confirm({
        message: 'Möchten Sie es löschen?',
        header: 'Löschen? :(',
        icon: 'fa fa-trash',
        accept: () => {
          console.log(selectedSchueler[0].id);
          this._schuelerModelService.delete(selectedSchueler[0].id).
          subscribe(
             success =>
             {
              this.messageService.add({severity:'success', summary: 
              'OK!', detail: `Schueler mit ID ${selectedSchueler[0].id} gelöscht!`, life: 3000});  

              this.AllselectedSchueler = [];
              this.getAllSchueler(); 

             },
             (error) =>{console.log('Error delete!')}
          )

        }
      });
   }
              
/* create ID für die Neuer Schueler */
 createId(): string {
        let id = '';
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for ( var i = 0; i < 32; i++ ) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id.toUpperCase();
    }




 /* Funktionen zum speichern */  
  exportExcel() {
    import("xlsx").then(xlsx => {
        const worksheet = xlsx.utils.json_to_sheet(this.AllSchueler);
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, "schueler");
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    import("file-saver").then(FileSaver => {
        let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        let EXCEL_EXTENSION = '.xlsx';
        const data: Blob = new Blob([buffer], {
            type: EXCEL_TYPE
        });
        FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    });
  }

  

}





   

 
