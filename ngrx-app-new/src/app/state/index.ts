/* Defibe Store with folowing
1. State Schema
2. Initial Value for State
3. Store
*/

import { Category } from "../models/app.category.model";


/* State Schema */
export interface ICategoryState {
   categories:Category[],
   category:Category,
   selectedCategory:Category
}

/* Initial State */

export const initialState:ICategoryState = {
  categories:[],
   category:new Category(0,'','',0),
   selectedCategory:new Category(0,'','',0)
}

/* Define a Store of the Stype State Schema, so that it will have initial value */

export interface IApplicationStore {
  categoryStore: ICategoryState
}
