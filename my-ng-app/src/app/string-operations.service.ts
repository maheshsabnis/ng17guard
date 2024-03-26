import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringOperationsService {

  constructor() {
    console.log('Service Constructor Called');
  }


  getLength(str:string):number {
    return str.length;
  }

  changeCase(str:string, c:string):string {
     if(c === 'u') return str.toUpperCase();
     if(c === 'l') return str.toLowerCase();
     return str;
  }
}
