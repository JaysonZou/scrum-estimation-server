var express = require('express');
var router = express.Router();
const authController = require('../controllers/authController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/hi', function(req, res, next) {
  res.send('respond with a resourceasfsafdsaf')
})

router.post('/signup', authController.signup)
module.exports = router;
