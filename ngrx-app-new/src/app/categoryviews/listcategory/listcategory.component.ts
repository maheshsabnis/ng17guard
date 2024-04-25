import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { CommonModule, NgForOf } from '@angular/common';
import { Category } from '../../models/app.category.model';
import { Observable } from 'rxjs';
import { IApplicationStore } from '../../state';
import { selectCategoriesSelector } from '../../selectors';

import * as CategoryActions from './../../action';
import { Router } from '@angular/router';


@Component({
  selector: 'app-listcategory',
  standalone:true,
  imports:[CommonModule, NgForOf],
  templateUrl: './listcategory.component.html',
  styleUrls: ['./listcategory.component.css']
})
export class ListcategoryComponent implements OnInit {


  /* The Observable Subscription */

  categories$ = this._store.pipe(select(selectCategoriesSelector));
  /* Inject the Store */
  constructor(private _store:Store<IApplicationStore>, private router:Router) {
   //this.categories$ = new Observable<Category>();
   }

  ngOnInit() {
    /* Dispatch an eaction */

    this._store.dispatch(CategoryActions.getCategoriesInput());

  }

  navigateToEdit(id:number):void {
    this.router.navigate(['edit',id]);
  }

  delete(id:number):void {
    this._store.dispatch(CategoryActions.deleteCategoryInput({
       id:id
    }));

  }

}
