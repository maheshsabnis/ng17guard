import { Component, OnInit } from '@angular/core';
import { BFFModel } from '../models/app.bff.model';
import { BFFService } from '../htppservice/bff.service';

@Component({
  selector: 'app-bff',
  standalone: true,
  imports: [],
  templateUrl: './bff.component.html',
  styleUrl: './bff.component.css'
})
export class BFFComponent implements OnInit {

  bffData: Array<BFFModel>;

  constructor(private serv: BFFService){
    this.bffData = new Array<BFFModel>();
  }



  ngOnInit(): void {
     this.serv.getBffData()
     .subscribe({
      next:(resp)=>{
          this.bffData = resp;
      },
      error:(err)=>{
         console.log(`Error`);
      }
     })
  }

}
