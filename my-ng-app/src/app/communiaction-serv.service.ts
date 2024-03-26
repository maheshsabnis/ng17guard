import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CommuniactionServService {

  // 1. Data member that will be set to listen and received data from SenderCOmponent

  id:number;

  // 2. An Event EMitter that will be used to emit an event to the
  // subscriber so that the data will be avaialbel with the subscriber

  received:EventEmitter<number>;

  constructor() {
    this.id = 0;
    this.received = new EventEmitter<number>();
  }

  // 3. a method that will be invoked by the sender to send the data
  // This method will emit an event so that the subsciber will
  // receive lastest data

  onReceived(v:number):void {
    // 4. Save data locally
     this.id = v;
     this.received.emit(this.id);
  }
}
