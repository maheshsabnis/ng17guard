import { NgModule } from '@angular/core';
import { TestComponent } from './Test/Test.component';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
/* Decorator for making the AppModule class as Angular Module */
@NgModule({
  /* Array to Declare all Components, Directives */
  declarations: [
    AppComponent,
      TestComponent
   ],
  /* Array to import all standard Angular Modules as well as external Modules */
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [], /* Registeing Angular Services in DI COntainer */
  bootstrap: [AppComponent, TestComponent] /* An Arrya of all components those are to be loaded and rendered when the app starts */
})
export class AppModule { }
