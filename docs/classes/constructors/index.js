export class Vehicle {
   constructor (engineType, numberOfDoors, make) {
       this._engineType = engineType;
       this._numberOfDoors = numberOfDoors;
       this._make = make;
   }
   get make () {
       return this._make
   }
   get numberOfDoors () {
       return this._numberOfDoors
   }
   get engineType () {
       return this._engineType
   }
}

export class Truck extends Vehicle{
   constructor (_engineType, _numberOfDoors, _make){
       super('V8', 2, 'Ford')
   }

}

export class Car extends Vehicle{
   constructor (_engineType, _numberOfDoors, _make){
       super('V4', 4, 'Toyota')
   }

}

export const F150 = new Truck ('V8', 2, 'Ford');
export const Prius = new Car ('V4', 4, 'Toyota');