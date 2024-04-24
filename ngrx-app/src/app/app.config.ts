import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { provideStore, StoreModule } from '@ngrx/store';

import { departmentReducer } from './reducers/app.department.reducer';
import { provideStoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
import { mainAppReducer } from './reducers';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { CategoryEffect } from './effects';
import { provideHttpClient } from '@angular/common/http';



export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
     provideHttpClient(),
    /* Register the NgRx object Model here */
    /* Import StoreModule and register here so that all Components
     in this application will have an access to NgRx object Model
     so that they can be subscribed for Data Access, Data Updates
    */
    // importProvidersFrom(
    //   StoreModule.forRoot(mainAppReducer), /* Registeting REducers */
    //   EffectsModule.forRoot([CategoryEffect]), /* Registeting Effects */
    //   StoreDevtoolsModule.instrument({
    //     name: 'Test App'
    //   })
    // )

    provideStore(
      mainAppReducer
    ),
    provideEffects(CategoryEffect),
    provideStoreDevtools({ maxAge: 25, logOnly: false }),
  ]


};
