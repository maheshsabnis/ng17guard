import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse, ProductModel } from '../models/app.models';

@Injectable({
  providedIn: 'root'
})
export class ProdHttpService {

  private url:string;

  constructor(private http:HttpClient) {
    this.url = "https://localhost:7134/api/ProdAPI";
  }


  getProductData(): Observable<APIResponse<ProductModel>> {
    let response:Observable<APIResponse<ProductModel>>;
    response = this.http.get<APIResponse<ProductModel>>(this.url);
    return response;
  }
}
