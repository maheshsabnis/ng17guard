import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColorDirective } from '../color.directive';
import { StringOperationsService } from '../string-operations.service';


@Component({
  selector: 'app-input-element',
  standalone: true,
  imports: [FormsModule,NgClass, ColorDirective],
  templateUrl: './input-element.component.html',
  styleUrl: './input-element.component.css'
})
export class InputElementComponent {
   names:Array<string>;
   _filteredName:Array<string>
   selName:string;
   color:string;

   str:string;
   length:number;
   resultStr:string;



   // inject the service
   constructor(private serv: StringOperationsService){

      console.log('Component COnstrucr Calledd');
      this.selName = '';
     this.names = new Array<string>();
     this.names.push("Amey");
     this.names.push("Chaitanya");
     this.names.push("Chinmay");
     this.names.push("Akash");
     this.names.push("Amit");
     this.names.push("Chirag");

     this._filteredName = new Array<string>();
     this._filteredName = this.names;
     this.color = '';

     this.str = "Angular is great front-end";
     this.length = 0;
     this.resultStr = "";
   }


   filterData(event:any):void{
      let filterValue = event.target.value;
      console.log(filterValue);
      if(filterValue == 0){
         this._filteredName = this.names
      } else {
        console.log('else');
         this._filteredName = this.names.filter((n,i)=>{
            return n.startsWith(filterValue);
         });
      }
   }

   checkLength():void {
     this.length = this.serv.getLength(this.str);
   }

   getCase():void {
    this.resultStr = this.serv.changeCase(this.str, 'u');
   }


}
