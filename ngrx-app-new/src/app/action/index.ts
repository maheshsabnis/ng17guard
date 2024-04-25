/* Define Actions */

import { createAction,props } from "@ngrx/store";
import { Category } from "../models/app.category.model";

export const getCategoriesInput = createAction(
  '[Categories] Get Categories Input'
);

export const getCategoriesOutput = createAction(
  '[Categories] Get Categories Output',
  props<{
    categories:Category[]
  }>()
);


export const getCategoryInput = createAction(
  '[Categories] Get Category Input',
  props<{
    id:number
  }>()
);

export const getCategoryOutput = createAction(
  '[Categories] Get Category Output',
  props<{
    category:Category
  }>()
);

export const postCategoryInput = createAction(
  '[Categories] Post New Category Input',
  props<{category:Category}>()
);

export const postCategoryOutput = createAction(
  '[Categories] Post New Category Output',
  props<{category:Category}>()
);


export const putCategoryInput = createAction(
  '[Categories] Put  Category Input',
  props<{category:Category}>()
);

export const putCategoryOutput = createAction(
  '[Categories] Post  Category Output',
  props<{category:Category}>()
);


export const deleteCategoryInput = createAction(
  '[Categories] Delete Category Input',
  props<{
  id:number
  }>()
);

export const deleteCategoryOutput = createAction(
  '[Categories] Delete Category Output',
  props<{
    category:Category
  }>()
);
