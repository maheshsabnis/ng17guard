// Used to Load all required Configuration in Browser for Run the App
import { ApplicationConfig } from '@angular/core';
// The ROuter Object Model
import { provideRouter } from '@angular/router';
// Referring Route Table
import { routes } from './app.routes';
// DOM Hydration
import { provideClientHydration, withHttpTransferCacheOptions } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { httpRequestTokenInterceptor } from './htppservice/app.http.interceptor';

//
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), // Router for Single Page App, Load the Router for Browser Based Routing
    provideHttpClient(/*withInterceptors([httpRequestTokenInterceptor])*/), // For Registering and Resolving dependencies for HttpClient for Http calls
   // provideClientHydration() // Effective Management of DOM for Hydration of HTML in Browser for responsiveness
   // Cache the Http Requests with HEAD, GET (Default), and POST
   provideClientHydration(
    withHttpTransferCacheOptions({
      includePostRequests: true,
    }),
  ),

  ]
};
