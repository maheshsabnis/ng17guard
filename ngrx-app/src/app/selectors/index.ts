/* The Selectors, this will be used by Components, Effects to Query to store for data*/

import { createSelector } from "@ngrx/store";

import { IAppStore, IDepartmentState } from "../state";

/* Subscribe to the Store So that all data from the Store is avaiable for query */

export const appStore = (state:IAppStore)=> state.appStore;

 

/* Define Selectors for Query to the 'appStore'*/

export const selectDepartmentsSelector = createSelector(
  appStore,
  (state:IDepartmentState)=>state.departments /* Get all Departments from 'appStore' */
);

export const selectADepartmentSelector = createSelector(
  appStore,
  (state:IDepartmentState)=>state.selectedDepartment /* A Single Department */
);
