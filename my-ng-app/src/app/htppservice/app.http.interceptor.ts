import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { SecurityInfraService } from "./security-infra.service";

// the Http Interceptor that will add the token in the Http Request
export const httpRequestTokenInterceptor: HttpInterceptorFn =
  (request:HttpRequest<any>, handler:HttpHandlerFn)=>{
    // Write Logic to modify the request
    // 1. Read token from the sessionStorage

    var token =  sessionStorage.getItem('token');

    if(token) {
      // 2. modify the request
      const authRequest = request.clone({
        setHeaders: {
          'AUTHORIZATION': `Bearer ${token}`
        }
      });
        // return the modified request
      return handler(authRequest);
    }
    // return the same request
    return handler(request);
  };
