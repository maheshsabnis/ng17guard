import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIResponse, CategoryModel } from '../models/app.models';


@Injectable({
  providedIn: 'root'
})
export class CategoryHttpService {

  private url:string;
  // inject with HttpClient
  constructor(private http: HttpClient) {
    this.url = 'https://localhost:7134/';
   }

  getData():Observable<APIResponse<CategoryModel>> {
     let response:Observable<APIResponse<CategoryModel>>;
     // pass the token in the HttpHeader
    //  response = this.http.get<APIResponse<CategoryModel>>(`${this.url}api/Category`, {
    //   headers: {
    //     'AUTHORIZATION':`Bearer ${token}`
    //   }
    //  });

    response = this.http.get<APIResponse<CategoryModel>>(`${this.url}api/Category`);
     return response;
  }

  getCatData():Observable<APIResponse<CategoryModel>> {
    let response:Observable<APIResponse<CategoryModel>>;
    // pass the token in the HttpHeader
    response = this.http.get<APIResponse<CategoryModel>>(`${this.url}api/Category`);
    return response;
 }
  getDataById(id:number):Observable<APIResponse<CategoryModel>> {
    let response:Observable<APIResponse<CategoryModel>>;
    response = this.http.get<APIResponse<CategoryModel>>(`${this.url}api/Category/${id}`);
    return response;
 }
 postData(cat:CategoryModel):Observable<APIResponse<CategoryModel>> {
  let response:Observable<APIResponse<CategoryModel>>;
  response = this.http.post<APIResponse<CategoryModel>>(`${this.url}api/Category`, cat, {
    headers: {
      'Content-Type':'application/json'
    }
  });
  return response;
}
putData(id:number,cat:CategoryModel):Observable<APIResponse<CategoryModel>> {
  let response:Observable<APIResponse<CategoryModel>>;
  response = this.http.put<APIResponse<CategoryModel>>(`${this.url}api/Category/${id}`, cat, {
    headers: {
      'Content-Type':'application/json'
    }
  });
  return response;
}
delete(id:number):Observable<APIResponse<CategoryModel>> {
  let response:Observable<APIResponse<CategoryModel>>;
  response = this.http.delete<APIResponse<CategoryModel>>(`${this.url}api/Category/${id}`);
  return response;
}
}
