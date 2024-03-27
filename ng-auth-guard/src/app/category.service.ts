import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse } from './app.auth.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private serv:HttpClient) { }

  //https://localhost:7134;http://localhost:5039

  getCategories(token:any):Observable<APIResponse> {
     let response:Observable<APIResponse>;
     response = this.serv.get<APIResponse>("https://localhost:7134/api/Category", {
      headers:{
         'Authorization': `Bearer ${token}`
      }

     });
     return response;
  }

}
