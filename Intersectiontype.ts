//  Intersection types :- An intersection type is a way to combine multiple types into a single type that includes all the properties and methods of each constituent type.An intersection type is denoted by the & stymbol.

//step - 1

type Person ={
    name:string;
    age:number;
};

type Employee = {
    id:number;
    title:string;
}

//step 2
type PersonAndEmployee = Person & Employee;

//step-3
const alice : PersonAndEmployee = {
    name:"Alice",
    age:21,
    id:123,
    title:"Manager",
}
console.log(alice);

type userInfo = {
    first:string;
    last:string;
    age:number;
}

type AccountDetails = {
    email:string;
    password:string;
}

type User = userInfo & AccountDetails;

const huxn: User ={

    first:"Mihir",
    last:"Patel",
    age:21,
    email:"mp@gmail.com",
    password:"password",
}

console.log(`Name: ${huxn.first} ${huxn.last} ,Age: ${huxn.age} ,Email: ${huxn.email} ,Password: ${huxn.password}`);

// type Fullname = {
//     firstName: string;
//     lastName: string;
// };

// type UserInfo = {
//     fullname: Fullname;
//     first: string;
//     last: string;
//     age: number;
// };
