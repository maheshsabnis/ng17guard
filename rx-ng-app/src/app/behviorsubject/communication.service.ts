import { Injectable } from '@angular/core';

import {BehaviorSubject,of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  selectedMenus = new BehaviorSubject<any>({ id:0,name:'No Value'});

  // Define an array which will hold some dayta in it
  // In real scenario we will get data from HTTP Calls

  menus = [{id:1, name: 'Menu:: 1'},{id:2, name: 'Menu:: 2'},];


  // DEfine a variable that will be a reason to
  // share data across components

  shared_Element_Id:any;


  constructor() { }

  // A method that will create an observable from the array
  // This observable will be used to emit the latest value
  // using the BehaviorSubject
  getObservableFromMenus(){
     return of(this.menus);
  }

  // a method that will be used to filter the
  // Data from the Observable
  // This method wille be invoked by the Component

  change_Menu_Data(elementId:any):void {
    console.log(elementId);
     this.shared_Element_Id = elementId;
     // Filter value from Observable
     const selectedElementId = this.menus.filter(m=>m.id == elementId)[0];
     console.log(JSON.stringify(selectedElementId));
     // EMit it
     this.selectedMenus.next(selectedElementId);
  }



}
