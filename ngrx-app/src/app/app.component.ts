import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DepartmentsListComponent } from './views/departmentsList/departmentsList.component';
import { CreateDepartmentComponent } from './views/createDepartment/createDepartment.component';
import { CreatecategoryComponent } from './categoryviews/createcategory/createcategory.component';
import { ListcategoryComponent } from './categoryviews/listcategory/listcategory.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreatecategoryComponent, ListcategoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngrx-app';
}
