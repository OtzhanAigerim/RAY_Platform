import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

import { IRegisterRequest } from '../types/registerRequest.interface';
import { ILoginRequest } from '../types/loginRequest.interface';

@Injectable()
export class AuthService {
  mainUrl: string = 'http://127.0.0.1:5000/project/';
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

  register(data: IRegisterRequest) {
    const url = this.mainUrl + '/register';
    return this.http.post(url, data).pipe(catchError(this.manageError));
  }

  login(data: ILoginRequest) {
    const url = this.mainUrl + '/login';
    return this.http.post(url, data).pipe(catchError(this.manageError));
  }

  getCurrentUser(): Observable<Response> {
    const url = this.mainUrl + '/user';
    return this.http.get<Response>(url).pipe(catchError(this.manageError));
  }
}
