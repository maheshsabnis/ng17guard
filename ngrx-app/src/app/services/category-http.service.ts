import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Category,APIResponse } from '../models/app.category.model';



@Injectable({
  providedIn: 'root'
})
export class CategoryHttpService {

  private url:string;
  // inject with HttpClient
  constructor(private http: HttpClient) {
    this.url = 'https://localhost:7134/';
   }

  getData():Observable<APIResponse<Category>> {
     let response:Observable<APIResponse<Category>>;
     // pass the token in the HttpHeader
    //  response = this.http.get<APIResponse<CategoryModel>>(`${this.url}api/Category`, {
    //   headers: {
    //     'AUTHORIZATION':`Bearer ${token}`
    //   }
    //  });
    console.log('service call');
    // response = this.http.get<APIResponse<Category>>(`${this.url}api/Category`);
    //  return response;


    return this.http.get<APIResponse<Category>>(`${this.url}api/Category`).pipe(
      map(resp => resp)
    );
  }

  getCatData():Observable<APIResponse<Category>> {
    let response:Observable<APIResponse<Category>>;
    // pass the token in the HttpHeader
    response = this.http.get<APIResponse<Category>>(`${this.url}api/Category`);
    return response;
 }
  getDataById(id:number):Observable<APIResponse<Category>> {
    let response:Observable<APIResponse<Category>>;
    response = this.http.get<APIResponse<Category>>(`${this.url}api/Category/${id}`);
    return response;
 }
 postData(cat:Category):Observable<APIResponse<Category>> {
  let response:Observable<APIResponse<Category>>;
  response = this.http.post<APIResponse<Category>>(`${this.url}api/Category`, cat, {
    headers: {
      'Content-Type':'application/json'
    }
  });
  return response;
}
putData(id:number,cat:Category):Observable<APIResponse<Category>> {
  let response:Observable<APIResponse<Category>>;
  response = this.http.put<APIResponse<Category>>(`${this.url}api/Category/${id}`, cat, {
    headers: {
      'Content-Type':'application/json'
    }
  });
  return response;
}
delete(id:number):Observable<APIResponse<Category>> {
  let response:Observable<APIResponse<Category>>;
  response = this.http.delete<APIResponse<Category>>(`${this.url}api/Category/${id}`);
  return response;
}
}
