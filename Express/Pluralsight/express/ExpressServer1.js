var express = require('express'),
    home = require('./routes/home.js'),
    customers = require('./routes/customers.js');

var app = express();

app.get('/', home.index);
app.get('/customers', customers.index);
app.get('/customers/contacts', customers.contacts);
app.listen(5050);
