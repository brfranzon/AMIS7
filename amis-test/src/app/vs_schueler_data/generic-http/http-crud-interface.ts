import { Observable } from 'rxjs';


export interface httpCrudOperations<T, ID>{
    
    findAll(): Observable<T[]>;
    save(t: T): Observable<T>;
    delete(id: ID): Observable<T>;
    update(id: ID, t: T): Observable<T>;

}