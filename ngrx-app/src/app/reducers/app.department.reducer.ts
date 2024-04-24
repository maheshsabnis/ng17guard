/* Defining Reducers */

import { createReducer, on  } from "@ngrx/store";
import { IAppStore, IDepartmentState, initialState } from "../state";

/* Import all action methods at once */

import * as DepartmentActions from './../actions';
import { Department } from "../models/app.department.model";

/* The reducer funciton will update the initialState based on the payload returned by each function  */
export const departmentReducer = createReducer(

  initialState,
  on(DepartmentActions.getDepartmentsInupt, (state)=>{

    return {
      ...state,
      departments:[]
    }
  }),
  on(DepartmentActions.postDepartmentSuccess, (state, {departments})=>{
    let data = state.departments;


    console.log(`In Post Dept Success Reducers : ${JSON.stringify(data)}`);

    console.log(`In Post Dept Success Reducers : ${JSON.stringify(state)}`);
    /* Return the latest updated state */
    return {
       ...state,
       departments
    }
  })
);


