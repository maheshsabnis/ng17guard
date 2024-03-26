import { Component, OnInit } from '@angular/core';
import { Products } from '../models/app.communication.model';
import { CommuniactionServService } from '../communiaction-serv.service';

@Component({
  selector: 'app-product-data',
  standalone: true,
  imports: [],
  templateUrl: './product-data.component.html',
  styleUrl: './product-data.component.css'
})
export class ProductDataComponent implements OnInit {
  products:Array<any>;

  private filteredProducts:Array<any>;

  catId:number;

  constructor(private serv: CommuniactionServService){
    this.products = Products;
    this.filteredProducts = new Array<any>;
    this.catId = 0;
  }

  // Subscribe to an event from the service
  // so that the data can be received from the service
  ngOnInit(): void {
    this.serv.received.subscribe((v:number)=>{
      this.catId = v;
      console.log(`Received CatId: ${this.catId}`);
    });
  }


  // define a public read-only property that willm retured
  // products based on the received catId
  // THis will change for each change in the 'catId'
  // propety defined in this component
  get FilteredProducts(): Array<any> {

    this.filteredProducts = new Array<any>;
    if(this.catId === 0) {
      this.filteredProducts  = this.products;
    }else {
      this.filteredProducts = this.products.filter((p,i)=>{
          return p.CatId == this.catId;
      });
    }
    return this.filteredProducts;
  }

}
