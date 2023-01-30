---
layout: default
date: 2023-01-13
title: Review - JavaScript Fundementals
series: Foundations
tags:
  - JavaScript
  - Frontend
---
# Contents
<details>
  <summary>Fundementals Part 1: Variables and Opeartors</summary>
  <details>
  <summary>Name the three ways to declare a variable</summary>
      
  `const`, `let`, `var`
  </details>

  <details>

  <summary>Which of the three variable declarations should you avoid and why?</summary>

  `var`, it has unexpected behaviours
  </details>

  <details>
    <summary>What rules should you follow when naming variables?</summary>
      
  - only use letters, digits or symbols `$` and `_`
  - never start with a digit

  </details>

  <details>
    <summary> What happens when you add numbers and strings together?</summary>
    
    if any of the operands is a string, the other one will be converted to a string as well
  </details>

  <details>
    <summary>How does the Modulo (%), or Remainder, operator work?</summary>

  the result of `a % b` is the remainder of integer a divided by b</p>
  </details>

  <details>
    <summary>Explain the difference between == and ===.</summary>

  - `==` checks only the equality of the data value, not the data type
  - `===` checks the equality of both the value and data type
  </details>

  <details>
    <summary>When would you receive a NaN result?</summary>
    
  tring to do arithmetic with a non-numeric string will result in NaN (not a number)
  </details>

  <details>
    <summary>How do you increment and decrement a number?</summary>
    
  increment operator: ++, decrement operator: --
  </details>

  <details>
    <summary>Explain the difference between prefixing and postfixing increment/decrement operators.</summary>

  - their return values are different
  - a++: return the older value of a first, then increment
  - ++a: a is increment first, then return the new value of a
  </details>

  <details>
    <summary>What is operator precedence and how is it handled in JS?</summary>
    
  if an expression has multiple operators, their execution order is defined by the precedence
  </details>

  <details>
    <summary> How do you access developer tools and the console?</summary>
    
  right click on the blank webpage and click `inspect` option</p>
  </details>

  <details>
    <summary>How do you log information to the console?</summary> 
      
  once open up the developer tools, select the `console` tab, all the `console.log()` will show up there
  </details>

  <details>
    <summary>What does unary plus operator do to string representations of integers? eg. +"10"</summary>

  it will convert the string into a number
  </details>
</details>

<details>
  <summary>Fundementals Part 2: Boolean and Conditions</summary>
<details>
  <summary>What are the eight data types in JavaScript?</summary>

- Seven primitive data types:
  
  number, bigint, string, boolean, null, undefined, symbol

- one non-primitive data type:
  
  object

</details>

<details>
  <summary>Which data type is NOT primitive?</summary>

object


</details>
<details>
  <summary>What is the relationship between null and undefined?</summary>

null refers to variable that does not exist

undefined refers to declared varriable that does not have a value assignned yet 

</details>
<details>
  <summary>What is the difference between single, double, and backtick quotes for strings?</summary>

single and double quotes are the same, can both be used to create a string value, however, they can't be used inside the value properly without escape characters .

backtick quotes can be used to create a template string which can include variable wrrapped with `${}`, inside the string value.
</details>
<details>
  <summary>What is the term for embedding variables/expressions in a string?</summary>

template literal

</details>
<details>
  <summary>Which type of quote lets you embed variables/expressions in a string?</summary>

backtick quotes

</details>
<details>
  <summary>How do you embed variables/expressions in a string?</summary>

wrap the variable name with `${}` 

</details>
<details>
  <summary>How do you use escape characters in a string?</summary>

