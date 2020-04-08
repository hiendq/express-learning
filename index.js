require('dotenv').config();

const express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var authRoute = require('./routes/auth.route');

const port = 3000;
const app = express();

mongoose.connect(process.env.MONGO_URL, { useUnifiedTopology: true, useNewUrlParser: true})
    .then(() => console.log('DB Connected!'))
    .catch(err => {
    console.log('DB Connection Error: '+err.message);});

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/login', authRoute);

app.listen(port, ()=> console.log(`Example app listening at http://localhost:${port}`))