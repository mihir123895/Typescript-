//  ClassPropertiesAnnotations : You can annote class propertise with a type.this allows you to define the data types of the property and ensure that it is always defined the data type of the property and ensure that it is always consistent

class Person {
    name: string;
    age:number;

    constructor(name: string,age:number){
        this.name=name;
        this.age=age;
    }
}

const person = new Person("John",20);
console.log(person);