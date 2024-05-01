import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { APIResponse, CategoryModel } from "../model/app.category.model";

@Injectable({
  providedIn:'root'
})
export class CategoryHttpService {

  private url:string;
  // inject with HttpClient
  constructor(private http: HttpClient) {
    this.url = 'https://localhost:7134/';
   }

   getCatData():Observable<APIResponse<CategoryModel>> {
    let response:Observable<APIResponse<CategoryModel>>;
    // pass the token in the HttpHeader
    response = this.http.get<APIResponse<CategoryModel>>(`${this.url}api/Category`);
    return response;
 }
}
