import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
// Needed FormsModule for two-way binding
import { FormsModule } from '@angular/forms';
// RouterOutlet: Class thet Loads and Renders component
// when ROuting is used
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   name:string;
   actors: Array<string>;
   names:Array<string>;

   constructor(){
     this.name = "The Angular-17 is great.";
     this.actors = new Array<string>();
     this.actors.push('Jim');
     this.actors.push('Tom');
     this.actors.push('Sean');
     this.actors.push('Danial');
     this.actors.push('Pierce');

     this.names = new Array<string>();
     this.names.push('Tejas');
     this.names.push('Mahesh');
     this.names.push('Ramesh');
     this.names.push('Ram');
     this.names.push('Sabnis');
   }

   changeName():void {
     this.name = "Angular 17 is greate, but the heavy practice is needed."
   }
}
