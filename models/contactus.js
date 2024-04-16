const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    // this define the first name for the new user in sign up form 
    EnterName: {
        type: String,
        unique: true,
        required: true
    },

    // this define last name of use for the signup form 
    email: {
        type: String,
        unique: true, // we 
        required: true
    },

    // this define date of birth for the form 
     Number: {
        type:BigInt
    },

    // this define email part for the form
     Message: {
        type: String,
        unique: true,
        required: true
    }

   

});

// exproting
const userschemamodel = new mongoose.model("contactus", contactSchema );

module.exports = userschemamodel;