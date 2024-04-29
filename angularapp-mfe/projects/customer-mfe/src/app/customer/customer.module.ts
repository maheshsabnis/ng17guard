import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { RouterModule } from '@angular/router';
import { CustomerListComponent } from './components/customer-list/customer-list.component';

/* A Decorator that makes the CustomerModule class as Angular Module.THis   */
@NgModule({
  /* This array will declare all COmponents as well as Directives present in the current Module*/
  declarations: [CustomerListComponent],
  /* This array will load all Standard Angular Modules as well as Custom modules to run the Angular App
  e.g. If the DataBinding is used using the [(ngModel)] then 'FOrmsModule' is required
  */
  imports: [
    CommonModule,

    CustomerRoutingModule
  ]
})
export class CustomerModule { }
