import { Observable } from 'rxjs';


export interface httpCrudOperations<M, ID>{
    
    findAll(): Observable<M[]>;
    save(t: M): Observable<M>;
    delete(id: ID): Observable<M>

}