// unions
// Union types are used when a value can be more than a single type.
type ID = number | string;

function printId(id: ID) {
  //narrowing
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

printId("1");

// example

function getFirstThree(x: string | number[]) {
  return x.slice(0, 3);
}

console.log(getFirstThree("hello"));
console.log(getFirstThree([1, 2, 3, 4, 5]));


