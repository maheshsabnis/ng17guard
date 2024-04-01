import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PurchasedVehicle, Vehicle, Vehicles } from '../models/app.vehicle.model';




@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {
  // Define Signals
  quantity = signal(1);
  availableQuantity = signal([1,2,3,4,5,6,7,8,9,10]);
  chosenQuantity =signal(1);
  vehicles = signal<Vehicle[]>(Vehicles); // COmplex Signal Object

  // Define Signals those will be updated based on the
  // Operations performed on UI

  selectedId = signal<number>(0);
  selectedVehicle = signal<Vehicle>(new Vehicle(0,'',0));
  purchasedVehicles = signal<PurchasedVehicle[]>([]);
  purchasedVehicle = signal<PurchasedVehicle>(new PurchasedVehicle(0,'',0,0));


  // define a compute signal that will be used to calculate
  // ex-showrrom price based on the price and the quantity
  // for the selected vehicle

  exShowRoomPrice = computed(()=>this.selectedVehicle().price * this.quantity());

  constructor(){
    // based on the latest
    // selected quantity  update the quantity value in mutiple of 1
    this.quantity.update((qty)=>qty*1);
    // update signals for selectedVehicle(), purchasedVehicle(), and purchasedVahicles()
    this.selectedVehicle.update((veh)=>veh);
    this.purchasedVehicle.update((pv)=>pv);
    this.purchasedVehicles.update((pvs)=>[...pvs, this.purchasedVehicle()])
  }

  // Event for QUantity Select for choosing teh quantity so that
  // the quantity Signal value will ne set
  onSelectedQusntity(qty:number):void {
    this.quantity.set(qty);
    console.log(this.quantity());
  }

  // Method for Selected Vehicle
  onSelectedVehicle(vehId:number):void {
    // Filter Vahicle frol the Vehicles array

    let veh = this.vehicles().filter((v,i)=>{
      return v.id == vehId;
    })[0];

    // set the selected object to the selectedVehicle() signal
    this.selectedVehicle.set(veh);

    // let's set the putchasedVehicle() signal
    let purchased = new PurchasedVehicle(
      veh.id, veh.name, veh.price, this.exShowRoomPrice()
    );

    this.purchasedVehicle.set(purchased);

  }

  savePurchase():void {
        // let's set the putchasedVehicle() signal
        let purchased = new PurchasedVehicle(
         this.selectedVehicle().id, this.selectedVehicle().name,
         this.selectedVehicle().price,
         this.exShowRoomPrice()
        );

        this.purchasedVehicle.set(purchased);

    this.purchasedVehicles.set([...this.purchasedVehicles() , this.purchasedVehicle()]);
  }

}
