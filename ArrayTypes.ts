// Arrays Types 

// Arrays are a type of object that can store multiple values of the same data type.Arrays in typescript are typed,which means you can specify the type of values tthat an array can hold.

// 2 types of arrays

// Using the square bracket notation [] to indicate an array of a specific type
// Using the generic Array<type> notation to indicate an array of a specific type

const numbers: number[] = [1,2,3,4];
console.log(numbers);

const names: Array<string> = ["Alice","Bob","Charlie"];
console.log(names);

const items: string[] = [];
items.push("keyboard","mouse");
// items.push(12); this throws error
// items.push(true);  this also throws an error
console.log(items);

//Multi Dimensinal array

// A multi-dimensional array is an array that contains other arrays as its Element.multi-dimensional arrays can be defined using the same notaation as one-dimensional arrays, but with nestead square bracket 

const matrix: number[][] = [[1,2,3],[5,6,7]];

const singleDi : number[] = [1,2,3,4,5];
const multiDi: number[][] = [[1,2,3,],[7,8,9]];
const triple:number[][][] = [[[1,2,3,4]]];

console.log(singleDi);
console.log(multiDi);
console.log(triple);

