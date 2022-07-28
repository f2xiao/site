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

Unit test in React  = test runner + additional testing library = Jest + React testing library

## Per Test Case Process

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

## Test case with element context or attributes

## Test case with DOM events

### Test Case with Fire Event




### Test case with User Event


# What to test
## Test







