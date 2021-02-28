const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = express.Router();

const PORT = 5000;
// Controller:

const Categories = require('./Routers/categories-router');
const productCategories = require('./Routers/productCategories.router');
const productDetails = require('./Routers/productDetails-router');
const StudentCourse = require('./Routers/studentCourse-router');
const AvailableCourse = require('./Routers/availableCourse-router');
const Users = require('./Routers/user-router');

// Create an Express App:
const app = express();

// create server
const server = http.createServer(app);

// parse the requests:
app.use(bodyParser.json());
app.use(cors());

// connection to the database:
const database = require('./DB');
const mongoose = require('mongoose');

mongoose.connect(database.DB, {useNewUrlParser: true})
    .then(() => {console.log('Connected to the Database.')}, 
    err => {console.log('Can not connect to the database.' + err)});

// make folder static:
// app.use(express.static('public'));
app.use(express.static(__dirname + "./public/uploads/"));

//mount the router:
app.use('/Users', Users);
app.use('/categories', Categories);
app.use('/productCategories', productCategories);
app.use('/productDetails', productDetails);
app.use('/studentCourse', StudentCourse);
app.use('/availableCourse', AvailableCourse);

// Create a Nodejs server:
server.listen(PORT, () => {
    console.log('listening on port: '+PORT);
});