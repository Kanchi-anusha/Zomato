

const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    restaurant_name : {
        type : String,
        required : true
    },
    restaurant_id : {
        type : String,
        required : true
    },
    menu_items : [
            {
                name : String, 
                description : String,
                price : Number,
		qty : Number,
                image_url : String
            }
        ]   

});

module.exports = mongoose.model("menuitem", menuSchema);
