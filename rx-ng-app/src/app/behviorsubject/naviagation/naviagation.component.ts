import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-naviagation',
  standalone:true,
  imports:[NgForOf],
  templateUrl: './naviagation.component.html',
  styleUrls: ['./naviagation.component.css']
})
export class NaviagationComponent implements OnInit {


  // define an array that will hold the data from the OBservable
  // Returnrf by the Service

  menus:any[];

  constructor(private serv:CommunicationService) {
    this.menus =[];
   }

  ngOnInit() {
    this.serv.getObservableFromMenus().subscribe((data)=>{
        this.menus = data;
    });
  }

  getSelectedMenu(id:any):void {
      this.serv.change_Menu_Data(id);
  }



}
