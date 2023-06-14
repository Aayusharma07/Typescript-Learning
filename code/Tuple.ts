// A tuple is a typed array with a pre-defined length and types for each index.
// Tuples are great because they allow each element in the array to be a known type of value.

let ourTuple : [number, string, boolean];

ourTuple = [123, "Aayush", false];

console.log(ourTuple);

// Readonly Tuple
// A good practice is to make your tuple readonly.
let myTuple : readonly [number, string, boolean];

myTuple = [123, "Aayush", false];
//myTuple.push('asd'); //Property 'push' does not exist on type 'readonly [number, string, boolean]'.ts(2339)
console.log(ourTuple);