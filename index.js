// // const Vehicles = function(name , wheels ,door){
// //   this.name = name;
// //   this.wheels = wheels;

// //   this.door = function(){
// //     this.doors = door;
// //   }
// // }

// // Vehicles.prototype.fast = function(){
// //   this.isFast = true;
// // }


// // Vehicles.prototype.slow = function(){
// //   this.isSlow = true;
// // }

// // Vehicles.prototype.comfort = function(){
// //   this.isComfort = 'Soo Comfort';
// // }

// // let BMW = new Vehicles ('BMW' , 4 , 2);
// // BMW.fast();
// // BMW.comfort();
// // BMW.door();


// // console.log(BMW);


// // const Bikes = function (name ,wheels)
// // {
// //   Vehicles.call(this ,name , wheels);
// // }

// // Bikes.prototype = Object.create(Vehicles.prototype);

// // Bikes.prototype.maxSpeed = function()
// // {
// //   this.maxSpeed = '300 KM/H';
// // }

// // let Honda = new Bikes ( 'Honda', 2);
// // Honda.fast();
// // Honda.maxSpeed();

// // console.log(Honda);

// // console.log(BMW instanceof Vehicles);
// // console.log(BMW instanceof Bikes);
// // console.log(Honda instanceof Vehicles);
// // console.log(Honda instanceof Bikes);











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
 





// class Vehicle {
     
//   constructor(name , wheels){
//     this.name = name;
//     this.wheels = wheels;
//   }

//   fast(){
//     this.isFast = true;
//   }

//   exhaust(){
//     this.haveExhaust = true;
//   }

// }

// let MercedesBenz = new Vehicle ("MercedesBenz" , 4);
// MercedesBenz.fast();
// console.log(MercedesBenz);


// class Cars extends Vehicle{
//   constructor(name , wheels , color){
//     super (name , wheels);
//     this.color = color;
  
//   }

//   doors(){
//     this.doorsNumber = 4;
//   }
// }


// let Kia = new Cars ('Kia' , 4 , "red");
// Kia.exhaust();
// Kia.doors();
// console.log(Kia);


// //  //Main Vehicle class
// //  class Vehicle {

// //     constructor(name, wheels){
// //       this.name = name;
// //       this.wheels = wheels;
// //     }
  
// //     exhaust(){
// //       this.haveExhaust =  true;
// //     }
  
// //    fast(){
// //      this.isFast = true;
// //    }
   
   
// //   // comfort(){
// //   //    this.IsComfort = 'So Comfort';
// //   //    console.log('So Comfort');
// //   //  }
  
  
   
// //   }
// //    //Sub class of Vehicle
// //   class Car extends Vehicle{
// //    constructor(name, wheels, type){
// //      super(name, wheels);
// //      this.type = type;
// //    }
  
  
  
// //    comfort(){
// //      console.log('So Comfort');
// //      this.isComfort = 'So Comfort';
// //    }
// //   }
  
  
// //   let MercedesBenz = new Car ('MercedesBenz', 4, 'Sport');
// //   MercedesBenz.exhaust();
// //   MercedesBenz.fast();
// //   MercedesBenz.comfort();
// //   console.log(MercedesBenz);
  
  
// //   // let MercedesBenz = new Car ('MercedesBenz', 4);
// //   // MercedesBenz.exhaust();
// //   // MercedesBenz.fast();
// //   // console.log(MercedesBenz);

'use strict';

// function reverse(arr) {
// 	let reversed =[];
// 	for (let i=(arr.length-1) ; i>=0; i--)
// 		{
// 			reversed.push(arr[i]);
// 		}
//     console.log(arr);
// 	return reversed;
// }


// console.log(reverse(['M','A','R','A','M']));




// function countTrue(arr) {
// 	let count=0;
// 	for(let i=0 ; i<arr.length ; i++){
// 		if(arr[i]==true){count++;}

// 	}
//   return count;

// }  
//   countTrue([true,true,false,true]);


// function   console.log(evenOrOdd(str) {
// 	let even = 0;
// 	let odd = 0;
// 	for (let i=0;i<str.length;i++)
// 		{
// 			if(str[i]%2===0){ even++; }
// 			else{ odd++ };
			
// 		}
//     console.log( `even ${even} : odd ${odd}`);
// 	if(even == odd){ return "Even and Odd are the same"; }
// 	else if (even > odd) { return "Even is greater than Odd"; }
// 	else if (odd < even) { return "Odd is greater than Even" ;}
	
// }


// console.log(  console.log(evenOrOdd("4589620"));



// function compact(arr) {
// 	let result =[];
// 	 for( let i=0; i<arr.length; i++)
// 		 {
// 			 if ( arr[i] > 0 || arr[i] <0 )
// 				 {
// 					 result.push(arr[i]);
// 				 }
// 		 }
// 	return result;
// }
// console.log(compact([0, 1, false, 2, "", 3, -9 , 0.0004 , -0.00005 , true]));




// function toArray(obj) {
	
//   let arr =[];
//    for (const properety in obj) {

//     arr.push([ properety , obj[properety] ]);


// }
// console.log(arr);
// return arr;
// }


// console.log(toArray({}));



// function  evenOrOdd(str) {
//     let even = 0;
//     let odd = 0;
//     for (let i=0;i<str.length;i++)
//        {
//             if(str[i]%2===0){ even++; }
//            else{ odd++ };
           
//         }
    
//    if(even == odd){ return "Even and Odd are the same"; }
//     else if (even > odd) { return "Even is greater than Odd"; }
//     else if (odd > even) { return "Odd is greater than Even" ;}
   
// }

//   console.log(evenOrOdd('12345'));
//   console.log(evenOrOdd('143'));   
//   console.log(evenOrOdd('2221'));   
//   console.log(evenOrOdd('23456'));   
//   console.log(evenOrOdd('4321'));  
//   console.log(evenOrOdd('3245'));  
//    console.log(evenOrOdd('14256'));   
//    console.log(evenOrOdd('11234'));   
//    console.log(evenOrOdd('1734'));  
//    console.log(evenOrOdd('145'));  
//    console.log(evenOrOdd('22471'));   
//    console.log(evenOrOdd('213613'));   
//    console.log(evenOrOdd('23456'));   
//    console.log(evenOrOdd('9738'));  
//    console.log(evenOrOdd('34522'));   
//    console.log(evenOrOdd('12378'));  
//    console.log(evenOrOdd('45228'));   
//    console.log(evenOrOdd('4455')); 
//    console.log(evenOrOdd('6721'));   
//    console.log(evenOrOdd('92184'));    
//    console.log(evenOrOdd('12'));   
//    console.log(evenOrOdd('123'));  
//    console.log(evenOrOdd('112')); 
//    console.log(evenOrOdd('124'));   






