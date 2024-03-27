import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {
    categories: Array<Category>;

    constructor(private serv:CategoryService){
      this.categories = new Array<Category>();
    }
  ngOnInit(): void {
     let token  = sessionStorage.getItem('token');
     this.serv.getCategories(token).subscribe({
      next: (response)=>{
         this.categories = response.Records
      },
      error:(err)=>{
        console.log(`Error Occurred : ${err}`);
      }
     });
  }
}
