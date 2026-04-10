var Technology = require('../models/technology');

exports.technology_list = async function(req, res){
    try{
        theTechnology = await Technology.find();
        res.send(theTechnology);
    }
    catch(err){
        res.status(500);
        res.send({ error: err.toString() });
    }
};

exports.technology_detail = async function(req, res) {
    console.log("detail" + req.params.id);
    try{
        var result = await Technology.findById(req.params.id);
        res.send(result);
    }
    catch(error){
        res.status(500);
        res.send({ error: `document for id ${req.params.id} not found` });
    }
};

exports.technology_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Technology();
    document.brand = req.body.brand;
    document.price = req.body.price;
    document.category = req.body.category;
    try{
        let result = await document.save();
        res.send(result);
    }
    catch(err){
        res.status(500);
        res.send({ error: err.toString() });
    }
};

exports.technology_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Technology delete DELETE ' + req.params.id);
};

exports.technology_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`);
    try{
        let toUpdate = await Technology.findById(req.params.id);
        if (!toUpdate) {
            res.status(404);
            return res.send({ error: `Document not found for id ${req.params.id}` });
        }
        if(req.body.brand !== undefined) toUpdate.brand = req.body.brand;
        if(req.body.price !== undefined) toUpdate.price = req.body.price;
        if(req.body.category !== undefined) toUpdate.category = req.body.category;
        let result = await toUpdate.save();
        console.log("Success " + result);
        res.send(result);
    }
    catch(err){
        res.status(500);
        res.send({ error: `${err}: Update for id ${req.params.id} failed` });
    }
};

//VIEWS
// all view

exports.technology_view_all_Page = async function(req, res){
    try{
        theTechnology = await Technology.find();
        res.render('technology', { title: 'technology Search Results', results: theTechnology });
    }
    catch(err){
        res.status(500);
        res.send({ error: err.toString() });
    }
};