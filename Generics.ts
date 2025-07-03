// Generics :- int typescript,generics allows you to create reusable components that can work with a variety of types.Generics make it possible for you to define functions,classes, and interfaces that can work with different data types without having to duplicate code.

// generic function 
function printInfo<T>(x:T): T {
    return x;
}

const str = printInfo<string>("Hello"); // hello
const num = printInfo<number>(2); // 2
const bool = printInfo<boolean>(true); // true


function uniqueDataTypesFunc<Type>(item: Type, defaultValue : Type):[Type,Type] {
return  [item,defaultValue]
}

let res = uniqueDataTypesFunc<number | string>(10, "Mihir")
console.log(res) // [10, "Mihir"] 
res = uniqueDataTypesFunc<number>(10,10)
console.log(res) //  [10, 10] 

// -------------------------------------------------------------

interface Dog {
    name:string;
    breed:string;
}

const dog1 = uniqueDataTypesFunc<Dog>({name:"Buddy",breed:"Labrador"},{name:"default",breed:"unknown"});
console.log(dog1);

function getRandomKeyValuePair<T>(obj : {[key:string]:T}): {
    key:string;
    value:T;
} {
    const keys = Object.keys(obj);
    const randKey = keys[Math.floor(Math.random() * keys.length)]

    return {key: randKey, value: obj[randKey]}
}

const stringObject = {a:"apple",b:"banana",c:"cherry"};
const res1 = getRandomKeyValuePair<string>(stringObject);
console.log(res1);

function filterarray<T>(array: T[],condition:(item: T)=>boolean): T[]{
    return array.filter((item)=> condition(item));
}

const numberArray = [1,2,3,4,5,6,7,8,9,10];
const evenNumbers = filterarray<number>(numberArray,(num)=> num % 2 === 0);
console.log(evenNumbers)


class Box<T> {
    private content: T;

    constructor(intitalContent : T){
        this.content = intitalContent
    }

    getContent() : T {
        return this.content
    }

    setContent(newContent : T) : void {
        this.content = newContent;
    }
}

const stringBox = new Box<string>("Hello, typescript");
console.log(stringBox.getContent());

stringBox.setContent("New Content Added");
console.log(stringBox.getContent());