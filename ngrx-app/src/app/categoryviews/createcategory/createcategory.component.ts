import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/app.category.model';
import { Store } from '@ngrx/store';
import { ICatStore } from '../../state/catstate';

import * as CategoryActions from './../../actions/catactions';

@Component({
  selector: 'app-createcategory',
  standalone:true,
  templateUrl: './createcategory.component.html',
  styleUrls: ['./createcategory.component.css']
})
export class CreatecategoryComponent implements OnInit {

  constructor(private _store:Store<ICatStore>) { }

  ngOnInit() {
  }

  createNewCategory():void {
     let cat:Category = new Category(0,'Cat-00905', 'Elct-Industy', 3333);
     this._store.dispatch(CategoryActions.postCategoryInput({
      category:cat
     }));
  }


}
