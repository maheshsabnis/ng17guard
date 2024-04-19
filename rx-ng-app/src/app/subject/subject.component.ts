import { Component, OnInit } from '@angular/core';

import { Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  standalone:true,
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  sub:Subject<string>;
  value = "";
  subList = "";
  constructor() {
    this.sub = new Subject<string>();
  }

  ngOnInit() {
     // The First Subscriber
     this.subList += 'The First Subscriber started';
     this.sub.subscribe(v=>{this.value += `${v}<br/>` });

    // STart processing the subject by emitting string data
    this.sub.next("Emitting First Record........");

    // The Second Subscriber
    this.subList += 'The Second Subscriber started';
    this.sub.subscribe(v=>{this.value += `${v}<br/>` });
    this.sub.next("Emitting the Second REcord ......");

      // The Third Subscriber
      this.subList += 'The Third Subscriber started';
      this.sub.subscribe(v=>{this.value += `${v}<br/>` });
      this.sub.next("Emitting the Third REcord ......");

  }

}
