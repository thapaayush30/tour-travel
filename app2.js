
// const express=require('express');
// const app=express();


const mongoose = require('mongoose');

mongoose.connect
("mongodb+srv://ayush07:ayush321@cluster0.z1b5xva.mongodb.net/testing?retryWrites=true&w=majority&appName=Cluster0",


{
    useNewUrlParser:true,
    useUnifiedTopology:true
    
    })

 .then(()=>console.log("connection sucessfully"))
.catch((err)=>console.log(err));


const listSchema = new mongoose.Schema({

name:
{
    type: String,
    required: true
},

email:
{
    type: String,
    required: true

},


Date:
{
    type: Date,
    default:Date.now
}

});
const registerSchema1 = new mangoose.model("require", registerSchema);
model.exports = registerSchema1;

//a mongoose model is a wapper on the mongoose schema
//mongoose model provides an interface to the database for creating quering updatig etc
//collection creation
//so imp when we pass const variable its calls class
//so it should be start with caps






const createDocument = async () => {
    try {
        const details = new Details ({
        name:"laila",
        email:"laila@gmail.com"
        })
        
        const details1 = new Details ({
            name:"aarush",
            email:"aarush@gmail.com"
            })
        
            const details2 = new Details({
                name:"ayush",
                email:"ayush@gmail.com"
            
                })

                const result = await Details.insertMany([details, details1, details2]);
                console.log(result);
        }
        catch(err){
            console.log(err);
        }
}





                                          



