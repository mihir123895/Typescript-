// Void in typeScript 
// Void is a type that represents the absence of any.It is often used as return type for functions that do not return a value.

function printMessage(message: string) : void {
    console.log(`This is my ${message}`);
}

printMessage("Message"); //"This is my Message"