import { createAction,props } from "@ngrx/store";
import { Category } from "../models/app.category.model";


export const  getCategoriesInput = createAction(
  '[Categories] get Categoried Input'
);


export const  getCategoriesOutput = createAction(
  '[Categories] get Categoried Input',
  props<{
    categories:Category[]
  }>()
);


export const postCategoryInput = createAction(
  '[Category] New Category',
  props<{category:Category}>()
);

export const postCategoryOutput = createAction(
  '[Category] New Category',
  props<{category:Category}>()
);
 