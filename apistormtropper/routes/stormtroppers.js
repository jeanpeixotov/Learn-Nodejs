var express = require('express')
   ,router = express.Router();

router.get('/', StormtropperController.getAll);
router.get('/:_id', StormtropperController.getById);
router.post('/', StormtropperController.create);
router.update('/:_id', StormtropperController.update);
router.delete('/:id', StormtropperController.remove);
module.exports = router;
