// Interfaces are similar to type aliases, except they only apply to object types.

interface Transaction {
  payerAccountNumber: number;
  payeeAccountNumber: number;
}

interface BankAccount {
  accountNumber: number;
  accountHolder: string;
  balance: string;
  isActive: boolean;
  transactions: Transaction;
}

const bankAccount: BankAccount = {
  accountNumber: 123,
  accountHolder: "Aayush Sharma",
  balance: "RS. 11,21,234 ",
  isActive: true,
  transactions: {
    payerAccountNumber: 21345321345,
    payeeAccountNumber: 2132435465,
  },
};

console.log(bankAccount);

// extends example
interface Book {
  name: string;
  author: string;
}

interface Ebook extends Book {
  category: string;
  fictional: boolean;
  format: string;
}

interface AudioBook extends Ebook {
  duration: number;
}

const bookDetail: AudioBook = {
  name: "who will cry when you die",
  author: "Robin Sharma",
  category: "motivational",
  fictional: false,
  format: "pdf",
  duration: 5,
};

console.log(bookDetail);

// merge
interface Demo {
  name: string;
  city: string;
}

interface Demo {
  age: number;
}

const demoDetails: Demo = {
  name: "John",
  city: "ratlam",
  age: 19,
};

console.log(demoDetails);



