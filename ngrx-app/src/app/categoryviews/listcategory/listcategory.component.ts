import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ICatStore } from '../../state/catstate';

import * as CategoryActions from './../../actions/catactions'
import { selectCategoriesSelector } from '../../selectors/catselectors';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Category } from '../../models/app.category.model';

@Component({
  selector: 'app-listcategory',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './listcategory.component.html',
  styleUrls: ['./listcategory.component.css']
})
export class ListcategoryComponent implements OnInit {


  /* The Observable Subscription */

  //categories$: Observable<Category[]> = new Observable<Category[]>();

  categories$ = this._strore.pipe(select(selectCategoriesSelector));

  constructor(private _strore:Store<ICatStore>) {

   }

  ngOnInit() {

   // this.categories$ = this._strore.select(state=>state.catStore.categorys);
    /* Dispatch an Action */
    this._strore.dispatch(CategoryActions.getCategoriesInput());
  }

  getData():void {
    // this._strore.dispatch(CategoryActions.getCategoriesInput());
  }

}
