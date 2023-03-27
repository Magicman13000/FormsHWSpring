var express = require('express');
var router = express.Router();
var formController = require('../controllers/formController');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

router.post('/form-submit', function (req, res, next) {
  formController.form_post(req, res);
});
module.exports = router;
