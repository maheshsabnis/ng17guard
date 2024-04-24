/* Define a State Schema here, the Application will use this state from the Store */

import { Category } from "../models/app.category.model"

/* Define an Interface that will make sure that, the propser query data will be emitted to the componsment  using the state */

export interface ICategoryState {
   categorys:Category[], /* For all Depertments */
   category: Category, /* For creatng / updating / Deleting Category */
   selectedCategory: Category  /* For Selecting the Category for Update / Delete */
}

/* Define an Initial State */

export const initialState: ICategoryState = {
   categorys:[],
   category: new Category(0,'','',0),
   selectedCategory: new Category(0,'','',0)
}

/* Define a Store */
/* This is the Schema of the Store that will be loaded when the App is locaded and Initialized */

export interface ICatStore {
   catStore: ICategoryState
}

