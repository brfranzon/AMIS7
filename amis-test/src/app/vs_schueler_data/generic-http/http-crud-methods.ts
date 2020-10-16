import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { httpCrudOperations } from './http-crud-interface';
import { delay, tap, take } from 'rxjs/operators'


export abstract class httpCrudMethods<T, ID> implements httpCrudOperations<T, ID> {
    constructor(
        protected _http: HttpClient,
        protected _base: string
      ) {}

  findAll(): Observable<T[]>{
    return this._http.get<T[]>(this._base).
    pipe(
      delay(0),
      tap(console.log)
    );
  }

  save(t: T): Observable<T>{
   return this._http.post<T>(this._base, t);
  }

  delete(id: ID): Observable<T>{
    return this._http.delete<T>(this._base + '/' + id);
  }

  update(id: ID, t:T): Observable<T>{
    return this._http.put<T>(this._base + "/" + id, t, {});
  }

}