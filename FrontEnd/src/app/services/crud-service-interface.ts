import { Observable } from 'rxjs';

export interface CrudService  {

    search(filter: any): Observable<Object>;

    create(object: any): Observable<Object>;

    update(object: any, id: any): Observable<Object>;

    delete(id: any): Observable<Object>;

    findById(id: any): Observable<Object>;
    
}