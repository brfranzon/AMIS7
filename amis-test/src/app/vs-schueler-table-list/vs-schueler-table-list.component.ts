import { Component, OnInit } from '@angular/core';
import { SchuelerService } from '../vs_schueler_data/schueler.service';
import { SchuelerList } from '../vs_schueler_data/schueler-model';


@Component({
  selector: 'vs-schueler-table-list',
  templateUrl: './vs-schueler-table-list.component.html',
  styleUrls: ['./vs-schueler-table-list.component.css']
})

export class VsSchuelerTableListComponent implements OnInit {

  schueler: SchuelerList[];
  selectedSchueler: SchuelerList;

  cols: any[];

  
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


  }

}

/*
    public ID: number;
    public Postleitzeil: number;
    public Status: number;
    public Nachname: string;
    public Vorname: string;
    public Tel: number;
    public Strasse: string;
*/




   

 
