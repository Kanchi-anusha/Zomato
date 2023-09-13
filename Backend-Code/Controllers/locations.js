const Locations = require('../Models/locations');

exports.getLocations = async (req, res) => {
    try{
        const result = await Locations.find();
        res.status(200).json(result);
    }catch(err){
        res.status(500).send(err);
    }
};

exports.createLocation = async(req,res) => {
    const newLocation = new Locations ({
        name : req.body.name,
        city_id : req.body.city_id,
        location_id : req.body.location_id,
        country_name : req.body.country_name
    });
   try{
        const a1 = await newLocation.save();
        res.status(200).json(a1);
   }catch(err){
       res.status(500).send(err);
   }
};

exports.updateLocation = async (req, res) => {
    const location = await Locations.findById(req.params.id);
    try{
        if(req.body.name){
            location.name = req.body.name;  
        }
        if(req.body.city_id){
            location.city_id = req.body.city_id;
        }
        if(req.body.location_id){
            location.location_id = req.body.location_id;
        }
        if(req.body.country_name){
            location.country_name = req.body.country_name;
        }
        const a1 = await location.save()
        res.status(200).json(a1);
             
    }catch(err){
        res.status(500).send(err);
    }
};

exports.deleteLocation = async (req, res) => {
    const location = await Locations.findById(req.params.id);
    try{
        const d1 = await location.remove();
        res.status(200).json(d1);
    }catch(err){
        res.status(500).send(err);
    }
}


