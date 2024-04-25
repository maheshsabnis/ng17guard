import { ActionReducerMap } from "@ngrx/store";
import { catReducer } from "./category.reducers";
import { IApplicationStore } from "../state";

/* Return the COmbine REducer */

export const mainAppReducer:ActionReducerMap<IApplicationStore,any> = {
  /* The categoryStore (declared in the State\index.ts) will be managed using catReducer */
  categoryStore: catReducer
}
