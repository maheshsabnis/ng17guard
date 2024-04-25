import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CreatecategoryComponent } from './categoryviews/createcategory/createcategory.component';
import { ListcategoryComponent } from './categoryviews/listcategory/listcategory.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CreatecategoryComponent, ListcategoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngrx-app-new';
}
