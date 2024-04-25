import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/app.category.model';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IApplicationStore } from '../../state';
import * as CategoryActions from './../../action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createcategory',
  standalone:true,
  imports:[FormsModule],
  templateUrl: './createcategory.component.html',
  styleUrls: ['./createcategory.component.css']
})
export class CreatecategoryComponent implements OnInit {
  category:Category;

  constructor(private _store:Store<IApplicationStore>, private router:Router){
    this.category = new Category(0,'','',0);
  }


  ngOnInit() {
  }

  clear():void {
    this.category = new Category(0,'','',0);
  }

  save():void {
    this._store.dispatch(CategoryActions.postCategoryInput({
      category:this.category
    }));
    /* After 4 Seconds navigate to List of Component */
    setTimeout(()=>{
      this.router.navigate([''])
    },4000);
  }



}
