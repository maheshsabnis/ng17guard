import { Component } from '@angular/core';

import { CategoriesData } from '../models/app.communication.model';
import { CommuniactionServService } from '../communiaction-serv.service';


@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  categories : Array<any>;

  constructor(private serv: CommuniactionServService){
     this.categories = CategoriesData;
     console.log(JSON.stringify(this.categories));
  }

  onSelectCategory(catId:number):void {
    // send data to service bu invoking its method
      this.serv.onReceived(catId);
  }
}
