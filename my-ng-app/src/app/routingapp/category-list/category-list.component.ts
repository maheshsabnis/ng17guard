import { Component, OnInit } from '@angular/core';
import { CategoryModel } from '../../models/app.models';
import { SecurityResponse } from '../../models/app.security.model';
import { CategoryHttpService } from '../../htppservice/category-http.service';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit {
  categories: Array<CategoryModel>;
  message: string;
  constructor(private serv: CategoryHttpService, private router:Router){
     this.categories = new Array<CategoryModel>();
     this.message = "";
  }

  ngOnInit(): void {
    // Always perform Http Calls from this method
    this.serv.getCatData().subscribe({
      next:(response)=>{
         this.categories = response.Records;
         this.message = response.Message;
      },
      error:(error)=>{
        this.message = `Error occurred : ${error}`
      }
    });
  }
   navigateToEdit(id:number):void {
    // Second Record from Array is 'route-parameter' in our case it is 'id'
     this.router.navigate(['edit', id]);
   }

   deleteData(id:number):void {
     this.serv.delete(id)
     .subscribe({
      next: (resp)=>{
        this.serv.getCatData().subscribe({
          next:(response)=>{
             this.categories = response.Records;
             this.message = response.Message;
          },
          error:(error)=>{
            this.message = `Error occurred : ${error}`
          }
        });
      },
      error:(err)=>{
        console.log(`Error: ${err}`);
      }
     });
   }
}
