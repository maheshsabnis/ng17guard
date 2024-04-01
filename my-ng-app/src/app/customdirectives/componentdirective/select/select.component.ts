import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-select',
  standalone:true,
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit, OnChanges {

  private _DataSource:Array<any>;
  private _PropertyName: any;

  // An Event Binding
  // <app-select (onChange)=""></app-select>

  @Output()
  onChange:EventEmitter<any>;

  constructor() {
    this._DataSource = new Array<any>();

    this.onChange = new EventEmitter<any>();
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Child Changed');
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

  @Input()
  set PropertyName(val:any){
    this._PropertyName = val;
  }

  get PropertyName():any{
    return this._PropertyName;
  }




  changeValue($event:any):void {
    alert(`The Selected VAlue by Chaild: ${$event.target.value}`)
    this.onChange.emit($event.target.value);
  }


}
