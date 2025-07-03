// Enums :- Enum is a way to define a set of named constants. Enums allow you to define a collection of related values that can be used interchangeably in your code

//for example,let's say you're building a weather app and you want to define a set of possible weather conditions like "Sunny","cloudy","rainy", and "snowy". You could define an enum like this:

enum WeatherConditions {
    Sunny,
    Cloudy,
    Rainy,
    Snowy,
}

// In this example,WeatherConditions is the name of the enum,and each of the values(e.g. Sunny,Cloudy,etc.) is assigned an automatic numerical value string from 0.

// You can also assign specific value to each enum members like this: 

enum Weather {
    Sunny = "sunny",
    Cloudy = "cloudy",
    Rainy = "rainy",
    Snowy = "snowy"
}

const currentWeather = Weather.Sunny;
// console.log(WeatherConditions)
console.log(`The current weather is ${currentWeather}`);
