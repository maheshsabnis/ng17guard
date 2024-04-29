import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


export const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  // {
  //   path: 'cust',
  //   loadChildren: () => import('customer-mfe/routes').then(m => m.Routes)
  // },
  {
    path:'app',
    loadChildren:()=>import('customer-mfe/Component').then(m=>m.Home1Component)
  },
  {
    path: '**',
    redirectTo:''
  }
];
