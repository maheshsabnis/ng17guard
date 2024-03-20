// Used to Load all required Configuration in Browser for Run the App
import { ApplicationConfig } from '@angular/core';
// The ROuter Object Model
import { provideRouter } from '@angular/router';
// Referring Route Table
import { routes } from './app.routes';
// DOM Hydration
import { provideClientHydration } from '@angular/platform-browser';

// 
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // Router for Single Page App, Load the Router for Browser Based Routing
    provideClientHydration() // Effective Management of DOM for Hydration of HTML in Browser for responsiveness 

  ]
};
