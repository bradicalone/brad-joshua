
require('dotenv').config()
const mongoose = require('mongoose');

const uri = process.env.MONGO_DB_URL;

mongoose.promise = global.Promise;
mongoose.connect(uri,{ useUnifiedTopology: true , useNewUrlParser: true}, function(error){
	if(error) return console.log('Error connecting: ',error);
		console.log('Connection successful');
});



module.exports = {mongoose};