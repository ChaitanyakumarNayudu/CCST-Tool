import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AppConfig } from '../app.config';


@Injectable()
export class AuthenticationService {

 public user: any;
  constructor(private _httpClient: HttpClient, private config: AppConfig) { }

        checkIn(username: string, password: string ) {
              return this._httpClient.post<any>(this.config.apiUrl + '/authenticate?', {username: username, password: password })
              .map((response: Response) => {
                // login succesful if there's a jwt token in response
                   this.user = response.json();
                if (this.user && this.user.token) {
                   // store user details and jwt token in local storage to keep user logged in between page refreshes
                   localStorage.setItem('currentUser', JSON.stringify(this.user));
                }
              });
        }

        logout() {
            // remove user from local storage to log user out
            localStorage.removeItem('currentUser');
        }
}
