import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormRecord, ReactiveFormsModule, Validators } from '@angular/forms';
import { Person } from '../models/app.person.model';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-dynamic-person',
  standalone: true,
  imports: [ReactiveFormsModule, NgForOf, NgIf],
  templateUrl: './dynamic-person.component.html',
  styleUrl: './dynamic-person.component.css'
})
export class DynamicPersonComponent implements OnInit {
   person: Person;
   myForm: FormRecord;
   formKeys: Array<string>;
   formArray: FormArray;
   constructor(){
    this.person = new Person('','','');
    // The Dynamic Form will have the FormState using FormControl
    // hence the formControlName will be used for binding
    // with Model object (in our case it is Person)
    this.myForm = new FormRecord<FormControl<string|null>>({});
    this.formKeys = new Array<string>();
    // This is an array of FormControl that represents
    // that each UI element will be bound with th FormControl
    this.formArray = new FormArray([new FormControl()]);
   }

   ngOnInit(): void {
      // Lets generate the form
      // 1.a. Read all keys from the Person class
      this.formKeys = Object.keys(this.person);
      // 1.b. Iterate over all the keys and make them as
      // FormControl

      this.formKeys.forEach((key,idx)=>{
          // 1.c. add each key as a FormControl in the FormRecord
          this.myForm.addControl(key,
              new FormControl(null, Validators.compose([Validators.required])));
      });
   }

   save():void {
     alert(`Data ENtered in Dynamic Form : ${JSON.stringify(this.myForm.value)}`);
   }
}
