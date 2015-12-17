/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	restricted:function(req, res){
		return res.ok("If you can see this you gucci")
	},
	open:function(req, res){
		return res.ok("You are just plain jane")
	}
};
