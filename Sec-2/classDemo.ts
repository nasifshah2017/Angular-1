import { vehicle } from './access';

export class classDemo {
    // Properties, Methods. Constructor

    // We don't need to define 'let' here because
    // when we are defining a variable inside a class
    // the 'let' keyword is already defined on it by default

    username: string;           // Property
    password: string;           // Property
    ssn: number;                // Property

    // The constructor() is the method that is called the when
    // we declare an object of the class. It is the first thing
    // that gets called when we declare the object. If we do
    // not define a constructor then the program will call an
    // empty default constructor itself when the object is 
    // declared

    constructor(ssn: number) {
        this.ssn = ssn;
    }

    getUsername() {             // Method
        return this.username;
    }

    setUsername(username: string) {             // Method
        this.username = username;
    }

    getSSN() {                  // Method
        return this.ssn;
    }
}

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

function validateCar(car: vehicle) {
    console.log(car.camera);
    console.log(car.engine);
}
