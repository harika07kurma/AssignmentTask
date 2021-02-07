import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  headers: HttpHeaders;
  constructor(
    public http: HttpClient,
  ) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  private formatErrors(error: any): Observable<any> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(error);
  }

  get(path: string, query: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(path, { params: query, headers: this.headers }).pipe(catchError(this.formatErrors));
  }
}
