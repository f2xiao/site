---
layout: default
date: 2022-10-05
title: Frontend TDD - Overview
series: testing
tags:
  - Frontend
  - Unit Testing
  - Reactjs
---

# TDD

TDD stands for test driven development. A method for development with test cases.

## What is TDD?

Before write the code of the program, you pre-specify the inputs and its intended output, which is called a test case.

## Why TDD?

TDD makes you to think of what you want your program to behave before writing the actual code so that you can change the code later on without breaking previous requirements.

## How to TDD?

You write an initial test with some test cases. Then write some code, and run the tests to make sure your code pass the tests. Then you either refactor the program code or the test code. Rerun the tests until the tests are passed to make sure you program still works.

## Real World Practice

There are tools to help run the tests automatically and makes writing tests easier:
1. test-running tool, a.k.a test runner
2. testing library tool

### Test Runner

Test runner: a tool to run the tests in matched test files automatically and print the results on the command line with script
For example: Jest, Chai

Testing library tool: additional tools that provide APIs for defining specific test case
For example: React testing library provide APIs for the react component's test case, like rendering the componnent and matchers to assert the context, attributes and event handlers on the DOM.

