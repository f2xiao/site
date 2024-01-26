---
layout: default
date: 2023-01-13
title: Review - HTML and CSS
series: oundations
tags:
  - HTML
  - CSS
  - Frontend
---
# Contents
<details>
<summary>HTML</summary>

<details>
<summary>What is an HTML element?</summary>

An HTML element is content wrapped in a pair of tags.
</details>

<details>
<summary>What is an attribute?</summary>

An HTML attribute gives additional information to an HTML element and always goes in the element’s opening tag. An attribute is usually made up of two parts: a name, and a value; however, not all attributes require a value. In our case, we need to add a href (hyperlink reference) attribute to the opening anchor tag. The value of the href attribute is the destination we want our link to go to.
</details>

<details>
<summary>What are the four main image formats that you can use for images on the web?</summary>

- JPG images are good for photos.
- GIFs are good for animations.
- PNGs are good for diagrams and icons.
- SVGs are amazing. Use them wherever you can. SVG is a vector-based graphics format, meaning it can scale up or down to any dimension without loss of quality.

</details>

</details>

<details>
<summary>CSS Flexbox</summary>

<details>
<summary>What is flexbox?</summary>

Flexbox is a way to arrange items into rows or columns. These items will flex (i.e. grow or shrink) based on some simple rules that you can define. Most of the time, flex containers determines the layout on the flex items with the properties `justify-content` and `align-items`. These two both decide how the flex items are distributed across the main and cross axes.
The main purpose of flex items is to let the flex container know how many items it needs to position. The flex items also have properties like `flex` and `align-self` to change their layout individually.
</details>

<details>
<summary>What’s the difference between a flex container and a flex item?</summary>

A flexbox container is an element with CSS properties `display:flex` on it. Any element that lives directly inside a flexbox is a flexbox item.

</details>

<details>
<summary> What are the 3 values defined in the shorthand flex property (e.g. flex: 1 1 auto)?</summary>

`flex-grow`, `flex-shrink`, `flex-basis`
</details>

<details>
<summary>What are the properties on flex container?</summary>

`flex-direction`
</details>

<details>
<summary>Flexbox Summary</summary>

flexbox architecture:

```mermaid
graph LR;
    flexbox-->flexboxContainer
    flexbox-->flexboxItem
    flexbox-->Axes
    Axes-->mainAxis
    Axes-->crossAxis
```
flexbox container properties:

```mermaid
graph LR;
    flexboxContainer-->display:flex
    flexboxContainer-->flex-direction
    flexboxContainer-->justify-content
    flexboxContainer-->align-items
    flexboxContainer-->gap
```

flexbox item properties:
```mermaid
graph LR;
    flexboxItem-->flex-grow
    flexboxItem-->flex-shrink
    flexboxItem-->flex-basis
    flexboxItem-->align-self
```

</details>

</details>


