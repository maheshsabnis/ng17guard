import { Routes } from '@angular/router';
import { ListcategoryComponent } from './categoryviews/listcategory/listcategory.component';
import { CreatecategoryComponent } from './categoryviews/createcategory/createcategory.component';
import { EditCategoryComponent } from './categoryviews/editcategory/editcategory.component';

export const routes: Routes = [
  {path:'',component:ListcategoryComponent},
  {path:'create', component:CreatecategoryComponent},
  {path:'edit/:id',component:EditCategoryComponent},
  {path: '**', redirectTo:''}
];
