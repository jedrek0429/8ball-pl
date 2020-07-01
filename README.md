# 8ball
8ball to mały wróżbita. W tej paczce możesz używać go do losowania odpowiedzi własnch lub wbudowanych. Oto przykładowy kod:

```javascript
const ball = require("8ball-pl")

console.log(ball.plNormal())
```
Zwróci nam on losową wbudowaną odpowiedź na pytanie typu tak/nie. Możesz też użyć:

```javascript
ball.own(["Tak", "Nie"])
```
Zwróci to losową odpowiedź - tak lub nie.

# English
8ball is a little fortune teller. In this package you can use it to draw your own or built-in visits. Here is the sample code:

```javascript
const ball = require ("8ball-pl")

console.log(ball.enNormal())
```
It will give us a random built-in answer to a yes/no question. You can also use:

```javascript
ball.own(["Yes", "No"])
```
It will return a random answer - yes or no.