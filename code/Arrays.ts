//Array

const names: string[] = ["Aayush", "Parth", "Abhishek"];
names.push("Bhasker");

console.log(names);

// Readonly example
// The readonly keyword can prevent arrays from being changed.
const team: readonly string[] = ["suraj", "vaibahv"];
// team.push("tej") 
// Property 'push' does not exist on type 'readonly string[]'.ts(2339)