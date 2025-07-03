// An object in type Typescript is a structured data type that represents a collection of prperties,each with a key and an associated value,the properties of an object can have specific types,and the object itself can be annoated with a type,often defined using an interface or a type alias.typescript uses structural typing,meaning that the shape of an object(its structural or properties) is what matters for type compability.

// type varName (annotations/types) = {property : value} 

const person : {firstName: string; lastName:string; age:number } = {
    firstName: "Mihir",
    lastName: "Patel",
    age:30,
}

console.log(person);
console.log(`Name:${person.firstName} ${person.lastName},Age: ${person.age}`);

//Objects as function return value 

function printUser() : {name:string; age:number; location:string}{
    return {
     name:"Mihir",
     age:21,
     location:"INDIA"
    };
}

const res = printUser();
console.log(res);
console.log(res.name);