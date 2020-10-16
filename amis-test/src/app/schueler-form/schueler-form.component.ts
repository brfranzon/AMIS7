import { Component, OnInit, Input } from '@angular/core';
import { SchuelerModel } from '../vs_schueler_data/generic-http/schueler-model';


@Component({
  selector: 'schueler-form',
  templateUrl: './schueler-form.component.html',
  styleUrls: ['./schueler-form.component.css']
})
export class SchuelerFormComponent implements OnInit {

  @Input() selectedSchuelerOnClick: any;

  constructor() {
   }

  ngOnInit(): void {
  //  console.log(this.selectedSchuelerOnClick);
  }

}
