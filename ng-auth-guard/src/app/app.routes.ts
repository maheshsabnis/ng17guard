import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { AuthenticateService } from './authenticate.service';
import { authGuard } from './auth-guard.service';
import { AuthGuardDemoComponent } from './auth-guard-demo/auth-guard-demo.component';

export const routes: Routes = [
  {
    path: '', component:AuthGuardDemoComponent
   },
   {
    path:'home',component:HomeComponent,
    canActivate: [authGuard]
   },
   {
    path:'login',component:LoginComponent
   },
   {
    path: 'category', component: CategoryComponent,
    canActivate: [authGuard]
   }

];
