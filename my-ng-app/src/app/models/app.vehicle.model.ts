export class Vehicle {
  constructor(
      public id: number,
      public name: string,
      public price: number
  ){}
}

export const Vehicles:Array<Vehicle> = new Array<Vehicle>();

Vehicles.push(new Vehicle(101, 'Grand Vittara', 2300000));
Vehicles.push(new Vehicle(102, 'Swift', 650000));
Vehicles.push(new Vehicle(103, 'Swift DeZire', 890000));
Vehicles.push(new Vehicle(104, 'Electra', 1300000));
Vehicles.push(new Vehicle(105, 'Grand Swift', 1600000));
Vehicles.push(new Vehicle(106, 'Grand Electra Vittara', 2400000));
Vehicles.push(new Vehicle(107, 'Swift DeZire Automatic', 1700000));
Vehicles.push(new Vehicle(108, 'Grand Vittara Electra', 2700000));
Vehicles.push(new Vehicle(109, 'Grand Alto Sports', 900000));
Vehicles.push(new Vehicle(110, 'Swift Icon', 800000));

export class PurchasedVehicle {
  constructor(
      public id: number,
      public name: string,
      public price: number,
      public totalPrice: number
  ){}
}
