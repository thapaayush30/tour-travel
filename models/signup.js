const mongoose = require('mongoose')
const bcrypt= require('bcrypt')

const userSchema = mongoose.Schema({
    // this define the first name for the new user in sign up form 
    first_name: {
        type: String,
        unique: true,
        required: true
    },

    // this define last name of use for the signup form 
    last_name: {
        type: String,
        unique: true, // we 
        required: true
    },

    // this define date of birth for the form 
    dob: {
        type: Date
    },

    // this define email part for the form
    email: {
        type: String,
        unique: true,
        required: true
    },

    // this define the password section for form 
    password: {
        type: String, 
        required: true
    }, 

    // in this we create for the confirm password
    confirm_password: {
        type: String, 
        required: true
    }

});

// exproting

userSchema.pre("save", function(next) {
    if(!this.isModified("password")) {
        return next();
    }
    this.password = bcrypt.hashSync(this.password, 10);
    next();
    
});

userSchema.methods.comparePassword = function(plaintext, callback) {
    return callback(null, bcrypt.compareSync(plaintext, this.password));
};
const userschemamodel = new mongoose.model("signup", userSchema );

module.exports = userschemamodel;