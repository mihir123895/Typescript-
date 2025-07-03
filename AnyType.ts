// Any type : TypeScript has a special any type that can be used to represent any type.When a variable is annotated with the any type,TypeScript will alow it to have any value and disable all type checking for that variable and its properties

let color: any = "red";
color = 20;

// color();
// color.toUpperCase();
console.log(color) //20 

//Any Type warning : While the any type can be useful in certain situations,it should be used springly.Overuse of any can be lead to untyped code and make it harder to catch type-related bugs during development.it's generally better to use more specific types whenever possible to get the benefits of typescript's type checking
