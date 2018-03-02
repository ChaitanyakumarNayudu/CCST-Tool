import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AppConfig } from '../app.config';


@Injectable()
export class ProjectListService {

 public user: any;
  constructor(private _httpClient: HttpClient, private config: AppConfig) { }

 
  
  insertProject(details ) {
    
    const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          
        })
    };
            
              return this._httpClient.post<any>(this.config.projectsUrl,details,httpOptions)
        }

        getProjectsList(){

            const httpOptions = {
                headers: new HttpHeaders({
                  'Content-Type':  'application/json',
                  
                })
            };
                    
                      return this._httpClient.get<any>(this.config.projectsUrl)
                }

        }

