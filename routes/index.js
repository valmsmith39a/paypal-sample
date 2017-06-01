var express = require('express');
var cldrData = require('cldr');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // console.log("hello in get route of server");
  // console.log("what is cldr data", cldrData);
  // console.log("example data: ", cldrData.extractDelimiters(cldrData.localeIds[3]));
  // console.log("test other file ", cldrData.localeIds[3]);
  // for (var i = 0; i < 200; i++) {
  //   console.log("i is ", i);
  //   console.log("language is ", cldrData.localeIds[i]);
  //   console.log("delimiter data is: ", cldrData.extractDelimiters(cldrData.localeIds[i]));
  // }
  res.render('index', { title: 'Express' });
});

router.post("/locales", function(req, res, next) {
  res.send(req.body);
})

module.exports = router;
