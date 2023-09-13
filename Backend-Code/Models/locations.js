const mongoose = require('mongoose');

const restuarantsSchema = new mongoose.Schema({

    name : {
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
    city_name : {
        type : String,
        required : true
    },
    country_name : {
        type : String,
        required : true
       
    }
});
module.exports = mongoose.model('locations', restuarantsSchema);