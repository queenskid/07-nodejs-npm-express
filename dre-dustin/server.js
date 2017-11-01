'use strict';

// TODONE: Initialize your project using NPM to create and populate  package.json and package-lock.json files. Don't forget to add node_modules to your .gitignore!

// TODONE: Require the ExpressJS package that you installed via NPM, and instantiate the app.
// Remember to install ExpressJS, and be sure that it's been added to your package.json as a dependency.
// There is also a package here called body-parser, which is used by the provided POST route. Be sure to install that and save it as a dependency after you create your package.json.

const express = require('express');
const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;
const app = express();

// TODO: Include all of the static resources as an argument to app.use().
app.use(express.static('./public'));

// COMMENT: Why are our files in a "public" directory now? How does ExpressJS serve files?
// PUT YOUR RESPONSE HERE

// TODONE: Refactor to use arrow function

app.post('/articles', bodyParser, (request, response) => {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.send('Record posted to server!!');
})

// TODONE: Write a new route, using an arrow function, that will handle a request and send the new.html file back to the user
app.get('/public', (req, res) => {
  res.sendFile('test.html', {root: './public'});
});

app.listen(PORT, () => {
  // TODO: Refactor this to arrow function, log to the console a message that lets you know which port your server has started on
});
