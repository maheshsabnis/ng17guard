import { Component, input, Input, OnChanges, SimpleChanges, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnChanges{


  // Let's define @Input property in the child for
  // Subscribing to the Signal

  @Input({required:true})
   name!: WritableSignal<string>

  // The 'input' object in Angular 17.1

  nameInput = input.required<string>();


  ngOnChanges(changes: SimpleChanges): void {
     console.log(`Changing the Child Component`);
  }


  updateNameInput():void {
    // this.nameInput = input("Tejas Mahesh Sabnis");
    this.name.set('Mahesh Sabnis, MVP');
  }

}
