/* Define a State Schema here, the Application will use this state from the Store */

import { Department } from "../models/app.department.model";

/* Define an Interface that will make sure that, the propser query data will be emitted to the componsment  using the state */

export interface IDepartmentState {
   departments:Department[], /* For all Depertments */
   department: Department, /* For creatng / updating / Deleting Department */
   selectedDepartment: Department  /* For Selecting the Department for Update / Delete */
}

/* Define an Initial State */

export const initialState: IDepartmentState = {
   departments:[
   ],
   department: new Department(0,'','',0),
   selectedDepartment: new Department(0,'','',0)
}

/* Define a Store */
/* This is the Schema of the Store that will be loaded when the App is locaded and Initialized */

export interface IAppStore {
   appStore: IDepartmentState
}

