---
layout: default
date: 2022-10-05
title: Frontend TDD - Test Runner Jest
series: testing
tags:
  - Frontend
  - Unit Testing
  - Reactjs
---

# Jest

Jest: a test runner and testing framework of JavaScript.

test runner: automatically run tests in the specific test files with script in Node

test files: files with `<filename>.test.js` by default

## Relations of test suite, test case and assertions

relations: assertions  ⊂ a test case  ⊂ a test suite

a test case is a collection of assertions and a test suite is a collection of test cases.

## Syntaxs

## test suite:
  
  ```
  describe(<string>,callback)
  ```

## test case: 

  ```
  test(<string>,callback)  
  ``` 
  or
  ```
  it(<string>,callback)
  ```

## assertion: implicit + explicit

implicit assertion: 
  
  ```
  <actualFn(input)>
  ``` 
  returns error by default

explicit assertion: 

    expect(<actual-result>).<assertive-result>

  or
    
    expect(<actual-result>).not.<assertive-result>

actual-result: 

    <actualFn(input)>

assertive-result: 
    
    <assertiveFn(input)>











