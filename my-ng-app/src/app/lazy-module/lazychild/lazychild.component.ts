import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazychild',
  templateUrl: './lazychild.component.html',
  styleUrls: ['./lazychild.component.css']
})
export class LazychildComponent implements OnInit {

  message:string;
  constructor() {
    this.message = 'I am Lazy Child Compoent, please do not hate me.!!!';
   }

  ngOnInit() {
  }

}
