import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { APIResponse, SecurityResponse } from './app.auth.model';
import { HttpClient } from '@angular/common/http';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  public authenticatedUserSubject: BehaviorSubject<SecurityResponse>;
  public authenticatedUser: Observable<SecurityResponse>;
  constructor(private http:HttpClient) {
    let token = sessionStorage.getItem('token') as string;
    this.authenticatedUserSubject = new BehaviorSubject<SecurityResponse>(JSON.parse(token));
    this.authenticatedUser = this.authenticatedUserSubject.asObservable();
  }
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
     return response.pipe(map((resp)=>{
      sessionStorage.setItem('token', resp.Token);
      sessionStorage.setItem('isLogged', "yes");
      this.authenticatedUserSubject.next(resp);
      return resp;
     }));
  }
  logout(): void {
    sessionStorage.clear();
    this.authenticatedUserSubject.next(new SecurityResponse('','',false));
  }
}
