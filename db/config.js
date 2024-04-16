// require is a built in function that is used to import modules
const mongoose = require('mongoose');
var conn = mongoose.connect("mongodb+srv://ayush07:admin123@cluster0.z1b5xva.mongodb.net/testing?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("connection successfully....."))
    .catch((err) => console.log(err));


module.exports = conn;