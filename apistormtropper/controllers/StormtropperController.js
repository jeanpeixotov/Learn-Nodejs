var debug = require('debug')('apistormtropper:controller');
var Promise = require('bluebird');

var handleNotFound = function (data) {
    if(!data){
       var err = new Error('Not Found');
       err.status = 404;
       throw err;
    }
    return data;
};

function StormtropperController(StormtropperModel) {
   this.model = Promise.promisifyAll(StormtropperModel);
}

StormtropperController.prototype.getAll = function (req,res,next) {
   this.model.findAsync({})
        .then(function (data) {
            res.json(data);
        })
        .catch(next);
};

StormtropperController.prototype.getById = function (req,res,next) {
   var _id = req.params._id;
   this.model.findOneAsync(_id)
        .then(handleNotFound)
        .then(function (data) {
            res.json(data);
        })
        .catch(next);
};
StormtropperController.prototype.create = function (req,res,next) {
   var body = req.body;
   this.model.createAsync(body)
      .then(function (err,data) {
          res.json(data)
      })
      .catch(next);
};
StormtropperController.prototype.update = function (req,res,next) {
   var _id = req.params._id;
   var body = req.body;
   this.model.updateAsync(_id,body)
      .then(function (err,data) {
          res.json(data)
      })
      .catch(next);
};
StormtropperController.prototype.remove = function (req,res,next) {
   var _id = req.params._id;
   this.model.removeAsync(_id) 
      .then(function (err,data) {
          res.json(data)
      })
      .catch(next);
};

module.exports = function (StormtropperModel) {
   return new StormtropperController(StormtropperModel);
};
