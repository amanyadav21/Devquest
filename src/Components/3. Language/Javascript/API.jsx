const jsQuestions = {
  Introduction: [
    { id: 1, question: "Write a Hello World! program in JavaScript." },
    { id: 2, question: "What is JavaScript? Explain its main uses." },
    {
      id: 3,
      question: "Describe the differences between JavaScript and Java.",
    },
    {
      id: 4,
      question:
        "What are the different ways to include JavaScript in a webpage?",
    },
    { id: 5, question: "Explain the role of the <script> tag in JavaScript." },
    {
      id: 6,
      question:
        "Write a program to print the current date and time in JavaScript.",
    },
    { id: 7, question: "What are the key features of JavaScript?" },
  ],

  Variables: [
    // **Basic (7)**
    {
      id: 1,
      question:
        "Write a program to declare and print a variable in JavaScript.",
    },
    {
      id: 2,
      question:
        "Explain the difference between `var`, `let`, and `const` with examples.",
    },
    {
      id: 3,
      question: "Write a program to demonstrate dynamic typing in JavaScript.",
    },
    {
      id: 4,
      question:
        "What are primitive and non-primitive data types in JavaScript? List examples.",
    },
    {
      id: 5,
      question:
        "Write a program to check the data type of a variable using `typeof`.",
    },
    {
      id: 6,
      question:
        "Write a program to swap two variables without using a third variable.",
    },
    {
      id: 7,
      question:
        "What are template literals? Write a program to demonstrate them.",
    },

    // **Medium (2)**
    {
      id: 8,
      question: "Explain variable hoisting in JavaScript with an example.",
    },
    {
      id: 9,
      question:
        "Write a program showing how block scope works with `let` and `const`.",
    },

    // **Hard (1)**
    {
      id: 10,
      question:
        "What is the Temporal Dead Zone (TDZ)? Write a code snippet demonstrating it.",
    },
  ],

  DataTypes: [
    // **Basic (10)**
    {
      id: 1,
      question:
        "What are the 7 primitive data types in JavaScript? List them with examples.",
    },
    {
      id: 2,
      question:
        "Write a program to check if a variable is a string using `typeof`.",
    },
    {
      id: 3,
      question:
        "What is the difference between `null` and `undefined`? Show with examples.",
    },
    {
      id: 4,
      question:
        "Write a program to convert a string to a number without using `parseInt` or `Number()`.",
    },
    {
      id: 5,
      question: "How do you check if a variable is an array? Write a program.",
    },
    {
      id: 6,
      question: "What is NaN? Write a program to check if a value is NaN.",
    },
    {
      id: 7,
      question:
        "Write a program to concatenate two strings and a number (e.g., 'Hello' + 42 + 'World').",
    },
    {
      id: 8,
      question: "What is the output of `typeof []` and `typeof {}`? Explain.",
    },
    {
      id: 9,
      question:
        "Write a program to convert a boolean to a string (e.g., `true` → 'true').",
    },
    {
      id: 10,
      question: "What is type coercion? Give an example of implicit coercion.",
    },

    // **Mix: Medium + Hard (5)**
    {
      id: 11,
      question:
        "Why does `0.1 + 0.2 !== 0.3` in JavaScript? How would you fix it?",
    },
    {
      id: 12,
      question:
        "Write a function to deeply check if two objects have the same keys and values.",
    },
    {
      id: 13,
      question:
        "What are Symbol data types? Write a program to create and use a Symbol.",
    },
    {
      id: 14,
      question:
        "How does `BigInt` work? Write a program adding a BigInt and a regular number (hint: conversion needed).",
    },
    {
      id: 15,
      question:
        "Explain pass-by-value vs pass-by-reference in JavaScript with examples.",
    },
  ],

  Operators: [
    // Basic (7)
    {
      id: 1,
      question:
        "Write a program to add, subtract, multiply, and divide two numbers using arithmetic operators (+ - * /).",
    },
    {
      id: 2,
      question:
        "What's the difference between loose equality (==) and strict equality (===)? Show examples where they give different results.",
    },
    {
      id: 3,
      question:
        "Write a program that uses the ternary operator to check if a number is even or odd.",
    },
    {
      id: 4,
      question:
        "Write examples using logical operators (&&, ||, !) to combine conditions.",
    },
    {
      id: 5,
      question:
        "Write a program that uses the modulus operator (%) to check if a number is divisible by 5.",
    },
    {
      id: 6,
      question:
        "What does the typeof operator return? Write a program to check types of different variables.",
    },
    {
      id: 7,
      question:
        "Write a program using comparison operators (>, <, >=, <=) to compare two numbers.",
    },

    // Medium (2)
    {
      id: 8,
      question:
        "What is short-circuit evaluation? Show how && and || work with non-boolean values.",
    },
    {
      id: 9,
      question:
        "Write a program using bitwise operators (&, |, ^) to perform basic bit manipulations.",
    },

    // Hard (1)
    {
      id: 10,
      question:
        "Explain operator precedence in JavaScript. Write an expression where precedence changes the result.",
    },
  ],

  'Control-Statements': [
    // **Basic (10)**
    {
      id: 1,
      question:
        "Write a program to check if a number is positive, negative, or zero using if-else.",
    },
    {
      id: 2,
      question:
        "Write a program to find the largest of three numbers using if-else.",
    },
    {
      id: 3,
      question:
        "Write a program to check if a number is even or odd using an if statement.",
    },
    {
      id: 4,
      question:
        "Write a program to print numbers from 1 to 10 using a for loop.",
    },
    {
      id: 5,
      question:
        "Write a program to print all even numbers between 1 and 20 using a loop.",
    },
    {
      id: 6,
      question:
        "Write a program to print a multiplication table of 5 using a for loop.",
    },
    {
      id: 7,
      question:
        "Write a program to demonstrate a simple switch-case statement (e.g., day of the week).",
    },
    {
      id: 8,
      question:
        "Write a program to calculate the sum of numbers from 1 to 10 using a while loop.",
    },
    {
      id: 9,
      question:
        "Write a program to print 'Hello' 5 times using a do-while loop.",
    },
    {
      id: 10,
      question:
        "Write a program to demonstrate the use of the break statement to exit a loop early.",
    },

    // **Medium (4)**
    {
      id: 11,
      question:
        "Write a program to find the factorial of a number using a for loop.",
    },
    {
      id: 12,
      question:
        "Write a program to print the Fibonacci sequence up to 10 terms.",
    },
    {
      id: 13,
      question: "Write a program to check if a number is prime using a loop.",
    },
    {
      id: 14,
      question:
        "Write a program to demonstrate nested loops by printing a simple pattern (e.g., a square of stars).",
    },

    // **Hard (1)**
    {
      id: 15,
      question:
        "Write a program to reverse a number using a while loop (e.g., 123 → 321).",
    },
  ],

  Functions: [
    // **Basic (12)**
    {
      id: 1,
      question:
        "Write a function that takes two numbers as arguments and returns their sum.",
    },
    {
      id: 2,
      question:
        "Write a function to check if a number is even or odd and return 'Even' or 'Odd'.",
    },
    {
      id: 3,
      question: "Write a function to find the maximum of two numbers.",
    },
    {
      id: 4,
      question:
        "Write a function to greet a user by name (e.g., 'Hello, John!').",
    },
    {
      id: 5,
      question:
        "Write a function to calculate the area of a rectangle (length × width).",
    },
    {
      id: 6,
      question: "Write a function to check if a string is empty or not.",
    },
    {
      id: 7,
      question:
        "Write a function to concatenate two strings and return the result.",
    },
    {
      id: 8,
      question:
        "Write a function to convert Celsius to Fahrenheit (F = C × 9/5 + 32).",
    },
    {
      id: 9,
      question: "Write a function to return the square of a number.",
    },
    {
      id: 10,
      question:
        "Write a function that returns 'Yes' if a number is positive, otherwise 'No'.",
    },
    {
      id: 11,
      question:
        "Write a function to count and return the number of vowels in a string.",
    },
    {
      id: 12,
      question:
        "Write a function to reverse a string (e.g., 'hello' → 'olleh').",
    },

    // **Medium (6)**
    {
      id: 13,
      question:
        "Write a function to check if a word is a palindrome (e.g., 'madam').",
    },
    {
      id: 14,
      question:
        "Write a function to calculate the factorial of a number using recursion.",
    },
    {
      id: 15,
      question:
        "Write a function to generate the first N numbers of the Fibonacci sequence.",
    },
    {
      id: 16,
      question: "Write a function to find if a number is prime or not.",
    },
    {
      id: 17,
      question: "Write a function to count the number of words in a sentence.",
    },
    {
      id: 18,
      question: "Write a function to remove all spaces from a string.",
    },

    // **Hard (2)**
    {
      id: 19,
      question:
        "Write a function to flatten a nested array (e.g., [1, [2, [3]]] → [1, 2, 3]).",
    },
    {
      id: 20,
      question:
        "Write a function to find the second largest number in an array.",
    },
  ],
  Arrays: [
    // **Basic (10)**
    {
      id: 1,
      question: "Write a function to find the largest number in an array.",
    },
    {
      id: 2,
      question:
        "Write a function to calculate the sum of all numbers in an array.",
    },
    {
      id: 3,
      question: "Write a function to remove duplicates from an array.",
    },
    {
      id: 4,
      question: "Write a function to merge two arrays and remove duplicates.",
    },
    {
      id: 5,
      question:
        "Write a function to sort an array of numbers in ascending order.",
    },
    {
      id: 6,
      question:
        "Write a function to find the second largest number in an array.",
    },
    {
      id: 7,
      question:
        "Write a function to reverse an array (do not use the reverse() method).",
    },
    {
      id: 8,
      question:
        "Write a function to check if an array includes a specific value.",
    },
    {
      id: 9,
      question: "Write a function to find the average of numbers in an array.",
    },
    {
      id: 10,
      question: "Write a function to combine two arrays into a single array.",
    },

    // **Medium (4)**
    {
      id: 11,
      question:
        "Write a function to find all even numbers from an array and return a new array.",
    },
    {
      id: 12,
      question:
        "Write a function to count how many times a specific element appears in an array.",
    },
    {
      id: 13,
      question:
        "Write a function to find the first non-repeating element in an array.",
    },
    {
      id: 14,
      question: "Write a function to flatten a nested array (one level deep).",
    },

    // **Advanced (1)**
    {
      id: 15,
      question:
        "Write a function to rotate the elements of an array to the right by a given number of steps.",
    },
  ],
  Objects: [
    // **Basic (10)**
    {
      id: 1,
      question:
        "Create an object representing a person with name, age, and city properties.",
    },
    {
      id: 2,
      question:
        "Write a function to update the age property of a person object.",
    },
    {
      id: 3,
      question: "Write a function to delete a property from an object.",
    },
    {
      id: 4,
      question: "Write a function to print all key-value pairs of an object.",
    },
    {
      id: 5,
      question:
        "Write a function to check if an object has a specific property.",
    },
    {
      id: 6,
      question: "Create a copy of an object using Object.assign().",
    },
    {
      id: 7,
      question: "Merge two objects into a new object.",
    },
    {
      id: 8,
      question:
        "Write a function to count the number of properties in an object.",
    },
    {
      id: 9,
      question:
        "Create an object with nested objects (e.g., address with street, city).",
    },
    {
      id: 10,
      question: "Write a function to get all keys of an object as an array.",
    },

    // **Medium (4)**
    {
      id: 11,
      question:
        "Write a function to deep clone an object (handle nested objects).",
    },
    {
      id: 12,
      question:
        "Write a function to compare two objects for equality (shallow comparison).",
    },
    {
      id: 13,
      question:
        "Write a function to convert an object to an array of [key, value] pairs.",
    },
    {
      id: 14,
      question:
        "Create an object constructor function for a 'Book' with title and author.",
    },

    // **Advanced (1)**
    {
      id: 15,
      question:
        "Write a function to flatten a nested object (e.g., {a: {b: 1}} becomes {'a.b': 1}).",
    },
  ],
'DOM-Manipulation': [
  // **Basic (7)**
  {
    id: 1,
    question: "Change the text content of a paragraph element when a button is clicked."
  },
  {
    id: 2,
    question: "Create a new <div> element and append it to the body of the page."
  },
  {
    id: 3,
    question: "Remove a specific list item from an unordered list when clicked."
  },
  {
    id: 4,
    question: "Toggle a 'highlight' class on a button when clicked (add/remove)."
  },
  {
    id: 5,
    question: "Change the background color of a div to red when the mouse hovers over it."
  },
  {
    id: 6,
    question: "Create a button that shows/hides an element when clicked."
  },
  {
    id: 7,
    question: "Display the current time in a <span> element and update it every second."
  },

  // **Intermediate (3)**
  {
    id: 8,
    question: "Build a simple form that adds user input as new list items to an unordered list."
  },
  {
    id: 9,
    question: "Create an image gallery where clicking a thumbnail changes the main displayed image."
  },
  {
    id: 10,
    question: "Fetch data from a mock API (using fetch()) and display it as a list in the DOM."
  }
],
  Events: [
    {
      id: 1,
      question: "Write a program to add a click event listener to a button.",
    },
    { id: 2, question: "Write a program to handle a form submission event." },
    { id: 3, question: "Write a program to capture and log keypress events." },
    {
      id: 4,
      question:
        "Write a program to demonstrate event bubbling and event delegation.",
    },
    {
      id: 5,
      question: "Write a program to disable a button after it is clicked.",
    },
    {
      id: 6,
      question: "Write a program to show a popup when a specific event occurs.",
    },
    { id: 7, question: "Write a program to debounce an input event." },
  ],
  'Form-Validation': [
    {
      id: 1,
      question: "Write a program to validate if an input field is empty.",
    },
    {
      id: 2,
      question: "Write a program to check if an email address is valid.",
    },
    {
      id: 3,
      question:
        "Write a program to validate a password with specific criteria.",
    },
    { id: 4, question: "Write a program to check if two passwords match." },
    { id: 5, question: "Write a program to validate a phone number format." },
    {
      id: 6,
      question:
        "Write a program to prevent form submission if validation fails.",
    },
    {
      id: 7,
      question:
        "Write a program to show error messages for invalid fields dynamically.",
    },
  ],
  'ES6-Features': [
    {
      id: 1,
      question: "Write a program to demonstrate the use of let and const.",
    },
    { id: 2, question: "Write a program to create and use an arrow function." },
    {
      id: 3,
      question: "Write a program to use destructuring assignment with objects.",
    },
    {
      id: 4,
      question: "Write a program to use the spread operator with arrays.",
    },
    { id: 5, question: "Write a program to demonstrate template literals." },
    {
      id: 6,
      question:
        "Write a program to create a class and an instance in JavaScript.",
    },
    {
      id: 7,
      question: "Write a program to demonstrate the use of default parameters.",
    },
  ],
  'Async-Programming': [
    { id: 1, question: "Write a program to create and resolve a promise." },
    {
      id: 2,
      question: "Write a program to handle a promise with .then and .catch.",
    },
    { id: 3, question: "Write a program to demonstrate async and await." },
    {
      id: 4,
      question:
        "Write a program to fetch data from an API using fetch and promises.",
    },
    {
      id: 5,
      question: "Write a program to handle multiple promises with Promise.all.",
    },
    { id: 6, question: "Write a program to create a delay using promises." },
    {
      id: 7,
      question: "Write a program to handle errors in async/await functions.",
    },
  ],
  FetchingData: [
    {
      id: 1,
      question: "Write a program to fetch data from a public API using fetch.",
    },
    { id: 2, question: "Write a program to display API data on a webpage." },
    {
      id: 3,
      question: "Write a program to handle errors during API fetching.",
    },
    { id: 4, question: "Write a program to use async/await for API calls." },
    { id: 5, question: "Write a program to fetch data from multiple APIs." },
    { id: 6, question: "Write a program to use fetch with POST requests." },
    {
      id: 7,
      question: "Write a program to parse JSON data from an API response.",
    },
  ],
  Closures: [
    { id: 1, question: "Write a program to demonstrate a simple closure." },
    { id: 2, question: "Write a program to create a counter using closures." },
    {
      id: 3,
      question:
        "Write a program to demonstrate closures with private variables.",
    },
    {
      id: 4,
      question:
        "Write a program to implement function currying using closures.",
    },
    {
      id: 5,
      question: "Write a program to explain lexical scoping with closures.",
    },
    {
      id: 6,
      question:
        "Write a program to create a simple module pattern using closures.",
    },
    {
      id: 7,
      question:
        "Write a program to explain how closures are used in event listeners.",
    },
  ],
  AdvancedArrayMethods: [
    {
      id: 1,
      question: "Write a program to double the elements of an array using map.",
    },
    {
      id: 2,
      question: "Write a program to filter out odd numbers from an array.",
    },
    {
      id: 3,
      question:
        "Write a program to calculate the sum of an array using reduce.",
    },
    {
      id: 4,
      question: "Write a program to chain map and filter methods on an array.",
    },
    {
      id: 5,
      question:
        "Write a program to count the occurrences of each element in an array using reduce.",
    },
    {
      id: 6,
      question: "Write a program to flatten a nested array using reduce.",
    },
    {
      id: 7,
      question:
        "Write a program to sort an array of objects by a property value.",
    },
  ],
  Classes: [
    {
      id: 1,
      question: "Write a program to create a class with a constructor.",
    },
    { id: 2, question: "Write a program to create and use a class method." },
    {
      id: 3,
      question: "Write a program to demonstrate inheritance in classes.",
    },
    { id: 4, question: "Write a program to use super in a derived class." },
    { id: 5, question: "Write a program to create static methods in a class." },
    {
      id: 6,
      question:
        "Write a program to demonstrate getters and setters in a class.",
    },
    {
      id: 7,
      question: "Write a program to demonstrate polymorphism using classes.",
    },
  ],
};

export default jsQuestions;
