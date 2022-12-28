import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/User';
import { Observable, throwError } from 'rxjs';
import { catchError } from "rxjs/operators"
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  public getUsers(): Observable<User[]> {
    let dataURL: string = 'https://jsonplaceholder.typicode.com/userss';
    return this.httpClient.get<User[]>(dataURL).pipe(
      catchError(this.handleError)
    );

  }

  private handleError(error: HttpErrorResponse) {
    let errormessage:string='';
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      
      errormessage ='An error occurred: ${error.error}';
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      // console.error(
      //   `Backend returned code ${error.status}, body was: `, error.error);
        errormessage = `Backend returned code ${error.status}, body was:  ${error.error}`;
    }
    // Return an observable with a user-facing error message.
    // return throwError(() => new Error(''));
    errormessage += '\nSomething bad happened; please try again later.';
    return throwError(errormessage);
  }

}
