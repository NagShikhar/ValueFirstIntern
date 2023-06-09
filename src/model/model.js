const mongoose = require("mongoose");
const validator = require('validator');



const resSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
       
        validate: {
            validator: validator.isEmail,
            message: 'Invalid email format',
        },
    },
    password: {
        type: String,
        required: true,
        minlength: 4,
      
    },


    confirmpassword: {
        type: String,
        required: true,
       
        validate:{
            validator: function(value){
                return value  === this.password
            },
            message:"Password not match"
        },
       

    },
});

const resCollection = mongoose.model("resCollection", resSchema);
module.exports = resCollection;
