import { Component, OnInit } from '@angular/core';
import { CategoryModel } from '../../models/app.models';
import { CategoryHttpService } from '../../htppservice/category-http.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-category-edit',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './category-edit.component.html',
  styleUrl: './category-edit.component.css'
})
export class CategoryEditComponent implements OnInit {


  category: CategoryModel;
  message:string;
  // Inject the ActivatedRoute so that the route parameter can be subscribed
   constructor(private serv: CategoryHttpService, private act:ActivatedRoute, private router:Router){
      this.category = new CategoryModel(0,'','',0);
      this.message = "";
   }
  ngOnInit(): void {
     this.act.params.subscribe((param)=> {
       this.category.CategoryUniqueId = param['id'];

       this.serv.getDataById(this.category.CategoryUniqueId)
              .subscribe({
                next: (resp)=>{
                  this.category = resp.Record;
                },
                error:(err)=>{
                  console.log(`Error: ${err}`);
                }
              });
     });
  }

   save():void {
     this.serv.putData(this.category.CategoryUniqueId, this.category)
     .subscribe({
       next:(response)=>{
          this.category = response.Record;
          this.router.navigate(['']);
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
