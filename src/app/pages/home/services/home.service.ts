import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {
  constructor(private http: HttpClient) {}
  private manageError(error: HttpErrorResponse) {
    if (error.error instanceof Error) {
      console.log('An error has occurred:', error.error.message);
    } else {
      console.log(
        `Backend returned status ${error.status}, body: ${error.error}`
      );
    }
    return throwError(() => new Error(error.error.message));
  }

  getCourses(url: string): Observable<Response> {
    const fullUrl = 'http://127.0.0.1:5000/project/' + url;
    return this.http.get<Response>(fullUrl).pipe(catchError(this.manageError));
  }
}
