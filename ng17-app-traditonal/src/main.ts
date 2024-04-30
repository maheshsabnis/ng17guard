import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

/* Bootstrap The AppModule, the NgModule, This will be loaded in Browser
and then component(s) mentioned in it 'bootstrap:[]' array will be
loaded in Browser;s UI
*/
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
