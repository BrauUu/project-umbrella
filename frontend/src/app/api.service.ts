import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Umbrella } from './umbrella.model';

const apiUrl = 'http://localhost:3333/umbrella';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  
  getUmbrellas(): Observable<Umbrella[]>{
    return this.http.get<Umbrella[]>(apiUrl+'/getAll').pipe(
      tap(umbrellas => console.log('guarda chuvas lidos')),
      catchError(this.handleError('getUmbrellas',[]))
    );
  }
  
  getUmbrella(id: string): Observable<Umbrella> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Umbrella>(url).pipe(
      tap(_ => console.log(`leu o umbrella id=${id}`)),
      catchError(this.handleError<any>(`getUmbrella id=${id}`))
    );
  }
  
  addUmbrella (umbrella): Observable<Umbrella> {
    return this.http.post<Umbrella>(apiUrl+'/', umbrella).pipe(
      tap((umbrella: Umbrella) => console.log(`adicionou o umbrella com w/ id=${umbrella._id}`)),
      catchError(this.handleError<any>('addUmbrella'))
    );
  }

  updateUmbrella(id, umbrella): Observable<Umbrella> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, umbrella).pipe(
      tap(_ => console.log(`atualiza o umbrella com id=${id}`)),
      catchError(this.handleError<any>('updateUmbrella'))
    );
  }

  deleteUmbrella (id:string): Observable<Umbrella> {
    const url = `${apiUrl}/${id}`;

    return this.http.delete<Umbrella>(url).pipe(
      tap(_ => console.log(`remove o umbrella com id=${id}`)),
      catchError(this.handleError<any>('deleteUmbrella'))
    );
  }

  
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }
}
