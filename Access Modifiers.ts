// // Access Modifiers :- in typescript,you can use access modifiers to control the visibility of class members (properties and methods).Access modifies determine the ways in which class members can be accesses from within and outside the class

// // There are three types of accessModifiers :- Public , Private , Protected 

// //Private:Members marked as private can only be accessed from within the class they are defined in 
// //Public:Members marked as public can be accessed from anywhere,both inside and outside the class
// //Protected: Members marked as protected can be accesses from within the class they are defined in,as well as any subclass that extend the class 

// class Animal {
//     public name: string;
//     private age: number;
//     protected species: string;

//     constructor(name:string,age:number,species:string) {
//         this.name = name;
//         this.age = age;
//         this.species = species;
//     }

//     public getName():string {
//         return this.name;
//     }

//     private getAge():number {
//         return this.age;
//     }

//     protected getSpecies(): string {
//         return this.species;
//     }
// }

// class Dog extends Animal {
//     constructor(name:string,age:number){
//         // super(name,age,"Canine");
//         super(name,age,"canine");
//     }
//     public getInfo(): string {
//     return `${this.getName()} is a ${this.getSpecies} and is  years old.`
// }
// }

// let A1 = new Dog("Timmy",10);
// console.log(A1)
// console.log(A1.getInfo())


class Person {
    private first: string;
    public last: string;
    protected age: number;

    constructor (first:string,last:string , age:number){
        this.first = first;
        this.last = last;
        this.age = age;
    }

    getName(): string {
        return `${this.first} ${this.last} ${this.age}`
    }
}

class Human extends Person {
    constructor(first:string,last:string , age:number){
        super(first,last,age);
        // this.age = age;

    }
}

let p1=new Human("Mihir", "Patel",10);
console.log(p1.getName());  //  "Mihir Patel 10" 