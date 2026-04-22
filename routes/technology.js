var express = require('express');
const technology_controlers = require('../controllers/technology');
var router = express.Router();


/* GET home page. */
// get technology
router.get('/', technology_controlers.technology_view_all_Page);
router.get('/detail', technology_controlers.technology_view_one_Page);
router.get('/create', technology_controlers.technology_create_Page);
router.get('/update', technology_controlers.technology_update_Page);
router.get('/delete', technology_controlers.technology_delete_Page);
router.get('/:id', technology_controlers.technology_detail);
module.exports = router;
