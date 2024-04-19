import { Component } from '@angular/core';
import { of, take,takeWhile, filter, takeLast, fromEvent, mergeMap,map, takeUntil } from 'rxjs';

@Component({
  selector: 'app-tak',
  standalone: true,
  imports: [],
  templateUrl: './tak.component.html',
  styleUrl: './tak.component.css'
})
export class TakComponent {
   source1$=of(10,20,30,40,50);

   source2$ = of(3,3,3,9,1,4,5,8,96,3,66,3,3,3);


   constructor(){
     // Take the First EMitted value from the Observable
     const takeFirst = this.source1$.pipe(take(50));
     // Lets subscribe
     takeFirst.subscribe({
      next: (val)=>console.log(`The FIrst Value ${val}`)
     }).unsubscribe();

     // Keep reading data from Observable based on te condition

     const takeWhileCondition = this.source1$.pipe(takeWhile(v=>v<30));
     takeWhileCondition.subscribe({
      next: (val)=>console.log(`While Value is less than 30 ${val}`)
     }).unsubscribe();


     // DIffernce between filter and takeWhile
     // While will read till the next value is false for the condition
     // 3,3,3
     this.source2$.pipe(takeWhile(v=>v === 3))
        .subscribe((v)=> console.log(`Read with takeWhile ${v}`));

      // filter will read complete observable till the condition is true
      // 3,3,3,3,3,3,3
        this.source2$.pipe(filter(v=>v === 3))
        .subscribe((v)=> console.log(`Read with filter ${v}`));


        // last

        this.source1$.pipe(takeLast(2)).subscribe(v=>console.log(`Last::: ${v}`));


        // using takeUntil: this will keep processing the Observable
        // untill some condition (value based / action based ) is not met

        // Lets create observable for mouse events attached to 'document'

        const mousedown$ = fromEvent(document, 'mousedown');
        const mouseup$ = fromEvent(document, 'mouseup');
        const mousemove$ = fromEvent(document, 'mousemove');

        // Lets track mouse events using its observables
        // keep reading mouse postions with clictX and clientY
        // till the mouse button is down, when mouse button is
        // up stop ttacking

        mousedown$.pipe(
          // COntinue for Mouse Down and Merge with Mouse Move
          mergeMap(v=> {
            // track the X and Y coordinates
            return mousemove$.pipe(
              map((e:any)=> ({
                  x: e.clientX,
                  y: e.clientY
              })),
              // keep executing the mouseMove observable until the mouseup dosent takes place
              takeUntil(mouseup$)
            )
          })
        ).subscribe((v)=> {
          console.log(`x: ${v.x} and y: ${v.y}`);
        });


   }


}




