var Users = require('../models/user');

module.exports.list = function(req,res){
	Users.find({},function(err,results){
		console.log('hey');
		res.json(results);
	});
}