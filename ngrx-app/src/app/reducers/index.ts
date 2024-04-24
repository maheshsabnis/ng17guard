/* Export all reducres at once */
/* This will make sure that all reducers will be combined and cofigured
 for monitoreing the store

The 'ActionReducerMap' object will be used to monitor all actions dispactched
so that accordingly the state updates will be handled

 */

import { ActionReducerMap } from "@ngrx/store";
import { departmentReducer } from "./app.department.reducer";
import { IAppStore } from "../state";
import { ICatStore } from "../state/catstate";
import { categoryReducer } from "./categoryreducer";

// export const mainAppReducer:ActionReducerMap<IAppStore,any> = {
//    appStore: departmentReducer
// }


export const mainAppReducer:ActionReducerMap<ICatStore,any> = {
  catStore: categoryReducer
}
