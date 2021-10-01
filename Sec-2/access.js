"use strict";
exports.__esModule = true;
var classDemo_1 = require("./classDemo");
var object = new classDemo_1.classDemo(123);
object.setUsername("Nasif");
console.log(object.getUsername()); // hello
console.log(object.getSSN());
function validate(value) {
    console.log(value);
}
validate("hey"); // hey
// The return type of the function is written on 
// the right hand side of the function.
// Here the type of the argument being accepted 
// by the function is a number
// And the type of the value being returned is
// also number.
function increment(value) {
    return value + 1;
}
console.log(increment(2));
// So, this is a contract of the vehicles, with the interface
// we are actually defining a contract like this. 
// The Government made it mandatory for the vehicles to have this 
// properties inorder to get them on the market. This looks like 
// an object but it is not a real object. The real values will not
// be passed. This will just define a body.
// Every car will have their own implementation based on the interface
// We need to validate the car before sending it to the market,
function validateCar(car) {
    console.log(car.camera);
    console.log(car.engine);
}
// So lets declare a car depending on the interface,
var BMW = {
    color: "red",
    engine: 100,
    camera: true
};
validateCar(BMW);
