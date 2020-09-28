import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { httpCrudOperations } from './http-crud-interface';


export abstract class httpCrudMethods<M, ID> implements httpCrudOperations<M, ID> {
    constructor(
        protected _http: HttpClient,
        protected _base: string
      ) {}

  findAll(): Observable<M[]>{
    return this._http.get<M[]>(this._base);
  }

  save(t: M): Observable<M>{
   return this._http.post<M>(this._base, t);
  }

  delete(id: ID): Observable<M>{
    return this._http.delete<M>(this._base + '/' + id);
  }

}