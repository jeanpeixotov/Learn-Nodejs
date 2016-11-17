var express = require('express')
   ,router = express.Router();

router.get('/',function (req,res) {
   res.send('get all stromtroppers');
});

router.get('/:_id',function (req,res) {
   res.send('get a specific stormtropper by id');
});

router.post('/',function (req,res) {
   res.send('create a new stromtroppers');
});

router.put('/:_id',function (req,res) {
   res.send('update a stromtropper');
});

router.delete('/:_id',function (req,res) {
   res.send('delete a stromtropper');
});

module.exports = router;
