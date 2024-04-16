const mongoose = require('mongoose')

const addSchema = mongoose.Schema({

    dream_destination: {
        type:String,
        required:true
    }, 

    travel_description: {
        type:String,
        required:true
    }, 
    
    price: {
        type:String,
        required:true
    },

    upload_file: {
        type:String
        
    }
})
const userschemamodel = new mongoose.model("add", addSchema );

module.exports = userschemamodel;