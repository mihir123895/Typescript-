//  Type Aliases : A Type alias is a way to create a new name for an exsting type.is allows you to define a custom type that refers to another type and give it a more meaningful or descriptive name
// Type aliases are defined using the type keyword followed by the name of the alias, an equal sign (=),and the type it refers to.

// type MyString = string

type Person = {
    name: string;
    age: number;
};

function printPerson(person: Person){
    console.log(`${person.name}, Age: ${person.age}`);
}

const myPerson: Person = {name:"Alice",age:25};
printPerson(myPerson);

type User = {
    name: string;
    age: number;
    location:string;
}

const printUserInfo = (user:User) =>{
    return `Name:(${user.name}) Age: (${user.age}) location: (${user.location})`
}

const res = printUserInfo({name: "Mihir", age: 20, location:"INDIA"});
console.log(res);

// Optional properties :- you can make a certain property optional in an object type by adding a question mark (?) after the property name.

// For example,let's say you have an object type for a person with name,age, and email properties,but you want to make the email property optional.you can do this by adding a question mark after the email property

// type Person = {
//     name:string;
//     age:number;
//     email?:string;
// };

// Now, when you create an object of type Person,you can choose whether or not to include the email property.

// const alice : Person = {name:"Mihir",age:21};
// const bob: Person = {name:"Bob",age:25,email:"mp@gmail.com"};

// in this example, the alice object does not include the email property,while the bob object does.Because the email property is marked as optional in the person type defination,it is valid to create objects with or without it.

type Users = {
    name:string;
    age?:number;
    readonly location:string;
}

const Mihir:Users = {
    name:"Mihir",
    age:22,
    location:"India"
}

const user: Users = {
    name:"Mihir",
    location:"India"
}

// user.location = "Something" // if it is only readonly than we can't update its value 
// console.log(`Name:${user.name},Age:${user.age}, Location: ${user.location}`);
console.log(`Name:${user.name}, Location: ${user.location}`)
