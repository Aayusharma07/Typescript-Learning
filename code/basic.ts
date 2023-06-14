// console
console.log("Hello World");

// function calling
function greetings(name: string): void {
  console.log(`Hello ${name}, How you doing :)`);
}

greetings("Aayush Sharma");


// function calling array
function getTotal(numbers: number[]): number {
  return numbers.reduce((acc, item) => {
    return acc + item;
  });
}

const numbers: number[] = [1, 2, 3, 4, 5];
console.log(getTotal(numbers));





