import { Component,  OnInit } from '@angular/core';
import { SchuelerService } from '../vs_schueler_data/schueler.service';
import { SchuelerList } from '../vs_schueler_data/schueler-model';

@Component({
  selector: 'vs-schueler-table-list',
  templateUrl: './vs-schueler-table-list.component.html',
  styleUrls: ['./vs-schueler-table-list.component.css']
})

export class VsSchuelerTableListComponent implements OnInit {

  schueler: SchuelerList[];
  selectedSchueler: SchuelerList[];

  schueler_ = new SchuelerList ();

  cols: any[];
  exportColumns: any[];

  submitted: boolean;
  schuelerDialog: boolean;

  constructor(private _schuelerService: SchuelerService) { }

  ngOnInit(): void {
    this._schuelerService.getListSchueler().subscribe(
    data => this.schueler =  data
    );

    this.cols = [
      { field: 'Vorname', header: 'Vorname' },
      { field: 'Nachname', header: 'Nachname' } ,
      { field: 'Strasse', header: 'Strasse' },
      { field: 'Status', header: 'Status'}
  ];
  this.exportColumns = this.cols.map(col => ({title: col.header, dataKey: col.field}));
  }
 
 
  schuelerRow(rowData: any){
    console.log(rowData);
  }

  
  openNew() {
     this.schuelerDialog = true;
     this.submitted = false;
     console.log(this.cols);

  }
  
  neuSchuelerSpeicher(){
     this.submitted = true;
     this.schueler_.id = this.createId();
     this._schuelerService.createNeuSchueler(this.schueler_).subscribe( 
       success => { console.log("Schueler Created!") }
       );
     
   }



 createId(): string {
        let id = '';
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for ( var i = 0; i < 32; i++ ) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id.toUpperCase();
    }


  exportExcel() {
    import("xlsx").then(xlsx => {
        const worksheet = xlsx.utils.json_to_sheet(this.schueler);
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





   

 
