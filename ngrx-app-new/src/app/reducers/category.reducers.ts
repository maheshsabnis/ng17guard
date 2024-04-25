/* The Reducer
 Pass an initial State and return the latest updated state
*/

import * as CategoryActions from './../action';
import { createReducer,on } from '@ngrx/store';
import { initialState } from '../state';

export const catReducer = createReducer(
  initialState,
  on(CategoryActions.getCategoriesOutput,(state, {categories})=>({
     ...state,
     /* state-from-Store:latest-data-received */
     categories:categories
  })),
  on(CategoryActions.postCategoryOutput, (state, {category})=>({
    ...state,
    /* state-from-Store:latest-data-posted */
    category:category
  })),
  on(CategoryActions.putCategoryOutput, (state, {category})=>{
    console.log(`Updated category in Reducer :${JSON.stringify(category)}`);
    return {
    ...state,
    /* state-from-Store:latest-data-updated */
    category:category
}  }),
  on(CategoryActions.deleteCategoryOutput, (state, {category})=>({
    ...state,
    /* state-from-Store:latest-data-deleted */
    category:category
  })),
  on(CategoryActions.getCategoryOutput, (state, {category})=>{
    console.log(`Reducer Selected Category ${JSON.stringify(category)}`);
     return{
    ...state,
    /* state-from-Store:latest-data-read from the Store */
    category:category
  }}),


)
