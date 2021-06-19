// // constructor for a new car 
// const Vehicle = function(name, wheels){
//   this.name = name;
//   this.wheels = wheels;
//   //this methode is a properety for the car
//   this.fast = function(){
//     this.isFast = true;
//   }
// }
// //Attribute for the car or (Behavior)
// Vehicle.prototype.exhaust = function (){
// this.haveExhaust = true;
// }

// const Car = function (name, wheels)
// {
//   Vehicle.call(this, name, wheels);
// }

// Car.prototype = Object.create(Vehicle.prototype);

// let BMW = new Car ('BMW', 4);
// BMW.exhaust();
// BMW.fast();
// console.log(BMW);
// console.log(BMW instanceof Vehicle);
// console.log(BMW instanceof Car);
 



 //Main Vehicle class
 class Vehicle {

    constructor(name, wheels){
      this.name = name;
      this.wheels = wheels;
    }
  
    exhaust(){
      this.haveExhaust =  true;
    }
  
   fast(){
     this.isFast = true;
   }
   
   
  // comfort(){
  //    this.IsComfort = 'So Comfort';
  //    console.log('So Comfort');
  //  }
  
  
   
  }
   //Sub class of Vehicle
  class Car extends Vehicle{
   constructor(name, wheels, type){
     super(name, wheels);
     this.type = type;
   }
  
  
  
   comfort(){
     console.log('So Comfort');
     this.isComfort = 'So Comfort';
   }
  }
  
  
  let MercedesBenz = new Car ('MercedesBenz', 4, 'Sport');
  MercedesBenz.exhaust();
  MercedesBenz.fast();
  MercedesBenz.comfort();
  console.log(MercedesBenz);
  
  
  // let MercedesBenz = new Car ('MercedesBenz', 4);
  // MercedesBenz.exhaust();
  // MercedesBenz.fast();
  // console.log(MercedesBenz);