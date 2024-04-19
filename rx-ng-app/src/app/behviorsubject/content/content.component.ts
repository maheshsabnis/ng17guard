import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-content',
  standalone:true,
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  content:any;
  constructor(private serv:CommunicationService) { }

  ngOnInit() {
     // Subscibe to the BEhavior Subject to get the latest emitted value
     this.serv.selectedMenus.subscribe((data)=>{
       this.content = data;
     });
  }

}
