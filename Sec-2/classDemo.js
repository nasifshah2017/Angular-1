"use strict";
exports.__esModule = true;
exports.classDemo = void 0;
var classDemo = /** @class */ (function () {
    // The constructor() is the method that is called the when
    // we declare an object of the class. It is the first thing
    // that gets called when we declare the object. If we do
    // not define a constructor then the program will call an
    // empty default constructor itself when the object is 
    // declared
    function classDemo(ssn) {
        this.ssn = ssn;
    }
    classDemo.prototype.getUsername = function () {
        return this.username;
    };
    classDemo.prototype.setUsername = function (username) {
        this.username = username;
    };
    classDemo.prototype.getSSN = function () {
        return this.ssn;
    };
    return classDemo;
}());
exports.classDemo = classDemo;
// First we need to create an object of the class
// Then using the object we will call the properties 
// or methods of that class
// Creating object
// let object = new classDemo(123);
// Now this 'object' variable has the capability to
// call all the methods defined in the class
/*  object.setUsername("Nasif");
    object.getUsername();           // hello
    object.getSSN();    */ 
