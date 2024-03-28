import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyModuleComponent } from './lazy-module.component';
import { RouterModule, Routes } from '@angular/router';
import { LazychildComponent } from './lazychild/lazychild.component';

// The Routing in the Current Module, the ROyte Table for Current Module
const routes:Routes = [
  {path:'', component:LazyModuleComponent},
  {path: 'lazyChild', component:LazychildComponent}
];


@NgModule({
  imports: [
    /* Used to manage the rendering of all components/directives in this module
    in the main Angular Application */
    /*
    RouterModule.forChild(routes): Register a Route Table
    of the Current module as a Child ROute for the Parent Angular Applicaiton
    i.e. The application which loads LazyModuleModule module as
    a lazy loaded module
    */
    CommonModule, RouterModule.forChild(routes)
  ],
  declarations: [LazyModuleComponent, LazychildComponent]
})
export class LazyModuleModule { }
