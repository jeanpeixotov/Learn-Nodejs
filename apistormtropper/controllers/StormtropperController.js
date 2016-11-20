var debug = require('debug')('apistormtropper:controller');
function StormtropperController(StormtropperModel) {
   this.model = StormtropperModel;
}

StormtropperController.prototype.getAll = function (req,res,next) {
   this.model.find({}, function (err, data) {
      if(err){
         return next(err);
      }
      res.json(data);
   });
};

StormtropperController.prototype.getById = function (req,res,next) {
   var _id = req.params._id;
   this.model.findOne(_id, function (err, data) {
      if(err){
         return next(err);
      }
      if(!data){
         var err = new Error('Not Found');
         err.status = 404;
         return next(err);
      }
      res.json(data);
   });
};
StormtropperController.prototype.create = function (req,res,next) {
   var body = req.body;
   this.model.create(_id, function (err, data) {
      if(err){
         return next(err);
      }
      res.json(data);
   });
};
StormtropperController.prototype.update = function (req,res,next) {
   var _id = req.params._id;
   this.model.update(_id, function (err, data) {
      if(err){
         return next(err);
      }
      res.json(data);
   });
};
StormtropperController.prototype.remove = function (req,res,next) {
   var _id = req.params._id;
   this.model.remove(_id, function (err, data) {
      if(err){
         return next(err);
      }
      res.json(data);
   });
};

module.exports = function (StormtropperModel) {
   return new StormtropperController(StormtropperModel);
};
