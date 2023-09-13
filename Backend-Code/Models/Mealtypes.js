const mongoose = require('mongoose');

const mealtypeSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    content : {
        type : String,
        required : true,
    },
    image : {
        type : String,
        required : true,
    },
    mealtype_id : {
        type : Number,
        required : true
    }

});

module.exports = mongoose.model('mealtypes', mealtypeSchema);