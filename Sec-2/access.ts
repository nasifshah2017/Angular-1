import { classDemo } from './classDemo';

let object = new classDemo(123);

object.setUsername("Nasif");
console.log(object.getUsername());           // hello
console.log(object.getSSN());

function validate(value: string) {
    console.log(value);
}

validate("hey");        // hey

// The return type of the function is written on 
// the right hand side of the function.

// Here the type of the argument being accepted 
// by the function is a number

// And the type of the value being returned is
// also number.

function increment(value: number): number {
    return value + 1;
}

console.log(increment(2));

/* let obj = {
    color: "red",
    engine: 100,
}

console.log(obj.engine); // 100 */

// The Interface defines the contract of an object.
// It will tell you how our object should be like.
// For example, our Interface is vehicle. So, the
// Government of the country we are in, needs to 
// impose some rules and define a contract in 
// developing vehicles so that all vehicle companies 
// follwo the rules of that Government contract.

// So, the Government will release an Interface,
// a Blueprint detailing how are vehicle object
// should be and what properties our vehicles 
// should have.

// Based on those properties every car company will
// have their own implementation. 

// That is why Interface defines a body, but it will
// not have the real content inside it. It will just 
// define the outer skeleton of the body and how the body
// looks like. But the implementation of this should be 
// doen extending those interfaces. 

export interface vehicle {
    color: string;
    engine: number;
    camera: boolean;
    GPS?: boolean;      // Optional property
}

// So, this is a contract of the vehicles, with the interface
// we are actually defining a contract like this. 
// The Government made it mandatory for the vehicles to have this 
// properties inorder to get them on the market. This looks like 
// an object but it is not a real object. The real values will not
// be passed. This will just define a body.

// Every car will have their own implementation based on the interface

// We need to validate the car before sending it to the market,

function validateCar(car: vehicle) {
    console.log(car.camera);
    console.log(car.engine);
}

// So lets declare a car depending on the interface,

let BMW = {
    color: "red",
    engine: 100,
    camera: true,
}

let Honda = {
    color: "black",
    engine: 500,
    camera: false,
    GPS: true,
}

validateCar(BMW);
validateCar(Honda);
