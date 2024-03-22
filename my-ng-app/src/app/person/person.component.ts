import { Component } from '@angular/core';
import { Person } from '../models/app.person.model';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent {
  person: Person;
  sumbitted = false;
  frmPerson: FormGroup;
  constructor(builder: FormBuilder){
    this.person = new Person('','','');
    this.frmPerson = builder.group({
       FirstName:new FormControl(this.person.FirstName, Validators.compose([
          Validators.required
       ])),
       MiddleName:new FormControl(this.person.MiddleName, Validators.compose([
        Validators.required
     ])),
     LastName:new FormControl(this.person.LastName, Validators.compose([
      Validators.required
   ])),
    });
  }

  // Lets create a property that will return the FornControlCollection object

  get f(): {[key:string]:AbstractControl}{
    return this.frmPerson.controls;
  }

  save():void {
    this.sumbitted = true;
    if(this.frmPerson.valid) {
      alert('The Form is Valid');
    }
  }
}
