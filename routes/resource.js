var express = require('express');
var router = express.Router();

var api_controller = require('../controllers/api');
var technology_controller = require('../controllers/technology');

router.get('/', api_controller.api);

router.post('/technology', technology_controller.technology_create_post);

router.delete('/technology/:id', technology_controller.technology_delete);

router.put('/technology/:id', technology_controller.technology_update_put);

router.get('/technology/:id', technology_controller.technology_detail);

router.get('/technology', technology_controller.technology_list);

module.exports = router;