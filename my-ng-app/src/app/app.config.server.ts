import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering() // This will Load CSS, HTML and Server-Side Generated Compiled JS files in Browser 
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
