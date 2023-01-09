---
layout: default
date: 2022-10-05
title: Frontend TDD - React Testing Library.md
series: testing
tags:
  - Frontend
  - Unit Testing
  - Reactjs
---
# React Testing Library

TDD in React  = test runner + additional testing tool = Jest + React testing library

## Standard per Test Case Process

React unit test process per test case: 
1. render the component
2. select the element by search functions
3. assertions about the selected element or elements

## Manually or with Snapshot

test case can be done manually or with snapshot:

- manually 

  explicitly declares each test case with assertions

- snapshot 

  automatically generate snapshot of trees and compares them to show what have changed from the last render

### steps
1. render the comp with
      ```
      render.create(<JSX>).toJSON()
      ```
      `render.create(<JSX>)` returns the tree of the component (HTML tag tree)
      
      `<HTML-tree>.toJSON()` converts the tree to JSON object

      
  2. check if the the tree structure matches the snapshot with 
      
      ```
      expect(<HTML-tree-JSON>).toMatchSnapshot()
      ```

## What to test

1. When testing a react component, we usually test if a component is rendered correctly, render the component first:
  
    ```
    render(<JSX>)
    ```

2. Then we can  find them by searching for the element on the renderer:

    ```
    <selected-element>=screen.<search-varints><search-types>
    ```

3. Then we can make assertions on the selected elments:
    ```
    expect(<selected-element>).<matchers>
    ```

Next: 
- Test case with element context or attributes

- Test case with DOM events

- Test Case with Fire Event

- Test case with User Event










