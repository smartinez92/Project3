import mongoose from 'mongoose';

mongoose.connect("mongodb://abz:a123456789@cluster0-shard-00-00-hcxfs.mongodb.net:27017,cluster0-shard-00-01-hcxfs.mongodb.net:27017,cluster0-shard-00-02-hcxfs.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true", function(err) {
	if(err) throw err;
	console.log('database connected');
});
