function StormtropperController() {}

StormtropperController.prototype.getAll = function (req,res,next) {
   res.send('get all stromtroppers');
};

StormtropperController.prototype.getById = function (req,res,next) {
   res.send('get a specific stromtropper by id');
};
StormtropperController.prototype.create = function (req,res,next) {
   res.send('create a new stromtropper');
};
StormtropperController.prototype.update = function (req,res,next) {
   res.send('update a stromtropper');
};
StormtropperController.prototype.remove = function (req,res,next) {
   res.send('remove a stromtropper');
};

module.exports = new StormtropperController();
