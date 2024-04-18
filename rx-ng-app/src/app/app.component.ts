import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Observable, Observer, fromEvent, map } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    time$:Observable<any>;

    constructor(){
       this.time$ = new Observable<string>((observer:Observer<string>)=>{
        /* EMit next new value after each second*/
         setInterval(()=>observer.next(new Date().toString()),1000);
       });


       // Lets attach an event  i.e. click to DOM (document) and emit the latest
       // position of mouse pointer where the cick has taken place

       const clicks = fromEvent<PointerEvent>(document, 'click');
       // Emit the X-position where the click will takes place
       const clickPositions = clicks.pipe(map(evt=>evt.clientX));

       // lets subscribe to the clickPositions observable
        clickPositions.subscribe({
          next: (position)=> console.log(`Current X-Postion Mouse Click : ${position}`)
        });
    }
}
