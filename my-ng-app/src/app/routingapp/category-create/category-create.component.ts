import { Component } from '@angular/core';
import { CategoryModel } from '../../models/app.models';
import { CategoryHttpService } from '../../htppservice/category-http.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-category-create',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './category-create.component.html',
  styleUrl: './category-create.component.css'
})
export class CategoryCreateComponent {
  category: CategoryModel;
 message:string;
 // Inject this component with the 'Router' so that
 // when the 'save()' method is called, it will navigate to the
 // CategoryList
  constructor(private serv: CategoryHttpService, private router:Router){
     this.category = new CategoryModel(0,'','',0);
     this.message = "";
  }


  save():void {
    this.serv.postData(this.category)
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
