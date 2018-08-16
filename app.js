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

app.listen(3000, () => {
console.log('the application is running3');


});
