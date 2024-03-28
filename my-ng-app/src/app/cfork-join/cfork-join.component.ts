import { Component, OnInit } from '@angular/core';
import { CatHttpService } from '../htppservice/cat-http-service.service';
import { ProdHttpService } from '../htppservice/prod-http.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-cfork-join',
  standalone: true,
  imports: [],
  templateUrl: './cfork-join.component.html',
  styleUrl: './cfork-join.component.css'
})
export class CForkJoinComponent implements OnInit {

   categoriesData: string;

   productsData: string;

   constructor(
    private cServ:CatHttpService, private pServ:ProdHttpService
   ){
    this.categoriesData = '';
    this.productsData = '';
   }
  ngOnInit(): void {
    // Individual Subscription to Observables
    // Use Angular declation type for Observable
    const categories$ = this.cServ.getCategoryData();
    const products$ = this.pServ.getProductData();

    // Resolve thse observables so that the emitted data can be read
    // from both these Observables

    forkJoin([categories$, products$])
      .subscribe((result)=>{
        this.categoriesData = JSON.stringify(result[0]);
        this.productsData = JSON.stringify(result[1]);
      });
  }

}
