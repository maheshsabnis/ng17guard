import { Routes } from '@angular/router';
import { CategoryListComponent } from './routingapp/category-list/category-list.component';
import { CategoryCreateComponent } from './routingapp/category-create/category-create.component';
import { CategoryEditComponent } from './routingapp/category-edit/category-edit.component';
import { PersonComponent } from './person/person.component';
// Create a ROute Table Here
export const routes: Routes = [
  {path: '', component:CategoryListComponent, children:[
     {path: 'person', component: PersonComponent}
  ]},
  {path:'create', component:CategoryCreateComponent},
  // Parameter-Based Routing
  {path:'edit/:id', component:CategoryEditComponent},
  /* Lazy loading of th LazyModuleModule */
  {path:'lazy', loadChildren:()=> import('../app/lazy-module/lazy-module.module')
        .then(m=>m.LazyModuleModule)},
  // for any invalid path that is not in the route table
  // then go to the default path
  {path: '**', redirectTo:''}
];
