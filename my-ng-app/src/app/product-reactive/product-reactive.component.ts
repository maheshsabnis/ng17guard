import { Component } from '@angular/core';
import { Product } from '../models/app.product.model';
import { ProductLogic } from '../logic/app.product.logic';
import { Categories, Manufacturers } from '../models/app.constants';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { CustomValidator } from './app.custom.validator';

@Component({
  selector: 'app-product-reactive',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './product-reactive.component.html',
  styleUrl: './product-reactive.component.css'
})
export class ProductReactiveComponent {
  product:Product;
  products:Array<Product>;

  categories: Array<string>;
  manufacturers : Array<string>;


  columns:Array<string>;

  private logic:ProductLogic;

  frmProduct: FormGroup;

 /// Inject the FormBuilder in the Component so that its will
 // provide a simpler way of defining a mapping between the Model class, (in our case, its Product)
 // and the HTML UI created in Template HTML file represented using 'templateUrl'


  constructor(private formBuilder:FormBuilder){
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

    // Lets define the Configuration
    // define the validation configurations using the Key-Value Pair
    this.frmProduct = this.formBuilder.group({
      ProductId: new FormControl(this.product.ProductId,
          Validators.compose([
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(20),
            //Validators.pattern('[A-Za-z0-9]+')
          ])),
      ProductName: new FormControl(this.product.ProductName),
      Category: new FormControl(this.product.Category),
      Manufacturer: new FormControl(this.product.Manufacturer),
      Price: new FormControl(this.product.Price, Validators.compose([
        CustomValidator.NonZeroAndNegative
      ]))
    });


  }


  save():void {
    this.product = this.frmProduct.value; // read values for each FormControl under the FormGroup
    this.products = this.logic.addProduct(this.product);
  }

  rowclick(row:Product):void {
    this.frmProduct.setValue(row);
  }



}
