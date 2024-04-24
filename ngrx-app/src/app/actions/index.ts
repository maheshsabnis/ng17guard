/* Define actions here */
import { createAction, props } from "@ngrx/store";
import { Department } from '../models/app.department.model';

/* Lets Define an action */
/* The action to create new Department, the props aka the payload if of the type Department, that represents the data that is send by the Component*/
export const postDepartmentInput = createAction(
  '[postDepartment] New Department Input',
);

export const postDepartmentSuccess = createAction(
  '[postDepartment] New Department Success',
  props<{
    departments:Department[],

  }>()
);

export const getDepartmentsInupt = createAction(
  '[getDepartments] Get All Departments Input',
  props<{departments:Department[]}>()
);


export const getDepartmentsSuccess = createAction(
  '[getDepartments] Get All Departments Success',
  props<{departments:Department[]}>()
);
