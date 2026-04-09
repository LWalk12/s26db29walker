var express = require('express');
const technology_controlers = require('../controllers/technology');
var router = express.Router();

/* GET home page. */
//get technology
router.get('/',technology_controlers.technology_view_all_Page);

module.exports = router;
