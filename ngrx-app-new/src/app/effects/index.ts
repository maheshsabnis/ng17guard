
/* The Effect
This will manage all Calls to HTTP Services and Subscribe to the Observable
This is Angular Service, but make sure that the 'providedIn:root' is removed
othrwise the effect will be contineously under execution

The Effect wiil be used for followig

1. Injected with Action so that the Dispatched Action from the Component will be
listened and accordingly the HTTP Call will be made
2. Injected with Angular Service(s) those contains methods for HTTP Calls

3. If the data is to be directly read from the Store, then the NgRx Store must be injected in the effect
  - This is usefule to read a singe record from the STore instead of making HTTP Callto read data from it

4. The effect uses the RxJs operators like:
  - ofType(): Listen to the Input Action
  - switchMap(): Map the Input action to make the HTTP Call and Subscribe to Observable
  - switchMap() / exhaustedMap(): To subscibe to the resultant Observable and read data from it
  - map(): Map data from observable to output action
  - of(): Dispatch Output action and pass data from Observable to it
*/

import { Injectable } from '@angular/core';
import { CategoryHttpService } from '../services/category-http.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { IApplicationStore } from '../state';
import * as CategoryActions from './../action';
import { exhaustMap, map, of, withLatestFrom } from 'rxjs';
import { APIResponse, Category } from '../models/app.category.model';
import { selectCategoriesSelector, selectCategorySelector } from '../selectors';

@Injectable()
export class CategoryEffects {

  /* EFfect for Get All Categories */
  getCategories$=createEffect(
      ()=>this.actions$.pipe(ofType(CategoryActions.getCategoriesInput), /* Listen to Input Action */
      /* Makie HTTP Call, Subscribe to the Resultant Observable */
      exhaustMap(()=> this.serv.getData().pipe(
        /* Map the Resultant Observable to Output Action
         and Pass data to Output Action
        */
        map((response:APIResponse<Category>)=>CategoryActions.getCategoriesOutput({
          categories:response.Records
        }))
      ))
    )
    );


    /* EFfect for Post */

    postCategory$ = createEffect(()=>this.actions$.pipe(
      ofType(CategoryActions.postCategoryInput),
      /* Read the payload a.ka. props from Input action into 'param' */
      exhaustMap((param)=>this.serv.postData(param.category).pipe(
        map((response:APIResponse<Category>)=>CategoryActions.postCategoryOutput({
          category:response.Record
        }))
      ))
    ));

    /* EFfect for Put */

    putCategory$ = createEffect(()=>this.actions$.pipe(
    ofType(CategoryActions.putCategoryInput),
    /* Read the payload a.ka. props from Input action into 'param' */
    exhaustMap((param)=>this.serv.putData(param.category.CategoryUniqueId,param.category).pipe(
      map((response:APIResponse<Category>)=>CategoryActions.putCategoryOutput({
        category:response.Record
      }))
    ))
  ));

  /* EFfect for Put */

  deleteCategory$ = createEffect(()=>this.actions$.pipe(
    ofType(CategoryActions.deleteCategoryInput),
    /* Read the payload a.ka. props from Input action into 'param' */
    exhaustMap((param)=>this.serv.delete(param.id).pipe(
      map((response:APIResponse<Category>)=>CategoryActions.deleteCategoryOutput({
        category:response.Record
      }))
    ))
  ));

  /* an Effect that will Query to Store to read a category data from it*/

  getCategory$=createEffect(()=>
    this.actions$.pipe(ofType(CategoryActions.getCategoryInput),
    /* Map to the Input Payload */
    map(action=>action.id),
    /* Use the Selector to Read data from Store, MAke sure that use the RxJs Operator to Query

    This will return all categoris from the Store which we are passing to   exhaustMap
    and the payload a.k.a. 'id' is the param from the dispatched input action

    The 'this._store.pipe(select(selectCategoriesSelector))' will query to Store using the Selector, the pipe() method of Store accept the selector using the 'select()' method.
    */
    withLatestFrom(this._store.pipe(select(selectCategoriesSelector))),
    /* Write data in Output Action */
    exhaustMap(([id, categoris])=>{
      const category = categoris.filter(cat=>cat.CategoryUniqueId == id)[0];
      console.log(`Selected Category : ${JSON.stringify(category)}`);
      return of(CategoryActions.getCategoryOutput({
        category:category
      }))
    })
    )
  )


  constructor(
    private serv:CategoryHttpService,
    private actions$:Actions,
    private _store: Store<IApplicationStore>
  ) { }

}


