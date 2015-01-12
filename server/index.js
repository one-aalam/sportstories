var   restify 	= require('restify')
	, bcrypt 	= require('bcrypt')
	//, passport 	= require('passport')
	, morgan	= require('morgan')


	////////////////
	, server_port = 5001



	///////////////

	, server  	= restify.createServer();



// Start Server...
server.listen(server_port, function(){
	console.log(server_port);
});