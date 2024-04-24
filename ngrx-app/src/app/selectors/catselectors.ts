/* The Selectors, this will be used by Components, Effects to Query to store for data*/

import { createSelector } from "@ngrx/store";

import {ICatStore,ICategoryState} from './../state/catstate';

/* Subscribe to the Store So that all data from the Store is avaiable for query */

export const catStore = (state:ICatStore)=> state.catStore;



/* Define Selectors for Query to the 'appStore'*/

export const selectCategoriesSelector = createSelector(
  catStore,
  (state:ICategoryState)=>state.categorys
);

export const selectCategorySelector = createSelector(
  catStore,
  (state:ICategoryState)=>state.selectedCategory
);
