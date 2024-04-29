import { Routes } from '@angular/router';
import { Home1Component } from './components/home/home.component';

export const routes: Routes = [
  {
    path:'h',
    component:Home1Component,
    pathMatch:'full' /* The HomeComponent from customer-mfe app only */
  },
  // {
  //   path: 'customerslist',
  //   /* Lazy Load the CustomerModule, and hence all components from it will be lazily loaded */
  //   loadChildren:()=>import('./customer/customer.module').then(m=>m.CustomerModule)
  // }
];
