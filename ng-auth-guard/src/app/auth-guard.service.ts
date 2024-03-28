import { inject } from "@angular/core";
import { AuthenticateService } from "./authenticate.service";
import { Router } from "@angular/router";


export const authGuard = ()=>{
  const authService = inject(AuthenticateService);
  const router = inject(Router);

  // Subscribe to the AUthenticationService


};
