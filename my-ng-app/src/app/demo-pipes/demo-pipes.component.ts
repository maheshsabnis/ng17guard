import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PowerPipe } from './custom/power.pipe';

@Component({
  selector: 'app-demo-pipes',
  standalone: true,
  imports: [CommonModule, PowerPipe],
  templateUrl: './demo-pipes.component.html',
  styleUrl: './demo-pipes.component.css'
})
export class DemoPipesComponent {
  today: number = Date.now();
  name: string = "Anguar 17 is great.";

  a: number = 0.259;
  b: number = 1.3495;
  amount: number = 60000;
  pi: number = 3.14159265359;

  a1: number = 0.259;
  b1: number = 1.3495;

  emp: Object = {fname: 'bar', lname: 'qux', experience: {years: 25, technologies: ['net', 'web', 'python']}};
}
