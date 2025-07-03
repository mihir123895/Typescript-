// function parameters annotations : function parameter annotations in typescript are used to specify the expected types of the parameters that a function takes

//Regular function

function addOne(num: number){
    return num + 1;
}

const result = addOne(3);
console.log(result);  //4

//arrow func annotations 
const double = (x:number,y:number) => x * y;
const res = double(2,10);
console.log(res); // 20


//double(2,10,20);
//also notice,TypeScript will gives you warning if you provide more or less arguments then you specify in your parameters area

//Default Params value
function greet(person: string = "Anonymous"){
   return `Hello ${person}` 
}

const rest = greet();
console.log(rest); //"Hello Anonymous"

//return annotations (regular)
//Regular Function

function double1(x:number){
    return x*x;
}

const result1 = double1(2);
console.log(result1);  // 4 

//return annotations(Arrow)
// using arrow functions
const double2 = (x: number) : number => x * x;
const result2 = double2(2);
console.log(2);