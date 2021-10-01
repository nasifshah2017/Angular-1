function add(x: number, y: number): number {
    return x + y;
}

console.log(add(5, 10));    // 15

let add_var = function (x: number, y: number) {     // Anonymous function 
    return x + y;
}

add_var(5, 10)              // 15

// Anonymous functions can be simplified with the help of Fat Pipe operator
// In the recent version of JavaScript ES-6 and Typescript brought this
// feature where we can skip writting the 'function' keyword and just
// write arguments in brackets followed by Fat Pipe(=>) operator,

let add_var_2 = (x: number, y: number) => {
    return x + y;
}

// When we use the Fat Pipe operator Typescript will automatically know
// that this is a nameless or an anonymous function. 

// We can call this Anonymous function by just calling the variable
// assigned to that function like before,

add_var_2(5, 10)       // 15

// These functions are also called Rocket functions or Arrow functions. 