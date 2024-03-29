import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoryHttpService } from '../htppservice/category-http.service';
import { CategoryModel } from '../models/app.models';

@Component({
  selector: 'app-category-http',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './category-http.component.html',
  styleUrl: './category-http.component.css'
})
export class CategoryHttpComponent implements OnInit {

  category: CategoryModel
  categories: Array<CategoryModel>;
  message:string;

  constructor(private serv:CategoryHttpService){
    this.category = new CategoryModel(0,'','',0);
    this.categories = new Array<CategoryModel>();
    this.message = ''
  }
  ngOnInit(): void {
    // Always perform Http Calls from this method
    this.serv.getData().subscribe({
      next:(response)=>{
         this.categories = response.Records;
         this.message = response.Message;
      },
      error:(error)=>{
        this.message = `Error occurred : ${error}`
      }
    });
  }

  save():void {
    this.serv.postData(this.category)
    .subscribe({
      next:(response)=>{
         this.category = response.Record;
         this.message = response.Message;
         this.categories = [...this.categories, this.category];
      },
      error:(error)=>{
        this.message = `Error occurred : ${error}`
      }
    });
  }

  clear():void {
    this.category = new CategoryModel(0,'','',0);
  }

}
