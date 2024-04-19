# JS Operators

### Here you can see operator types of JS with samples for better understanding

# JavaScript Operators Overview

## 1. Arithmetic Operators:
- **`+`** : Addition.
  
  ```javascript
  let sum = 5 + 3; // sum is now 8
  ```

- **`-`** : Subtraction.
   ```javascript
    let difference = 10 - 4; // difference is now 6
   ```
- **`*`** : Multiplication.
  ```javascript
  let product = 2 * 6; // product is now 12
  ```
  
- **`/`** : Division.
   ```javascript
  let quotient = 20 / 5; // quotient is now 4
  ```
  
- **`%`** : Modulus (remainder of division).
   ```javascript
  let remainder = 15 % 4; // remainder is 3 (15 divided by 4 leaves a remainder of 3)
  ```

## 2. Assignment Operators:
- **`=`** : Assignment.
  
   ```javascript
  let x = 10;
  ```
- **`+=`, `-=`, `*=`, `/=`, `%=`** : Assignment with operation.
  
   ```javascript
  let y = 5;
  y += 3; // equivalent to y = y + 3, so y is now 8
  ```

## 3. Comparison Operators:
- **`==`** : Equality.
  
   ```javascript
  console.log(5 == '5'); // true (values are equal, type coercion)
  ```
   
- **`===`** : Strict Equality.
  
   ```javascript
  console.log(5 === '5'); // false (values are equal, but types are different)
  ```
   
- **`!=`, `!==`** : Inequality.
  
   ```javascript
  console.log(10 != 5); // true (values are not equal)
  console.log(10 !== '10'); // true (values and types are not equal)
  ```
   
- **`>`, `<`, `>=`, `<=`** : Comparison Operators.
  
   ```javascript
  console.log(8 > 5); // true
  console.log(8 >= 8); // true
  ```

## 4. Logical Operators:
- **`&&`** : Logical "AND".
  
   ```javascript
  let condition1 = true;
  let condition2 = false;
  console.log(condition1 && condition2); // false (both conditions must be true for result to be true)
     ```

- **`||`** : Logical "OR".
  
   ```javascript
  let condition3 = true;
  let condition4 = false;
  console.log(condition3 || condition4); // true (either condition being true results in true)
  ```
   
- **`!`** : Logical "NOT".
  
   ```javascript
  let condition5 = true;
  console.log(!condition5); // false (negates the condition)
  ```

## 5. Increment and Decrement Operators:
- **`++`** : Increment.
  
   ```javascript
    let num = 5;
    num++; // num is now 6
    ```

- **`--`** : Decrement.
  
   ```javascript
    let count = 10;
    count--; // count is now 9
    ```

## 6. Ternary Operator:
- **`? :`** : Ternary Operator.
  
   ```javascript
  let age = 25;
  let canVote = age >= 18 ? 'Yes' : 'No';
  console.log(canVote); // 'Yes' (age is 25, so canVote is 'Yes')
     ```


## 7. Bitwise Operators:
- **`<<`**, **`>>`**, **`>>>`** : Bitwise shift operators.
  
   ```javascript
  let num1 = 8; // 00001000 in binary
  console.log(num1 << 1); // 16 (00010000 after left shift by 1 bit)
  ```

## 8. Delete Operator:
- **`delete`** : Removes a property from an object or an element from an array.
  
   ```javascript
  let obj = { name: "John", age: 30 };
  delete obj.age; // Removes the 'age' property from the object
  console.log(obj); // { name: "John" }
     ```

   ```javascript
  let arr = [1, 2, 3, 4];
  delete arr[2]; // Removes the element at index 2, resulting in [1, 2, undefined, 4]
  console.log(arr); // [1, 2, empty, 4]
  ```

## 9. Unary Operators:
- **Unary Plus (+)**: Converts an operand to a number.
  
   ```javascript
  let num1 = +'10'; // num1 is now a number 10
  let num2 = +true; // num2 is now a number 1
     ```

- **Unary Negation (-)**: Converts an operand to a negative number.
  
   ```javascript
    let negativeNum = -5; // negativeNum is now -5
     ```

- **Increment (++) and Decrement (--)**: Prefix or postfix operators.
  
     ```javascript
    let count = 10;
    count++; // postfix increment, count is now 11
    ++count; // prefix increment, count is now 12
     ```
     ```javascript
    let value = 15;
    value--; // postfix decrement, value is now 14
    --value; // prefix decrement, value is now 13
    ```

## 10. Conditional (Ternary) Operator:
- **`condition ? expr1 : expr2`**: Ternary operator for conditional expressions.
  
   ```javascript
    let age = 25;
    let canVote = age >= 18 ? 'Yes' : 'No';
    console.log(canVote); // 'Yes' (age is 25, so canVote is 'Yes')
   ```

## 11. Comma Operator:
- **`,`** : Allows multiple expressions in a single statement.
  
  ```javascript
    let a = 1, b = 2, c = 3;
    console.log(a, b, c); // Output: 1 2 3
  ```
  ```javascript
    let x = (y = 5, z = 10);
    console.log(x); // Output: 10 (comma operator evaluates expressions from left to right and returns the value of the last expression)
    console.log(y); // Output: 5
    console.log(z); // Output: 10
  ```

## Dynamic Data Typing in JavaScript:
JavaScript belongs to the category of languages with dynamic data typing. This means that the data type of a variable is determined automatically
 during program execution and can change during the program's execution.
  ```javascript
  let variable = "Hello"; // variable is initially of type string

  console.log(typeof variable); // outputs "string"

  variable = 10; // variable now contains a numerical value

  console.log(typeof variable); // outputs "number"
 ```

In this example, the variable variable was initially initialized with the string value "Hello", making its data type "string". However, we then reassigned 
the variable to the number 10, and now its data type is "number". This demonstrates the dynamic nature of data typing in JavaScript.
