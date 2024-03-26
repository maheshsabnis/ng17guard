import { Component } from '@angular/core';
import { CategoryComponent } from '../category/category.component';
import { ProductDataComponent } from '../product-data/product-data.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [CategoryComponent, ProductDataComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

}
