import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse } from '../models/app.models';
import { Category } from '../models/app.communication.model';

@Injectable({
  providedIn: 'root'
})
export class CatHttpService {

  private url:string;

  constructor(private http:HttpClient) {
    this.url = "https://localhost:7134/api/CatAPI";
  }


  getCategoryData(): Observable<APIResponse<Category>> {
    let response:Observable<APIResponse<Category>>;
    response = this.http.get<APIResponse<Category>>(this.url);
    return response;
  }

}
