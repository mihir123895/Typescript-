//Unions : Unions are used to declare a type that can have one of several possible types,unions are useful when we want to allow  a variable or parameter to accept multiple types.
// The syntax for declaring a union type in typescript uses the pipe symbol(|).

//For example,if we want to define a variable that can be either a number or a string, we would write:

let myVar: number | string;

let password : string | number = 20;

type UserInfo = {
    name: string;
    last: string;
    age: number;
}

type AccountDetails = {
    email: string;
    password : string;
}

let user: UserInfo & AccountDetails = {
    name: "Mihir",
    last: "Patel",
    age: 10,
    email: "mp52@gmail.com",
    password :"password123",
}

const items: (number | string)[] = [1,5,5, "hello"];
console.log(items);

//String literal types 
let color: "red" | "blue" | "green";
color = "red"; //valid
// color = "yellow"; //invalide 

//Numberic Literal types 
let number: 1|2|3;
number = 1; // valid
// number = 4; // invalid

//Boolean literal types
let isTrue: true;
isTrue = true; //valid
// isTrue = false; 


let pass: "secretpassword" = "secretpassword";
console.log(pass);