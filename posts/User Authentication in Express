---
layout: default
date: 2022-06-25
title: User Authentication in Express
tags:
  - authetication
  - backend
  - expressjs
  - passportjs
  - localStrategy
  - jwt
---

# What is authentication
the act of verifying the identity of a person or process
# How to implement it in Express
through Passport JS
# Passport
Passport manages authentication. 
It's a framework that is a middleware itself, it allows other middlewares(strategy) to connect and bundles them into a large middleware to be used for authentication in Express.
Passport strategies are also middlewares, it uses Passport JS framework as a template.
Here I will introduce two basic strategies: local strategy and jwt.
## Local Strategy
Local strategy utilizes Cookies, Express Sessions and some authentication logic.
### Cookies
Since HTTP is stateless, so web application server does not remember previous requests. So cookies is used to store some information so the server can uses for future requests.

<mxGraphModel><root><mxCell id="0"/><mxCell id="1" parent="0"/><mxCell id="2" value="" style="endArrow=none;html=1;rounded=0;entryX=0.5;entryY=1;entryDx=0;entryDy=0;" edge="1" target="3" parent="1"><mxGeometry width="50" height="50" relative="1" as="geometry"><mxPoint x="247" y="354" as="sourcePoint"/><mxPoint x="251" y="180" as="targetPoint"/></mxGeometry></mxCell><mxCell id="3" value="client" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;" vertex="1" parent="1"><mxGeometry x="219" y="131" width="60" height="30" as="geometry"/></mxCell><mxCell id="4" value="" style="endArrow=none;html=1;rounded=0;entryX=0.5;entryY=1;entryDx=0;entryDy=0;" edge="1" target="5" parent="1"><mxGeometry width="50" height="50" relative="1" as="geometry"><mxPoint x="538" y="354" as="sourcePoint"/><mxPoint x="542" y="180" as="targetPoint"/></mxGeometry></mxCell><mxCell id="5" value="server" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;" vertex="1" parent="1"><mxGeometry x="510" y="131" width="60" height="30" as="geometry"/></mxCell><mxCell id="6" value="" style="endArrow=classic;html=1;rounded=0;" edge="1" parent="1"><mxGeometry width="50" height="50" relative="1" as="geometry"><mxPoint x="249" y="181" as="sourcePoint"/><mxPoint x="540" y="196" as="targetPoint"/></mxGeometry></mxCell><mxCell id="7" value="" style="endArrow=classic;html=1;rounded=0;" edge="1" parent="1"><mxGeometry width="50" height="50" relative="1" as="geometry"><mxPoint x="534" y="197" as="sourcePoint"/><mxPoint x="248" y="210" as="targetPoint"/></mxGeometry></mxCell><mxCell id="8" value="Request 1" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;" vertex="1" parent="1"><mxGeometry x="284" y="147" width="60" height="30" as="geometry"/></mxCell><mxCell id="9" value="Response 1" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;" vertex="1" parent="1"><mxGeometry x="425" y="209" width="73" height="30" as="geometry"/></mxCell><mxCell id="10" value="" style="endArrow=classic;html=1;rounded=0;" edge="1" parent="1"><mxGeometry width="50" height="50" relative="1" as="geometry"><mxPoint x="249" y="256" as="sourcePoint"/><mxPoint x="540" y="271" as="targetPoint"/></mxGeometry></mxCell><mxCell id="11" value="" style="endArrow=classic;html=1;rounded=0;" edge="1" parent="1"><mxGeometry width="50" height="50" relative="1" as="geometry"><mxPoint x="534" y="272" as="sourcePoint"/><mxPoint x="248" y="285" as="targetPoint"/></mxGeometry></mxCell><mxCell id="12" value="Request 2" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;" vertex="1" parent="1"><mxGeometry x="284" y="222" width="60" height="30" as="geometry"/></mxCell><mxCell id="13" value="Response 2" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;" vertex="1" parent="1"><mxGeometry x="438" y="284" width="73" height="30" as="geometry"/></mxCell></root></mxGraphModel>