put backslash `\` before the character

</details>
<details>
  <summary>What is the difference between the slice/substring/substr string methods?</summary>

`slice` vs `substring`: both use `posStart` and `posEnd` as parameters, however negtive number is not allowed in `substring`

`slice` vs `substr`: second parameter is different, `substr` uses length

</details>
<details>
  <summary>What are the three logical operators and what do they stand for?</summary>

three: `||`, `&&`,`!`

chain of `||`: finds the first truthy value, if not rreturns the last

nullish coalescing: `??`

</details>
<details>
  <summary>What are the comparison operators?</summary>

greater than, less than, equal, not equal

</details>
<details>
  <summary>What are truthy and falsy values?</summary>

- truthy value: the value if converts to a boolean it returns true
- falsy value: the value if converts to a boolean it returns false

</details>
<details>
  <summary>What are the falsy values in JavaScript?</summary>

```
null, undefined, 0, "", NaN
```

</details>
<details>
  <summary>What are conditionals?</summary>

an expression that evaluates to a boolean

</details>
<details>
  <summary>What is the syntax for an if/else conditional?</summary>

```
if (condition) {
  // code to execute if the condition is true
}

```
</details>
<details>
  <summary>What is the syntax for a switch statement?</summary>

```
switch(expressin){
  case value1:
    //code to execute
    break;
  case value2:
    //code to execute
    break;
  default:
}

```
</details>
<details>
  <summary>What is the syntax for a ternary operator?</summary>

```
condition ? <expression1 if true>: <expression2>
```

</details>
<details>
  <summary>What is nesting?</summary>

put one `if...else...` statement inside another one

</details>

</details>

<details>
  <summary>Fundementals Part 3：Function Basics</summary>


<details>
  <summary>What are functions useful for?</summary>

functions are used to store a block of code and allows you to execute them repeatedly with a single short command. 

</details>

<details>
  <summary>How do you invoke a function?</summary>

function name followed with `()` and parameters inside.

</details>

<details>
  <summary>What are anonymous functions?</summary>

a function without name.

</details>

<details>
  <summary>What is function scope?</summary>

when a function is created, the variables and other thing definesd inside the function can not be accessed from the outside of the function. So it's the area enclosed with `{}` when the function  is decalared.

</details>

<details>
  <summary>What are return values?</summary>

Return value is the value returned when function is finished.

</details>

<details>
  <summary>What are arrow functions?</summary>

a simple and concise way of creating function.

</details>

</details>

<details>
  <summary>Fundementals Part 4: Array and Loops</summary>

<details>
  <summary>What is an array?</summary>

a special variable that can hold more than one value.

</details>

<details>
  <summary>What are arrays useful for?</summary>

it is useful to store a list of values under a single varaible name and allows you to access a specific one with the index number.

</details>

<details>
  <summary>How do you access an array element?</summary>

bracket notation: variable name followed with brackets and index number.

</details>

<details>
  <summary>How do you change an array element?</summary>

use bracket notation to reassign the value.

</details>

<details>
  <summary>What are some useful array properties?</summary>

length property, access the first and the last element 

</details>

<details>
  <summary>What are some useful array methods?</summary>

loop through the array with forEach, add and remove elements from the array

</details>

<details>
  <summary>What are loops useful for?</summary>

useful for to doing the same thing over and over again

</details>

<details>
  <summary>What is the break statement?</summary>

exits the loop before all iterations have been completed

</details>

<details>
  <summary>What is the continue statement?</summary>

skip the current iteration and move to the next iteration

</details>

<details>
  <summary>What is the advantage of writing automated tests?</summary>

writing automated tests are describi8ng how the code should work before actaully implementing it. you write the test that uses the code and supplies the expected results. It is more productive and makes it easier to add new features without breaking previous features in large code base.

</details>

</details>

<details>
  <summary>Fundementals 5: Objects</summary>

<details>
  <summary>What is the difference between objects and arrays?</summary>

objects are associative arrays which uses named index while array uses numbered index. object stores key-value pairs.

</details>

<details>
  <summary>How do you access object properties?</summary>

bracket or dot notation.

</details>

<details>
  <summary>What is Array.prototype.map() useful for?</summary>

map method calls a function on each element in the array ans returns the values as an array.

</details>

<details>
  <summary>What is Array.prototype.reduce() useful for?</summary>

the reduce method calls a reducer function on each of the element in the array and returns the final single accumulated value. 

</details>

</details>

<details>
  <summary></summary>


</details>


















 