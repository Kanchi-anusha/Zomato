const mealtypeData = require('../Models/Mealtypes');

exports.createMealTypes = async (req, res) => {
   const mealtype = new mealtypeData ({
       name : req.body.name,
       content : req.body.content,
       image : req.body.image
   });
   const m1 = await mealtype.save();
   try{
    res.status(200).json(m1);
   }catch(err){
       res.status(500).send(err);
   }
};

exports.getMealtypes = async (req, res) => {
    const mealtype = await mealtypeData.find();
    try{
        res.status(200).json(mealtype);
    }catch(err){
        res.status(500).send(err);
    }
}