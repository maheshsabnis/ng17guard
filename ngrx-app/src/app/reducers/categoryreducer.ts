import { createReducer,on } from "@ngrx/store";

import { ICatStore,ICategoryState, initialState } from "../state/catstate";

import * as CategoryActions from './../actions/catactions';

export const categoryReducer = createReducer(
  initialState,
  on(CategoryActions.getCategoriesInput, (state)=> {
    console.log(`Dispatched Input Action`);
    return {
    ...state
  }}),
  on(CategoryActions.getCategoriesOutput, (state,{categories})=> {
    console.log(`Result from Service ${JSON.stringify(categories)}`);
    return {
    ...state,
    categorys:categories
  }}),
  on(CategoryActions.postCategoryOutput, (state, {category})=>{
    console.log(`Added Data ${JSON.stringify(category)}`);
 return{  ...state,
   category:category}
  })
);
