import express from 'express';
// import morgan from 'morgan';
import Router from './request_helpers/Router';
import bodyParser from 'body-parser';
import path from 'path';
import ejs from 'ejs';
import compression from "compression";

import { rootDir } from '../app';
import { AccessControlMiddleware } from '../middlewares';
import fileUpload from "express-fileupload";

const app = express();
app.use(fileUpload())
const publicDir = path.join(rootDir, 'public');

// Environment Variables
const port = process.env.PORT || 3300;
const env = process.env.NODE_ENV || 'dev';


app.set('port', port);
app.set('env', env);


app.use(express.static(publicDir));
app.set('views', path.join(publicDir, 'views'));
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(compression());

app.use(AccessControlMiddleware.allowAccess);

// Init DB

// Init Router
const router = new Router(app);
router.init();

export { router };

process.on('unhandledRejection', (reason, p) => {
	console.log(reason);
	console.log(p);
});

app.listen(port, err => {
	if(err) console.log(err);
	else console.log(`Server online - Listening to port ${port}`);
});
