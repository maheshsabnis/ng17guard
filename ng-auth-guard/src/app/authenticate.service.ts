import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse, SecurityResponse } from './app.auth.model';
import { HttpClient } from '@angular/common/http';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private http:HttpClient) { }
 //https://localhost:7134;http://localhost:5039
  authUser(user:Login): Observable<SecurityResponse> {
     let response:Observable<SecurityResponse>;

     response = this.http.post<SecurityResponse>("https://localhost:7134/api/Security/auth",
          Login,
          {
              'headers': {
                'Content-Type': 'application/json'
              }
          });
     return response;
  }
}
