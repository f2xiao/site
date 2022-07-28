#Jest

Jest: a test runner and testing framework of JavaScript.

test runner: automatically run tests in the specific test files with script in Node

test files: files with `<filename>.test.js` by default

relations: assertions  ⊂ a test case  ⊂ a test suite
  
test suite -> `describe(<string>,callback)`

test case -> `test(<string>,callback)` or `it(<string>,callback)` 

assertion -> `expect(<actual-result>).<assertive-result>` or `expect(<actual-result>).not.<assertive-result>`

actual-result: `<actualFn(input)>`

assertive-result: `<assertiveFn(input)>`



