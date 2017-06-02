var express = require('express');
var router = express.Router();
var filterDelimitersDataByProperty = require("../helpers/filterDelimitersData");

/* Return locales data based on user's property input */
router.post("/", function(req, res, next) {
  const property = req.body.propertyInput;
  const filteredDelimitersData = filterDelimitersDataByProperty(property);
  res.send(filteredDelimitersData);
});

module.exports = router;
