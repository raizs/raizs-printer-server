export default class AccessControlMiddleware {
	static allowAccess(req, res, next) {
		res.setHeader( "Access-Control-Allow-Origin", "*" );

		res.header("Access-Control-Allow-Credentials", true);
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
		next();
	}
}



// app.use((req, res, next) => {

//  const origin = req.headers.origin;
//  if (env == "local" || allowedOrigins.indexOf(origin) != -1) {
//    res.header("Access-Control-Allow-Origin", origin);
//  }

//  res.header("Access-Control-Allow-Credentials", true);
//  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");

//  next();
// });