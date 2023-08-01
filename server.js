const express = require('express');
const dotenv = require('dotenv');
// const mongoose=require('mongoose');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');
const passport = require('passport');
const session = require('express-session');

const Razorpay = require('razorpay');
// const MongoStore =require('connect-mongo')(session)

// const services = require('../services/render');
// const controller = require('../controller/controller');

const instance = new Razorpay({
    key_id: "rzp_test_TjfI1Q9set4utL",
    key_secret: "E49XppgTgpFBSdkAP6XzIbGx"
})

const connectDB = require('./server/database/connection');
const { default: mongoose } = require('mongoose');


const app = express();



// BAELOW IS TO LOAD CONFIG
dotenv.config({ path: 'config.env' })

// Passport config
require('./server/controller/controller')(passport)

const PORT = process.env.PORT || 3000

// log requests
app.use(morgan('tiny'));

// mongodb is going to be connecgtd
connectDB();

app.use(bodyparser.json());
// parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }))

// set view engine
app.set("view engine", "ejs")
    // IF WE ARE USING EJS,THEN NO NEED TO SPECIFY FOLDER NAME 
    // AS WE HAVE EVERYTHING IN VIEWS FOLDER
    // IF NOT IN VIEWS THEN SPECIFY PATH OF FOLDER
    // EXAMPLE:
    //app.set("views", path.resolve(__dirname, "views/ejs"))


// Session Middleware and we have to put it above passport as use of session is there
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    // store: new MongoStore({mongooseConnection :mongoose.connection})
    // cookie: { secure: true }
}))

// PASSPORT MIDDLEWARE
app.use(passport.initialize())
app.use(passport.session())

// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
    // SUPPOSE WE HAVE TO ACCESS STYLE.CSS IN THIS CSS FOLDER
    // EG:
    // just write    css/style.css
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

// app.get('/', (req,res)=>
// {
// // res.send("Crud Application by abhishek");
// res.render('index');
// })
// app.get('/add-user', (req,res)=>
// {
// // res.send("Crud Application by abhishek");
// res.render('add_user');
// })
// app.get('/update-user', (req,res)=>
// {
// // res.send("Crud Application by abhishek");
// res.render('update_user');
// })

// loading routers
app.use('/', require('./server/routes/router'))
app.use('/auth', require('./server/routes/auth'))

app.listen(PORT, () => { console.log(`Server is running on http://localhost:${PORT}`) });