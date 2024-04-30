import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Test',
  templateUrl: './Test.component.html',
  styleUrls: ['./Test.component.css']
})
export class TestComponent implements OnInit {

  message:string;
  badgeCounter:number;
  constructor() {
    this.message = "I am a Test COmponent";
    this.badgeCounter = 0;
   }

  ngOnInit() {
  }
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }


  increaseBadgeCounter():void {
  //  this.badgeCounter++;
  setInterval(()=>{
    this.badgeCounter++
  },2000);
  }


}
