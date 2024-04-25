import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { mainAppReducer } from './reducers';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { CategoryEffects } from './effects';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
  /* Register HttpClinet, Store, Reducers, Effects, DevTools */

   provideHttpClient(),
   /* Configure the Store at global level, this is done using the Reducer
    This will mae sure that, the reducer will be keep on monitoring
    all actions dispatched
   */
   provideStore(mainAppReducer),
   /* Register Effects at global level so that all actions dispatched will be monitored (Sync/Async)  */
   provideEffects(CategoryEffects),
   provideStoreDevtools({
    maxAge:25,
    logOnly:false
   })

  ]
};
