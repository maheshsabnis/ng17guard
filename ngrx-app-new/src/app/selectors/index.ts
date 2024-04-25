/* Define Selectors
These Selectors will query to the Store to read data from it.
These Selectors will be used by The Component when they subscrobe to the
store
*/

import { createSelector } from "@ngrx/store";

import { ICategoryState, IApplicationStore } from "../state";

/* Subscribe to the Store */

export const categoryStore = (state:IApplicationStore)=>state.categoryStore;

/* Define Selectors */

export const selectCategoriesSelector = createSelector(
  categoryStore,
  (state:ICategoryState)=> state.categories /* Get All Categories from Store */
);


export const selectCategorySelector = createSelector(
  categoryStore,
  (state:ICategoryState)=> state.category /* Get a Category from Store */
);
