import { inject } from "@angular/core";
import { AuthenticateService } from "./authenticate.service";
import { Router } from "@angular/router";


export const authGuard = ()=>{
  // Explicit Injection in Method, aka On-Demand Injection instead of using a constructor injection
  // inject(DI-Token-Type)
  // DI-Token-Type: The type (a class) that contains logic for managing the Authentication and Login Info state
  const authService = inject(AuthenticateService);
  const router = inject(Router);

  // Subscribe to the AUthenticationService
alert('In Auth Guard Services');


  if(sessionStorage.getItem('isLogged') === 'yes'){
    alert('Logged In');
    // Take to the Default route from the RouteTable
    return true
  }

  // Redirect the Login Page
  return router.parseUrl('/login');

};
