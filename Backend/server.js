const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
// import database file:
const database = require('./DB');

const PORT = 5000;
// Controller:

const Categories = require('./Routers/categories-router');
const productCategories = require('./Routers/productCategories.router');
const Products = require('./Routers/productDetails-router');
const StudentCourse = require('./Routers/studentCourse-router');
const AvailableCourse = require('./Routers/availableCourse-router');
const Admin = require('./Routers/admin-router');
const User = require('./Routers/users-router');

// Create an Express App:
const app = express();

// create server
const server = http.createServer(app);

// connection to the database:
mongoose.connect(database.DB, {useNewUrlParser: true})
    .then(() => {console.log('Connected to the Database.')}, 
    err => {console.log('Can not connect to the database.' + err)});

// parse the requests:
app.use(bodyParser.json());
app.use(cors());

// Static Path for access images:
app.use('/public/products', express.static(path.join('public/products')));
app.use('/public/users', express.static(path.join('public/users')));

//mount the router:
app.use('/adminLogin', Admin);
app.use('/userLogin', User);
app.use('/categories', Categories);
app.use('/productCategories', productCategories);
app.use('/products', Products);
app.use('/studentCourse', StudentCourse);
app.use('/availableCourse', AvailableCourse);

// Create a Nodejs server:
server.listen(PORT, () => {
    console.log('listening on port: '+PORT);
});