// // Generics
// Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.

// Generics makes it easier to write reusable code.

function logAnything<T>(arg: T): T {
  console.log(arg);
  return arg;
}

logAnything([1, 2, 3]);
logAnything("Hello");

interface HasAge {
  age: number;
}

// function getOldest(people: HasAge[]): HasAge {
//   return people.sort((a, b) => b.age - a.age)[0];
// }

function getOldest<T extends HasAge>(people: T[]): T {
    return people.sort((a, b) => b.age - a.age)[0];
  }

const people = [{ age: 50 }, { age: 20 }, { age: 35 }, { age: 40 }];
console.log(getOldest(people).age);

interface Player {
  name: string;
  age: number;
}

const players: Player[] = [
  { name: "aayush", age: 20 },
  { name: "ravi", age: 30 },
  { name: "piyush", age: 25 },
];

//one way which is not best way
// const person = getOldest(players) as Player
// console.log(person.name);

// Generics
const person = getOldest(players);
console.log(person.name+" "+person.age);
