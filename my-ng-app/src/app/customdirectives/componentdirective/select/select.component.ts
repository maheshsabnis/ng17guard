import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  standalone:true,
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  private _DataSource:Array<any>;

  // An Event Binding
  // <app-select (onChange)=""></app-select>

  @Output()
  onChange:EventEmitter<any>;

  constructor() {
    this._DataSource = new Array<any>();
    this.onChange = new EventEmitter<any>();
  }

  ngOnInit() {
  }

  // Getter/Setter property
  // Input Decoration will make the property
  // used for Property Binding
  //<app-select [DataSource]=""></app-select>
  @Input({required:true})
  set DataSource(val:Array<any>){
     this._DataSource = val;
  }

  get DataSource():Array<any> {
    return this._DataSource;
  }


  changeValue($event:any):void {
    alert(`The Selected VAlue by Chaild: ${$event.target.value}`)
    this.onChange.emit($event.target.value);
  }
}
