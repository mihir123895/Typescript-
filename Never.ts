//Never : The Never is used to indicate that a function will not return anything or that a variable can never have a value.
// the never type is useful for indicating that certain code paths should never be reached,or certain values are impossible.
// it can help catch errors at compile-time instead of runtime.

// A function that always throws an Error
// A function that has an infinite loop
// A variable that can never have a value

//A function that always throws an error 

function throwError(msg:string) : never {
    throw new Error(msg);
}


//A function that has an infinite loop
function infiniteLoop(): never {
    while(true){

    }
}

//A variable that can never have a value

let x: never;

function neverReturn(): never {
    while(true){

    }
}

x=neverReturn();