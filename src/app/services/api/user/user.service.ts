import { Injectable } from '@angular/core';

// RXJS
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

// SERVICES
import { ApiService } from './../api.service';

// OBJECTS
import { UserObject, UserCredentialObject } from './../../../objects/users/user.object';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private apiService: ApiService,
  ) { }

  signup(user: UserObject): Observable<UserObject> {
    return this.apiService.post('/users/signup', user).pipe(
      map(response => {
        return response.data;
      }),
      catchError(response => {
        return throwError(response.error);
      }),
    );
  }

  signin(user: UserCredentialObject): Observable<UserObject> {
    return this.apiService.post('/users/signin', user).pipe(
      map(response => {
        return response.data;
      }),
      catchError(response => {
        return throwError(response.error);
      }),
    );
  }

}
