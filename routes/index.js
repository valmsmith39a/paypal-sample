var express = require('express');
var getDelimitersData = require("../helpers/getDelimitersData");
var filterDelimitersDataByProperty = require("../helpers/filterDelimitersData");

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Return locales data based on user's property input */
router.post("/locales", function(req, res, next) {
  const property = req.body.propertyInput;
  const filteredDelimitersData = filterDelimitersDataByProperty(property);
  res.send(filteredDelimitersData);
});

module.exports = router;
