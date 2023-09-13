

const mongoose = require('mongoose');

const restuarantSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    locality : {
        type : String,
        required : true
    },
    city_name : {
        type : String,
        required : true
    },
    city_id : {
        type : Number,
        required : true
    },
    location_id : {
        type : Number,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    thumb : {
        type : String,
        required : true
    },
    cost : {
        type : Number,
        required : true
    },
    contact_number : {
        type : Number
    },
    mealtype_id : [{mealtype : Number, name : String}],

    cuisine_id : [{cuisine : Number, name : String}],
       
});

module.exports = mongoose.model("restuarant", restuarantSchema);