var Technology = require('../models/technology');

exports.technology_list = async function(req, res){
    try{
        theTechnology = await Technology.find();
        res.send(theTechnology);
    }
    catch(err){
        res.status(500);
        res.send('{"error": ${err}}');
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
        res.send('{"error": document for id ${req.params.id} not found}');
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
        res.send('{"error": "' + err + '"}');
    }
};

exports.technology_delete = async function(req, res) {
    console.log("delete " + req.params.id);
    try{
        result = await Technology.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    }
    catch (err){
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

exports.technology_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`);
    try{
        let toUpdate = await Technology.findById(req.params.id);
        if(req.body.brand) toUpdate.brand = req.body.brand;
        if(req.body.price) toUpdate.price = req.body.price;
        if(req.body.category) toUpdate.category = req.body.category;
        let result = await toUpdate.save();
        console.log("Success " + result);
        res.send(result);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed}`);
    }
};

//VIEWS
// all view

exports.technology_view_all_Page = async function(req, res){
    try{
        theTechnology = await Technology.find();
        res.render('technology', { title: 'Technology Search Results', results: theTechnology });
    }
    catch(err){
        res.status(500);
        res.send('{"error": ${err}}');
    }
};

exports.technology_view_one_Page = async function(req, res){
    console.log("single view for id " + req.query.id)
    try{
        result = await Technology.findById(req.query.id)
        res.render('technologyDetail', {title: 'Technology Detail',toShow: result});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

exports.technology_create_Page = function(req, res) {
    console.log("create view")
    try{
        res.render('technologycreate', { title: 'Technology Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

exports.technology_update_Page = async function(req, res) {
    console.log("update view for item " + req.query.id)
    try{
        let result = await Technology.findById(req.query.id)
        res.render('technologyupdate', { title: 'Technology Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{"error": "${err}"}`);
    }
}