var   restify 	= require('restify')
	, bcrypt 	= require('bcrypt')
	//, passport 	= require('passport')
	, morgan	= require('morgan')


	////////////////
	, server_port = 5001

	, allow_CORS  = true



	///////////////

	, server  	= restify.createServer();


	server.use(restify.acceptParser(server.acceptable));
	server.use(restify.queryParser());
	server.use(restify.bodyParser());
	server.use(morgan('dev')); 
 
	// CORS
	if(allow_CORS){
		server.use(function(req, res, next) {
		    res.header('Access-Control-Allow-Origin', "*");
		    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
		    res.header('Access-Control-Allow-Headers', 'Content-Type');
		    next();
		});
	}


	server.get('/', function(req, res, next){
		res.json(200,{'data':'key'});
		return next();
	});
 


// Start Server...
	server.listen(process.env.PORT || server_port, function(){
		console.log("Server started @ ",process.env.PORT || server_port);
	});