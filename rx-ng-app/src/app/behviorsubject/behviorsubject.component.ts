import { Component, OnInit } from '@angular/core';
import { NaviagationComponent } from './naviagation/naviagation.component';
import { ContentComponent } from './content/content.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-behviorsubject',
  standalone:true,
  imports:[NaviagationComponent,ContentComponent, NgIf],
  templateUrl: './behviorsubject.component.html',
  styleUrls: ['./behviorsubject.component.css']
})
export class BehviorsubjectComponent implements OnInit {

  constructor() { }

  flag=false;

  ngOnInit() {
  }


  showHide(f:boolean):void {
    if(f)
      this.flag = true;
    else
      this.flag = false;
  }

}
