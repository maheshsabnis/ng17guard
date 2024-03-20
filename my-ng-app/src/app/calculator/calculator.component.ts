import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
  x:number = 0;
  y:number=0
  result:number=0;

  add():void {
    this.result = parseInt(this.x.toString()) + parseInt( this.y.toString());
  }
  clear():void {
    this.x = 0;
    this.y = 0;
    this.result = 0;
  }
}
