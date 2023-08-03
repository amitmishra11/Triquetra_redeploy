const express = require('express');
const route = express.Router()
const passport=require('passport')
const Razorpay = require('razorpay');
const {ensureAuth,ensureGuest}=require('../middleware/auth');



// const services = require('../services/render');
const controller = require('../controller/controller');
const router = require('./auth');

const instance=new Razorpay({
    key_id :"rzp_test_TjfI1Q9set4utL",
    key_secret:"E49XppgTgpFBSdkAP6XzIbGx"
})


route.get('/', ensureGuest, (req, res) => {
    // res.send("Crud Application by abhishek");
    res.render('index');
})

route.get('/index2', ensureAuth, (req, res) => {
    // res.send("Crud Application by abhishek");
    res.render('index2', {
        name: req.user.displayName
    });
})

route.get('/login', (req, res) => {
    // res.send("Crud Application by abhishek");
    res.render('login');
})

route.get('/signup', (req, res) => {
    // res.send("Crud Application by abhishek");
    res.render('signup');
})

route.get('/blog', (req, res) => {
    // res.send("Crud Application by abhishek");
    res.render('blog');
})

route.get('/maps', ensureAuth, (req, res) => {
    // res.send("Crud Application by abhishek");
    res.render('maps');
})

route.get('/medc', (req, res) => {
    // res.send("Crud Application by abhishek");
    res.render('medc');
})
route.get('/symptom', (req, res) => {
    // res.send("Crud Application by abhishek");
    res.render('symptom');
})

route.get('/pay', (req,res)=>
{
// res.send("Crud Application by abhishek");
res.render('pay');
})
route.get('/donate', (req,res)=>
{
// res.send("Crud Application by abhishek");
res.render('donate');
})

route.get('/sux', (req,res)=>
{
// res.send("Crud Application by abhishek");
res.render('sux');
})



route.post("/api/payment/order",(req,res)=>{
	var params = {
		// amount: document.getElementById('rzp-text').value,  
		amount: 100000, 
		currency: "INR",
		payment_capture: '1'
	  };
	
	// params=req.body;
	instance.orders.create(params).then((data) => {
		console.log("created id")
		res.json(data)
		//    res.send({"sub":data,"status":"success"});
	}).catch((error) => {
		console.log("failed id")
		   res.send({"sub":error,"status":"failed"});
	})
	});

route.get('/logout', (req,res)=>
{
// res.send("Crud Application by abhishek");
res.render('index');
})

// API
// route.post('/api/users', controller.create);

// route.get('/api/users', controller.find);
// route.put('/api/users/:id', controller.update);
// route.delete('/api/users/:id', controller.delete);

module.exports = route