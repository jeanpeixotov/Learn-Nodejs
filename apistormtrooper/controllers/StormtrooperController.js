var debug = require('debug')('apistormtrooper:controller');
var Promise = require('bluebird');

var handleNotFound = function (data) {
    if(!data){
       var err = new Error('Not Found');
       err.status = 404;
       throw err;
    }
    return data;
};

function StormtrooperController(StormtrooperModel) {
   this.model = Promise.promisifyAll(StormtrooperModel);
}

StormtrooperController.prototype.getAll = function (req,res,next) {
   this.model.findAsync({})
        .then(function (data) {
            res.json(data);
        })
        .catch(next);
};

StormtrooperController.prototype.getById = function (req,res,next) {
   var _id = req.params._id;
   this.model.findOneAsync(_id)
        .then(handleNotFound)
        .then(function (data) {
            res.json(data);
        })
        .catch(next);
};
StormtrooperController.prototype.create = function (req,res,next) {
   var body = req.body;
   this.model.createAsync(body)
      .then(function (err,data) {
          res.json(data);
      })
      .catch(next);
};
StormtrooperController.prototype.update = function (req,res,next) {
   var _id = req.params._id;
   var body = req.body;
   this.model.updateAsync(_id,body)
      .then(function (err,data) {
          res.json(data);
      })
      .catch(next);
};
StormtrooperController.prototype.remove = function (req,res,next) {
   var _id = req.params._id;
   this.model.removeAsync(_id)
      .then(function (err,data) {
          res.json(data);
      })
      .catch(next);
};

module.exports = function (StormtrooperModel) {
   return new StormtrooperController(StormtrooperModel);
};
