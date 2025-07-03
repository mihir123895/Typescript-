// Getters & Setters : Getters and setters are used to access and modify class properties.Getters and setters allow you to define a property in a class that looks like a simple variable from the outside but internallly has additional logic for getting and setting the value 
 
class MyClass {
    private _myProperty: number = 0;

    get myProperty(): number {
        return this._myProperty;
    }

    set myProperty(value: number) {
        if(value < 0) {
            throw new Error("value cannot be negative");
        }
        this._myProperty = value;
    }
 }

 const myInstance = new MyClass()

 console.log(`Current Value: ${myInstance.myProperty}`);
 myInstance.myProperty = 10;
 console.log(`Current Value: ${myInstance.myProperty}`);