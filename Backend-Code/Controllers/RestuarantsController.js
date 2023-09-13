

const Restuarant = require("../Models/restaurantsModel");

// This method will return all restaurant details
exports.getAllRestuarant = async (req, res) => {
    const list = await Restuarant.find();
    try{
        res.status(200).json(list);
    }catch(err){
        res.status(500).send(err);
    }
}
// This method will returns restaurants list based on location
exports.getRestaurantByLocation = async (req, res) => {
    const list = await Restuarant.find({location_id : req.params.id});
    try{
        res.status(200).json(list);
    }catch(err){
        res.status(500).send(err);
    }
}
// This method will returss restaurant details by restaurant ID.
exports.getRestaurantById = async (req, res) => {
    const restaurant = await Restuarant.findById(req.params.id);
    try{
        res.status(200).json(restaurant);
    }catch(err){
        res.status(500).send(err);
    }
}
// This is method will return filtered restaurant based on some values
exports.filter = async (req, res) => {
    const mealtype_id = req.body.mealtype_id;
    const location_id = req.body.location_id;
    const cuisine_id = req.body.cuisine_id;
    const hcost = req.body.hcost;
    const lcost = req.body.lcost;
    const sort = req.body.sort ? req.body.sort : 1;
    const page = req.body.page ? req.body.page : 1;
   
    let itemPerPage = 2;
    let startIndex = (page * itemPerPage) - itemPerPage;
    let endIndex = (page * itemPerPage);
    
    

    let payload = {};

    if(mealtype_id){
        payload = {mealtype_id: {$elemMatch: { mealtype: mealtype_id}}};
    }
    if(mealtype_id && location_id){
        payload = {
            mealtype_id: {$elemMatch: { mealtype: mealtype_id}},
            location_id : location_id
        }
    }
    if(mealtype_id && cuisine_id ){
        payload = {
            mealtype_id: {$elemMatch: { mealtype: mealtype_id}},
            cuisine_id: {$elemMatch: { cuisine: cuisine_id}},
        }
    }
    if(mealtype_id && hcost && lcost){
        payload = {
            mealtype_id: {$elemMatch: { mealtype: mealtype_id}},
            cost : {$lte: hcost, $gte : lcost}
        }
    }
    if(mealtype_id && cuisine_id && hcost && lcost){
        payload = {
            mealtype_id: {$elemMatch: { mealtype: mealtype_id}},
            cost : {$lte: hcost, $gte : lcost},
            cuisine_id: {$elemMatch: { cuisine: cuisine_id}},
        }
    }
    if(mealtype_id && location_id && cuisine_id){
        payload = {
            mealtype_id: {$elemMatch: { mealtype: mealtype_id}},
            location_id : location_id,
            cuisine_id: {$elemMatch: { cuisine: cuisine_id}}
        }
    }
    if(mealtype_id && location_id && hcost && lcost){
        payload = {
            mealtype_id: {$elemMatch: { mealtype: mealtype_id}},
            location_id : location_id,
            cost : {$lte: hcost, $gte : lcost}
        }
    }
    if(mealtype_id && location_id && cuisine_id && hcost && lcost){
        payload = {
            mealtype_id: {$elemMatch: { mealtype: mealtype_id}},
            location_id : location_id,
            cost : {$lte: hcost, $gte : lcost},
            cuisine_id: {$elemMatch: { cuisine: cuisine_id}}
        }
    }

    let list = await Restuarant.find(payload).sort({cost : sort});
        try{
        res.status(200).json(list);
    }catch(err){
        res.status(500).send(err);
    }
}


