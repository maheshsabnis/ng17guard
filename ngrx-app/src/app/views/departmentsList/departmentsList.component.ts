import { CommonModule, NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Department, depts } from '../../models/app.department.model';
import { select, Store } from '@ngrx/store';
import { IAppStore } from '../../state';
import { selectDepartmentsSelector } from '../../selectors/index';
import * as DepartmentActions from './../../actions';
import { getDepartmentsInupt } from '../../actions/index';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-departmentsList',
  standalone:true,
  imports:[NgForOf,CommonModule],
  templateUrl: './departmentsList.component.html',
  styleUrls: ['./departmentsList.component.css']
})
export class DepartmentsListComponent implements OnInit {
 //departments:Department[];

  /* Define an Observable that is used for reading data from App Store using the selector */

  collections = depts;


 
  constructor(private store:Store<IAppStore>) {
     // this.departments=[];
     var data =  this.store.select(s=>s.appStore)
     data.subscribe(data=>{
      console.log(`Data = ${JSON.stringify(data)}`);
     })
   }

  ngOnInit() {
    // this.store.select((state)=>state.appStore.departments).subscribe(
    //    data=>this.departments = data
    // );

    
  }


  getData():void {
    
    var data =  this.store.select(s=>s.appStore)
    data.subscribe(data=>{
     console.log(`Data = ${JSON.stringify(data)}`);
    })  
  }

}
