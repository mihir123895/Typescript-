//Type Inference is a feature in TypeScript that allows the compiler to automatically determine the type of a variable based on its value.In other words,if you declare a variable without explicitly specifying its type,Type script will try to infer the type based on the value you assign to it


let tech = "TypeScript";
let favNumber = 8;
let isEasy = true;

isEasy = false;

console.log(typeof tech, typeof favNumber,typeof isEasy);
console.log(tech, favNumber,isEasy);

//error
//tech = false
//favNumber = "hello";
// isEasy = 20;

