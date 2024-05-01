import { Component, OnInit, ViewChild } from '@angular/core';
/* For Material Table and Its Pagination */
/* MatTableDataSource: Used If the Pagination is to be Implemented */
import {MatTableModule, MatTableDataSource} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';

import {MatSort, MatSortModule, Sort} from '@angular/material/sort';
import { CategoryModel } from '../model/app.category.model';
import { Categories } from '../model/app.datasource';
import { CategoryHttpService } from '../services/app.category.http.service';



@Component({
  selector: 'app-Table',
  standalone:true,
  imports:[MatTableModule, MatPaginator, MatPaginatorModule, MatSortModule],
  templateUrl: './Table.component.html',
  styleUrls: ['./Table.component.css']
})
export class TableComponent implements OnInit {
  /* DataSource for the Table */
  categories: MatTableDataSource<CategoryModel>;
  /* Define Columns */
  dataColumns = ["CategoryUniqueId", "CategoryId", "CategoryName", "BasePrice"];

  /* Lets define a ViewChild for MatPaginator a Child for Current Component
    to Show Pagination
  */
 @ViewChild(MatPaginator) paginator:MatPaginator;
 @ViewChild(MatSort) sort:MatSort;

 /* Define a PageSize */

 pageSizeOptions = [1,2,5,10,20];


  constructor(private serv:CategoryHttpService) {
    this.categories = new  MatTableDataSource<CategoryModel>([]);

  }

  ngOnInit() {
      this.serv.getCatData().subscribe({
        next:(response)=>{
          this.categories = new  MatTableDataSource<CategoryModel>(response.Records);
          /* The MatTable will inform to the DataSoure that the Pagiation must be supported */
          this.categories.paginator = this.paginator;
          /* Sort Support */
          this.categories.sort = this.sort;
        },
        error:(err)=>{}
      });
  }

}
