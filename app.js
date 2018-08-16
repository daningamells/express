const express = require('express');

const app = express();

const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple'
];

app.set('view engine', 'pug');

app.get('/', (req, res) => {
res.render('index');

});

app.get('/cards', (req, res) => {
res.render('card', {prompt: 'la la la', hint: 'la la la', colors: colors});

});

app.get('/hello', (req, res) => {
res.render('hello');

});

app.post('/hello', (req, res) => {
console.dir(req);
res.render('hello');

});

app.listen(3000, () => {
console.log('the application is running3');


});
