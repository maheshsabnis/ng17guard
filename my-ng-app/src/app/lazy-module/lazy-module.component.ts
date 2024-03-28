import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-module',
  templateUrl: './lazy-module.component.html',
  styleUrls: ['./lazy-module.component.css']
})
export class LazyModuleComponent implements OnInit {

  constructor() {
    console.log(`This is a component from Other Module`);
  }

  ngOnInit() {
  }

  shoeMessage():void {
    alert('Hello!!! from other Module');
  }
}
