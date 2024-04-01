import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-sample',
  standalone: true,
  imports: [],
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.css'
})
export class SampleComponent implements OnChanges {
  @Input()
  message: string;

  constructor(){
    this.message = "";
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('The Child Sample Component is changed');
  }
}
