// Boolean
let completed: boolean = false;
console.log(completed);

// string
let fullName: string = "Aayush Sharma";
console.log(fullName);

// number
let digit: number = 10;
console.log(digit);

//Array
let nums: number[] = [1, 2, 3, 4, 5];
console.log(nums);
// other Array define type
let nums1: Array<number> = [10, 20, 30, 40];
console.log(nums1);

// Any
// any is a type that disables type checking and effectively allows all types to be used.
let something: any = "Aayush";
something = 123;
console.log("something", something);

// unknown
//unknown is a similar, but safer alternative to any.
//TypeScript will prevent unknown types from being used,
// unknown is best used when you don't know the type of data being typed. To add a type later, you'll need to cast it.
const data: unknown = {
  name: "aayush",
  age: 19,
};
console.log(data);

