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

exports.technology_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Technology detail: ' + req.params.id);
};

exports.technology_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Technology create POST');
};

exports.technology_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Technology delete DELETE ' + req.params.id);
};

exports.technology_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Technology update PUT' + req.params.id);
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
        res.send('{"error": ${err}}');
    }
};