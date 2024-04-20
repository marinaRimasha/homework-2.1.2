// Homework 2.1.4
const VALUE1 = 150;
let value2 = Math.floor(Math.random() * 1050);
let result = VALUE1 + value2 / 5 + 17;

console.log(result);
console.log(`Result is ${result} when random number is ${value2} and constant value is ${VALUE1}`);

/**
 In JavaScript, mathematical expressions are evaluated based 
 on operator precedence and associativity. Let's break down 
 the expression VALUE1 + value2 / 5 + 17 step by step:

Operator Precedence:
Multiplication (*), Division (/), and Addition (+) have different 
precedence levels.
Division and Multiplication have higher precedence than Addition
 and Subtraction.
Associativity:
Division and Multiplication are left-to-right associative, meaning they are evaluated from left to right.
Addition and Subtraction are also left-to-right associative.

1. value2 / 5:
   - Divide value2 by 5. Let's call this result result1.
   
2. VALUE1 + result1:
   - Add result1 to VALUE1. Let's call this result result2.
   
3. result2 + 17:
   - Add 17 to result2. This gives us the final result.
 */
