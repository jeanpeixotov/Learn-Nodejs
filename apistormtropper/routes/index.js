var express = require('express')
   ,router = express.router();

router.get('/', function (req,res) {
   res.status(201);
   res.json({'name':'Jean Vitor', 'email':'jeanvitor06@gmail.com'});
});

module.exports = router;
