import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../models/app.customer.model';

@Component({
  selector: 'app-customer-list',
  // standalone: true,
  // imports: [],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent implements OnInit{
  customers:Array<Customer>;
  constructor(){
    this.customers = new Array<Customer>();
  }
  ngOnInit(): void {
     this.customers.push(new Customer(101,'Mahesh'));
     this.customers.push(new Customer(102,'Tejas'));
     this.customers.push(new Customer(103,'Amit'));
     this.customers.push(new Customer(104,'Ajit'));
     this.customers.push(new Customer(105,'Abhijit'));
     this.customers.push(new Customer(106,'Mayuresh'));
  }

}
