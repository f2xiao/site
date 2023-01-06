---
layout: default
date: 2022-10-05
title: React Testing Library
tags:
  - Frontend
  - Unit Testing
  - Reactjs
---

# TDD

TDD stands for test driven development. A method for development with test cases.

## what is TDD?

Before write the code of the program, you pre-specify the inputs and its intended output, which is called a test case.

## why TDD?

TDD makes you to think of what you want your program to behave before writing the actual code so that you can change the code later on without breaking previous requirements.

## how to TDD?

You write an initial test with some test cases. Then write some code, and run the tests to make sure your code pass the tests. Then you either refactor the program code or the test code. Rerun the tests until the tests are passed to make sure you program still works.

## real World Practice

There are tools to help run the tests automatically and makes writing tests easier:
1. test-running tool, a.k.a test runner
2. testing library tool

### test Runner

Test runner: a tool to run the tests in matched test files automatically and print the results on the command line with script
For example: Jest, Chai

Testing library tool: additional tools that provide APIs for defining specific test case
For example: React testing library provide APIs for the react component's test case, like rendering the componnent and matchers to assert the context, attributes and event handlers on the DOM.

# Jest

Jest: a test runner and testing framework of JavaScript.

test runner: automatically run tests in the specific test files with script in Node

test files: files with `<filename>.test.js` by default

## Relations of test suite, test case and assertions

relations: assertions  ⊂ a test case  ⊂ a test suite

a test case is a collection of assertions and a test suite is a collection of test cases.

## Syntaxs

## test suite:
  
`describe(<string>,callback)`

## test case: 

`test(<string>,callback)` or `it(<string>,callback)` 

## assertion: 

implicit + explicit

implicit assertion: `<actualFn(input)>` returns error by default

explicit assertion: `expect(<actual-result>).<assertive-result>` or `expect(<actual-result>).not.<assertive-result>`

actual-result: `<actualFn(input)>`

assertive-result: `<assertiveFn(input)>`

# React Testing Library

TDD in React  = test runner + additional testing tool = Jest + React testing library

## Standard per Test Case Process

React unit test process per test case: 
1. render the component
2. select the element by search functions
3. assertions about the selected element or elements

## Manually or with Snapshot

test case can be done: manually or with snapshot

### manually 

explicitly declares each test case with assertions

### snapshot 

automatically generate snapshot of trees and compares them to show what have changed from the last render
1. render the comp with `render.create(<JSX>).toJSON()`, `render.create(<JSX>)` returns the tree of the component (HTML tag tree), `<HTML-tree>.toJSON()` converts the tree to JSON object
2. check if the the tree structure matches the snapshot with `expect(<HTML-tree-JSON>).toMatchSnapshot()`

## What to test

When testing a react component, we usually test if a component is rendered correctly, so we first need to render the component:
`render(<JSX>)`

Then we can  find them by searching for the element on the renderer:
`<selected-element>`=`screen.<search-varints><search-types>`

Then we can make assertions on the selected elments:
`expect(<selected-element>).<matchers>`

### Test case with element context or attributes

### Test case with DOM events

### Test Case with Fire Event

### Test case with User Event










