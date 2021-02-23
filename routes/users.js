var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let response = {
    title: 'hi',
    body: 'ay'
  }
  res.send(response);
});

module.exports = router;