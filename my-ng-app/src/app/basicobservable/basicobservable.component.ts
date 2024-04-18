import { CommonModule, NgForOf } from '@angular/common';
import { Component } from '@angular/core';

// import for various Operators / APIs / Objects from RxJs

import {of, Observable, Observer} from 'rxjs';
import {map, filter} from 'rxjs/operators';

@Component({
  selector: 'app-basicobservable',
  standalone: true,
  imports: [CommonModule, NgForOf],
  templateUrl: './basicobservable.component.html',
  styleUrl: './basicobservable.component.css'
})
export class BasicobservableComponent {
  // define some sample observables
  data$:Observable<number>;
  data1$:Observable<number>;
  filteredData$:Observable<string>;



  collection:number[];
  multCollection:number[];
  names:string [];

  constructor(){
    this.collection = [];
    this.multCollection = [];
    this.names = [];
     // lets create an observable based on stream of numbers
     // Lazy PUSH Collection that holds multiple records
     // This allows to: filter(), map(), take(), takeLast(), takeUntil(), skip(), etc.

     this.data$ = of(1,2,3,4,5,6);

     // Lets subscribe to this observable to show each value from it
     this.data$.subscribe({
      next:(val)=> {
        this.collection.push(val);
       // console.log(val);
      }
     });

     // Lets manipulate the observable
     //pipe(): Foundational function on Observable that is used to
     // Provide mechanism to process /  manipulate observable based on needs
     //map(): Applied on Observable and use to process each emitted valuen from the Observable and hence modify the observable

     this.data1$ = of(10,20,30,40,50,60).pipe(
       map((val)=> val * 5) // Modify each emitted value from observable by multiplcation by 5
     );

     this.data1$.subscribe({
      next:(res)=>{
        this.multCollection.push(res);
      }
     });

     // Create an observable using the 'Observable' class

     const myObservable:Observable<string>= new Observable<string>((observer)=>{
        observer.next("James");
        observer.next("Jack");
        observer.next("Jason");
        observer.next("Indiana");
        observer.next("Ethan");
        observer.next("Reacher");
     });

     // Lets filter data from myObservable
     this.filteredData$ = myObservable.pipe(
       filter((name)=> name.length > 5)
     );

     this.filteredData$.subscribe({
      next: (name)=> this.names.push(name)
     });



  }
}
