import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Department } from '../../models/app.department.model';
import { Store } from '@ngrx/store';
import { IAppStore } from '../../state';
import * as DepartentActions from './../../actions'

@Component({
  selector: 'app-createDepartment',
  standalone:true,
  imports:[FormsModule],
  templateUrl: './createDepartment.component.html',
  styleUrls: ['./createDepartment.component.css']
})
export class CreateDepartmentComponent implements OnInit {
  departement:Department;
  departments:Department[];
  /* Subscribe to the Store */
  constructor(private store: Store<IAppStore>) {
    this.departement = new Department(0,'','',0);
    this.departments = [];
  }

  ngOnInit() {
  }

  clear():void {
    this.departement = new Department(0,'','',0);
  }

  save():void {
    /* Dispatch the Action to that the Newly added Department will be stored in the App Store */

    this.departments=[...this.departments, this.departement];

    this.store.dispatch(DepartentActions.postDepartmentSuccess({
      departments: this.departments,
    }));
  }

}
