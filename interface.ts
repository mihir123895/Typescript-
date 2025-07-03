// Interface = Interface is way to define a contract for the shape of an object.it specifies the properties amd their types that an object must have.interface are a powerful tool for enforcing a certain structure in your code.

//Interface defination 
interface Person {
    firstName: string;
    lastName:string;
    age?:number;
    sayHello(): void;
}

//usage
const examplePerson: Person = {
    firstName: "John",
    lastName:"Doe",
    age:30,
    sayHello(){
        console.log("Hello I am there")
    }
}

console.log(examplePerson);

//While interfaces are commonly used to define the structure of objects,they are not limited to just objects.Interfaces in Typescript can also be used to describe the shape of functions and classes.

//interface for function

interface MathOperation {
    (x: number, y: number): number;
}

//usage
const add: MathOperation = (a,b) => a+b;
const subtract:MathOperation = (a,b) => a - b;

console.log(add(5,3));
console.log(subtract(7,2));

//Interface for a class

interface Vehicle {
    start():void;
    stop(): void;
}

// class implementing the interface
class Car implements Vehicle {
    start() {
        console.log("Car started");
    }

    stop(){
        console.log("Car Stopped");
    }
}

// Usage
const myCar = new Car();
myCar.start();
myCar.stop();

//Declaration merging :- Once an interface is declared,it cannot be directly modified.However,TypeScript allows what is informally referred to as "decalaration merging" or "interface extension",which is often miscounstrued as "re-opening";

// Declaration merging in typeScript refers to the ability to extend or argument an existing declaration, including interface. This can be useful when you want to add new properties or methods to an existing interface without modifying the original declaration 

function greet(person: Person){
    console.log(`Hello ${person.firstName} ${person.lastName}`);
    person.sayHello();
}

const john: Person = {
    firstName: "Mihir",
    lastName: "Patel",
    age:30,
    sayHello(){
        console.log("Hello");
    }
}

greet(john);


// Example 2

interface Song {
    songName: string;
    singerName:string;
    printSongInfo(songName: string,singerName : string) : string;
}

const song1: Song = {
    songName:"Natural",
    singerName:"Imagin Drigon",
    printSongInfo:(songName,singerName) =>{
        return `Song: ${songName}. Singer: ${singerName}`
    }
}

console.log(song1.printSongInfo("Natural","Imagin Drigon")); 

interface MovieDetails {
    readonly name:string;
    ratings:number;
    printMovieInfo(name:string,price:number,rating:number): string | number;
}

interface MovieGenra extends MovieDetails {
    genra:string;
}

const movie1 : MovieGenra = {
    name: "Star Wars",
    genra:"Action",
    ratings: 8.9,
    printMovieInfo(name:string,price:number,rating:number): string | number {
        return `Movie name: ${this.name} Price: ${price} Ratings: ${rating}`;
    }
}


const res = movie1.printMovieInfo("John Wick",100,20);
console.log(res,movie1.name);