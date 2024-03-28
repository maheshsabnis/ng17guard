import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BFFModel } from '../models/app.bff.model';

@Injectable({
  providedIn: 'root'
})
export class BFFService {
  private url:string;
  constructor(private http:HttpClient) {
    this.url = "https://localhost:7080/api/BFF";
  }

  getBffData(): Observable<BFFModel[]> {
    let response: Observable<BFFModel[]>;
    response = this.http.get<BFFModel[]>(this.url);
    return response;
  }
}
