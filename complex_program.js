// Filename: complex_program.js
// Description: This complex program demonstrates advanced JavaScript concepts and techniques

// Utility function to check if a given number is prime
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}

// Class representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getAgeInMonths() {
    return this.age * 12;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Function to check if a given string is a palindrome
function isPalindrome(str) {
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]+/g, '');
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}

// Helper function to generate Fibonacci sequence up to a given number of terms
function generateFibonacci(numOfTerms) {
  const fibonacci = [0, 1];

  for (let i = 2; i < numOfTerms; i++) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
  }

  return fibonacci;
}

// Class representing a shape
class Shape {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getArea() {
    throw new Error('Abstract method not implemented!');
  }
}

// Class representing a rectangle
class Rectangle extends Shape {
  constructor(name, width, height) {
    super(name);
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

// Function to perform bubble sort on an array
function bubbleSort(arr) {
  const len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Usage examples/demo
const complexNum = Math.PI + Math.sqrt(5);
console.log(`A complex number: ${complexNum}`);

const isPrimeResult = isPrime(37);
console.log(`Is 37 prime? ${isPrimeResult}`);

const person = new Person('John', 25);
console.log(`Person's age in months: ${person.getAgeInMonths()}`);
person.greet();

const palindromeResult = isPalindrome('A man, a plan, a canal: Panama');
console.log(`Is "A man, a plan, a canal: Panama" a palindrome? ${palindromeResult}`);

const fibonacciSequence = generateFibonacci(10);
console.log('Fibonacci sequence:', fibonacciSequence);

const rectangle = new Rectangle('Rectangle', 5, 7);
console.log(`Area of the ${rectangle.getName()}: ${rectangle.getArea()}`);

const sortedArray = bubbleSort([7, 3, 10, -2, 0, 5]);
console.log('Sorted array:', sortedArray);

// ... continue with more sophisticated and elaborate code ...