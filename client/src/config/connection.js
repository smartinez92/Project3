import mongoose from 'mongoose';

mongoose.connect("mongodb://heroku_l3g0:a1234567890@ds143573.mlab.com:43573/heroku_sc3kkc3w", function(err) {
	if(err) throw err;
	console.log('database connected');
});
