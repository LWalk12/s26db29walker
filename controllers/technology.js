var Technology = require('../models/technology');

exports.technology_list = function(req, res) {
    res.send('NOT IMPLEMENTED: technology list');
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

