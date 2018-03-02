import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AppConfig } from '../app.config';


@Injectable()
export class AuthenticationService {

 public user: any;
  constructor(private _httpClient: HttpClient, private config: AppConfig) { }

 
  
  login(details ) {
    
    const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          
        })
    };
            
              return this._httpClient.post<any>(this.config.apiUrl,details,httpOptions).map(res => {
                  console.log(res);
                  return 
              });
      //         .map((response: Response) => {
      //           // login succesful if there's a jwt token in response
      //    response.json();
      //       //     if (this.user && this.user.token) {
      //       //        // store user details and jwt token in local storage to keep user logged in between page refreshes
      //       //        localStorage.setItem('currentUser', JSON.stringify(this.user));
      //       //     }
      //         });
        }

        logout() {
            // remove user from local storage to log user out
            localStorage.removeItem('currentUser');
        }
}
