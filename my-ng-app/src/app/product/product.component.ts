import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../models/app.product.model';
import { ProductLogic } from '../logic/app.product.logic';
import { Categories, Manufacturers } from '../models/app.constants';
import { SelectComponent } from '../customdirectives/componentdirective/select/select.component';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule,SelectComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  product:Product;
  products:Array<Product>;

  categories: Array<string>;
  manufacturers : Array<string>;


  columns:Array<string>;

  private logic:ProductLogic;


  constructor(){
    this.product = new Product('','','','',0);
    this.products = new Array<Product>();
    this.categories = new Array<string>();
    this.categories = Categories;
    this.manufacturers = new Array<string>();
    this.manufacturers = Manufacturers;

    this.logic = new ProductLogic();

    this.products = this.logic.getProducts();

    this.columns = new Array<string>();

    // read properties of Product Class
    this.columns = Object.keys(this.product);
  }

  clear():void {
    this.product = new Product('','','','',0);
  }
  save():void {
    this.products = this.logic.addProduct(this.product);
  }

  getCat($event:any):void {
     this.product.Category = $event;
     console.log(`Received Category ${$event}`);
  }
  getMan($event:any):void {
    this.product.Manufacturer = $event;
    console.log(`Received Manufacturer ${$event}`);
 }

 // Method that will be executed when the Table Row is clicked
   onRowClick(row:Product):void{
    //  this.product = row;
    this.product = Object.assign({},row);
   }
}
