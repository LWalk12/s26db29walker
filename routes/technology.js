var express = require('express');
const technology_controlers = require('../controllers/technology');
var router = express.Router();

/* GET home page. */
//get technology
router.get('/',technology_controlers.technology_view_all_Page);
router.get('technology/:id', technology_controlers.technology_detail);
module.exports = router;
