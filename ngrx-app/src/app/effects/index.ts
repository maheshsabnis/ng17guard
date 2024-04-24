/* Define effects to manage Async calls */

import * as CategoryActions from './../actions/catactions';

import { ICatStore,ICategoryState } from '../state/catstate';

import {selectCategoriesSelector,selectCategorySelector} from './../selectors/catselectors';


import { Injectable } from '@angular/core';

import {CategoryHttpService} from './../services/category-http.service';

/*
createEffect: To Create an Effect\
ofType: TO Listen to an Action
Actions: Map an input action to an Output Action
*/
import { createEffect,Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { switchMap,of,map, exhaustMap } from 'rxjs';
import { APIResponse, Category } from '../models/app.category.model';

/* All Effects will be used to subscribe to an observable that is retuered from HTTP Call
One the HTTP Call is complete the effect will dispatch an Output Action
*/
@Injectable()
export class CategoryEffect {

  /* Create Effects */

  // getCategories$ = createEffect(()=>this.actions$.pipe(
  //   ofType(CategoryActions.getCategoriesInput), /* Listen to Input Action */
  //   switchMap(()=>this.serv.getData()), /* Map it with the Actual Service call and subscribw to its observable */
  //   /* Now switch from the Observable Response received and map it with
  //    the Output action
  //   */
  //   switchMap((response:APIResponse<Category>)=>of(CategoryActions.getCategoriesOutput({
  //     categories:response.Records
  //   })))
  // ));

  getCategories$= createEffect(
    ()=>this.actions$.pipe(
      ofType(CategoryActions.getCategoriesInput),
      exhaustMap(()=>this.serv.getData().pipe(
        map((response:APIResponse<Category>)=>CategoryActions.getCategoriesOutput({
          categories:response.Records
        }))
      ))
    )
  );



  postCategory$=createEffect(()=>this.actions$.pipe(
    ofType(CategoryActions.postCategoryInput), /* The ofType()will implicitly read payload i.e. Input Parameter */
    exhaustMap((param)=>this.serv.postData(param.category).pipe(
      map((response:APIResponse<Category>)=>CategoryActions.postCategoryOutput({
        category:response.Record
      }))
    ))

  ));



  /* Inject Actions and Store and HTTP Service  */
  constructor(
    private serv: CategoryHttpService,
    private store: Store<ICatStore>,
    private actions$: Actions
  ) { }

}
