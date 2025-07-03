//The instanceof operator is another type guard in typescript that allows you to check weather an object is an instance of a particular class or constructor function

class Dog {
    bark(): void {
        console.log("Woof!");
    }
}

class Cat {
    meow(): void {
        console.log("Meow!");
    }
}

//Example function with instanceof type guard
function animalSound(animal:Dog | Cat) : void{
   if(animal instanceof Dog){
    //within this block,typescript knows that 'animal' is an instance of dog
    animal.bark();
   } else {
    //within this block,typescript knows that 'animal' is an instance of Cat
    animal.meow();
   }
}

//Example usage 
const myDog = new Dog();
const myCat = new Cat();

animalSound(myDog);
animalSound(myCat);