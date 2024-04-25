import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/app.category.model';
import { FormsModule } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { IApplicationStore } from '../../state';
import * as CategoryActions from '../../action';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { selectCategorySelector } from '../../selectors';

@Component({
  selector: 'app-createcategory',
  standalone:true,
  imports:[FormsModule],
  templateUrl: './editcategory.component.html'
})
export class EditCategoryComponent implements OnInit {
  category:Category;
  /* Define a Category Observable that will be represent the data from the Store after the Query */

  category$= this._store.pipe(select(selectCategorySelector));

  constructor(private _store:Store<IApplicationStore>, private router:Router,private act:ActivatedRoute ){
    this.category = new Category(0,'','',0);
    //this.category$ = new Observable<Category>();
  }


  ngOnInit() {
    this.act.params.subscribe((param)=>{
      this.category.CategoryUniqueId = param['id'];
      /* Dispatch Action to get Category */

      this._store.dispatch(CategoryActions.getCategoryInput({
        id:this.category.CategoryUniqueId
      }));
     // this.category$ =  this._store.pipe(select(selectCategorySelector));
      /* Subscribe to the Observable to read data from it */
      this.category$.subscribe((c)=>{
        this.category = Object.assign({},c);
        console.log(`Category : ${JSON.stringify(this.category)}`);
      });

    })
  }

  clear():void {
    this.category = new Category(0,'','',0);
  }

  save():void {
    console.log(`Entered Data ${JSON.stringify(this.category)}`);
    this._store.dispatch(CategoryActions.putCategoryInput({
      category:this.category
    }));
      /* After 4 Seconds navigate to List of Component */
      setTimeout(()=>{
        this.router.navigate([''])
      },4000);
  }



}
