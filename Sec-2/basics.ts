const a = 4;

// Declaring variables with its types,

let b: string = "hello";
let c: number = 4;
let list: Array<number> = [1, 2, 3];
let flag: boolean = false;

// If we don't know what type of variable will be stored then
// we can use the 'any' keyword,

let dynamic: any

// The dynamic variable is ready to accept any types of variables

dynamic = 3;
dynamic = "hello";


for (let i = 0; i < 5; i++) {
    setTimeout(function () { console.log(i); }, 100 * i);
}