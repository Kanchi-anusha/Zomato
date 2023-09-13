

const User = require('../Models/users');

exports.signUp = async(req,res) => {
    // get the values from request body and make the object
    const user_data = new User({
        fullname : req.body.fullname,
        email : req.body.email,
        password : req.body.password
    });
    // Find the email is already exist in database or not
    const verify = await User.find({email : req.body.email});
    let result = true;
   // If exist then send false message to front end
    if(verify.length > 0){
        result = false;
    }    
     // If not exist save in database
    else{
        const user = await user_data.save();
        result = true;
    }
      
    try{
        res.status(200).json(result);
    }catch(err){
        res.send(err);
    }
}

exports.logIn = async(req,res) => {
    // Get the values from request body
    const payload = {
        email : req.body.email,
        password : req.body.password
    }
    
    
     // Find the email and password in database.
    const verify = await User.find(payload);
    console.log(verify);
    // If email and password is correct then send true to front end.
    if(verify.length > 0){
        result = true;
    }
    // Otherwise send false to front end.
    else{
        result = false;
    }
    try{
        res.status(200).json(verify);
    }catch(err){
        res.send(err);
    }
    
}