var express = require('express');
var router = express.Router();

/* GET index page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET user agent page. */
router.get('/useragent', function(req, res, next) {
  let agentHeader = req.header("user-agent");
  let resp = {
    agent: agentHeader
  }
  res.render('useragent', { resp: resp });
});

module.exports = router;
