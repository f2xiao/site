---
layout: default
date: 2022-06-25
title: User Authentication in Express
tags:
  - Authetication
  - Backend
  - ExpressJS
---

## What is authentication
the act of verifying the identity of a person or process
## How to implement it in Express
through Passport JS
## Passport
Passport manages authentication. 
It's a framework that is a middleware itself, it allows other middlewares(strategy) to connect and bundles them into a large middleware to be used for authentication in Express.
Passport strategies are also middlewares, it uses Passport JS framework as a template.
Here I will introduce two basic strategies: local strategy and jwt.
### Local Strategy
Local strategy utilizes Cookies, Express Sessions and some authentication logic.
#### Cookies
Since HTTP is stateless, so web application server does not remember previous requests. So cookies is used to store some information so the server can uses for future requests.

