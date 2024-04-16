const express = require('express');
const signup = require('../models/signup')
const add = require('../models/add')
const db = require('../db/config')


const contact = require('../models/contactus')

const router = express.Router();
const multer = require("multer")

router.get('/', function(req, res){
    res.render('index');

 })
router.get('/about_us', function(req, res){
    res.render('about');

})

router.get('/contact', function(req, res){
    res.render('contact');

})



router.get('/dashboard', function(req, res){
    res.render('dashboard/index');

})






// router.get('/viewpackage', async(req, res) => {
//     // res.render('dashboard/viewpackage');
//     try{
//         const viewData = await add.find({});
//         res.render('index', {viewData: viewData});
//         console.log(viewData);
//     }
//     catch(err){
//         console.log(err);
//     }
//  })

router.get('/register', function(req, res){
    res.render('register');
}) 


// //new posting form
router.post('/signup', (req,res)=> {
    var sign_up = {
    first_name : req.body.f_name,
    last_name : req.body.l_name,
    dob : req.body.dob,
    email : req.body.email,
    password : req.body.password,
    confirm_password: req.body.confirm_password
    }
    var repost = new signup(sign_up);
repost.save()
.then(()=>
res.json('register successfully'))
.catch(err => res.status(400).json('error:' + err));
    });
    
//     // //new posting form
    router.post('/contact', (req,res)=> {
        var contact_us= {
        first_name : req.body.f_name,
        last_name : req.body.l_name,
        dob : req.body.dob,
        email : req.body.email,
        password : req.body.password,
        confirm_password: req.body.confirm_password
        }
        var repost = new signup(contact_us);
    repost.save()
    .then(()=>
    res.json('register successfully'))
    .catch(err => res.status(400).json('error:' + err));
        });

//     //view get



// ---------------- DASHBOARD API --------------

router.get('/addpackage', async(req, res) => {
    try{
        const add_package = await add.find({})
        res.render('./dashboard/addpackage');
    }
    catch(err){
        console.log(err);
    }
});

// api for view registration
    router.get('/viewregisteration', async(req, res) => {
        // res.render('./dashboard/viewregisteration');
        try{
            const viewData = await signup.find({});
            res.render('./dashboard/viewregisteration', {viewData: viewData});
            console.log(viewData);
        }
        catch(err){
            console.log(err);
        }
    })
    
    router.get('/viewpackage', async(req, res) => {
        // res.render('./dashboard/viewpackage');
        try{
            const viewData = await add.find({});
            res.render('./dashboard/viewpackage', {viewData: viewData});
            console.log(viewData);
        }
        catch(err){
            console.log(err);
        }
    })


    router.get('/editproduct', function(req, res){
        res.render('./dashboard/editproduct');
    });

// DELETING API 
router.get('/delete_register/:id', async(req, res) =>{
    try {
        const deleteData = await add_package.findByIdAndDelete(req.params.id);
        res.redirect('/viewpackage');
    } catch (err) {
        console.log(err);
    }
});
    
// UPDATE API 
router.get('/update_register/:id', async(req, res) =>{
    try {
        const viewData = await add.findByIdAndUpdate(req.params.id);
        res.render('./dashboard/edit_package',{viewData:viewData});
        console.log(viewData);
    } catch (err) {
        console.log(err);
    }
});

// DELETING API FOR REGISTER
router.get('/delete/:id', async(req, res) =>{
    try {
        const deleteData = await signup.findByIdAndDelete(req.params.id);
        res.redirect('/viewregisteration');
    } catch (err) {
        console.log(err);
    }
});

// UPDATE API 
router.get('/update/:id', async(req, res) =>{
    try {
        const viewData = await add.findByIdAndUpdate(req.params.id);
        res.render('./dashboard/editregisteration',{viewData:viewData});
        console.log(viewData);
    } catch (err) {
        console.log(err);
    }
});

//post api
router.post('/update/:id', async (req, res) => {
    const itemId = req.params.id;
    const updatedData = {
        first_name : req.body.f_name,
        last_name : req.body. l_name,
        dob : req.body. dob,
        email: req.body.email,
        password: req.body.password,
         confirm_password: req.body.confirm_password
    }
     // Data to update with register

    try {
        const updatedItem = await signup.findByIdAndUpdate(itemId, updatedData, {new:true});

        if (!updatedItem) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.redirect('/viewregisteration');
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
    });

//package
router.get("/package_details/:id", async (req ,res) => {
try{
    const packagedata = await add.findById(req.params.id);
    res.render('package_details', {packagedata: packagedata});
    console.log(packagedata);
}catch(err) {
    console.log(err);
}


});


//lpgin api
router.post('/login',async (req, res) => {
    var email = req.body.email,
    password = req.body.password;
    
    try {
        var user = await signup.findOne({ email: email})
        .exec();
        if(!signup) {
        res.redirect('/');
        }
    
        user.comparePassword(password,(error,match)=>{
        if(!match) {
            res.redirect('/');
        }
        })
    
    res.redirect('/dashboard');
} catch (error) {
    console.log(error)

}
});


   
module.exports = router;