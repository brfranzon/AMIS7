import { Injectable } from '@angular/core';

import { SchuelerList } from  '../vs_schueler_data/schueler-model';
import { HttpClient } from '@angular/common/http';

import { delay, tap, take } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SchuelerService {

  // Lokale Variable
  private readonly  API: string = "http://localhost:3000/schueler";

  constructor(private _http: HttpClient) { }


  getListSchueler(){
      return this._http.get<SchuelerList[]>(this.API).pipe(take(1));
  }

  createNeuSchueler(schueler = new SchuelerList()){
      return this._http.post<SchuelerList[]>(this.API, schueler).pipe(take(1)); 
  }
   



}
