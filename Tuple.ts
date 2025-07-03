// Tuples : Tuples is a type that represents an array with a fixed number of elements, where each element can have a different type.The order of the types in the tuple definition corresponds to the order of the values in the actual array.Tuples are similar to arrays,but they have a specific structure and can be used to model finite sequence with known length

let myTuples:[string,number] = ["hello",42];
console.log(myTuples[0]); //"hello"
console.log(myTuples[1]); //42

// Destructuring individual element 

let Tuples:[string,number] = ["hello",42];
let [first,second] = Tuples;
console.log(first); // "hello"
console.log(second); //42

const products: (number | string)[] = ["item 1",12]
console.log(products);

const games: [string,string,string] = ["Game 1","Game 2","Game 3"];
console.log(games);

