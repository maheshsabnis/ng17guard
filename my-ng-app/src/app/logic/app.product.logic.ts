import { Product } from "../models/app.product.model";

export class ProductLogic {
  private products: Array<Product>;

  constructor(){
    this.products = new Array<Product>();

    this.products.push(new Product('Prod-0001', 'Laptop', 'HP', 'Electronics', 100000));
    this.products.push(new Product('Prod-0002', 'Bulb', 'Bajaj', 'Electrical', 200));
    this.products.push(new Product('Prod-0003', 'Salt', 'TATA', 'Food', 80));
  }

  getProducts():Array<Product>{
    return this.products;
  }
  addProduct(prod:Product):Array<Product>{
    this.products.push(prod);
    return this.products;
  }
}
