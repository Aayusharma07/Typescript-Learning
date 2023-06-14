// type alias 
// Type Aliases allow defining types with a custom name (an Alias).
// Type Aliases can be used for primitives like string or more complex types such as objects and arrays:

type nameType=string;

const username: nameType ="Aayush SHarma";
console.log(username);


type Details = {
    name: string,
    age: number,
    address: string,
    pinCode: number
}

const userDetails: Details = {
    name: "Aayush Sharma",
    age: 27,
    address: "12,Ratneshwer Road, Ratlam",
    pinCode: 457001
}

console.log(userDetails);