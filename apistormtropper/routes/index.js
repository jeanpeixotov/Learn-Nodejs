var express = require('express')
   ,router = express.Router();

router.get('/', function (req,res) {
   res.status(201);
   res.json({'name':'Jean Vitor', 'email':'jeanvitor06@gmail.com'});
});

//stormtroppers
router.use('/stromtroppers', require('./stromtroppers'));

module.exports = router;
