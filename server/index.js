import express from 'express';
// import morgan from 'morgan';
import Router from './request_helpers/Router';
import bodyParser from 'body-parser';
import path from 'path';
import ejs from 'ejs';
import compression from "compression";

import { rootDir } from '../app';
import { MongoDB, PostgresDB, Firebase } from '../db';
import { AccessControlMiddleware } from '../middlewares';
import fileUpload from "express-fileupload";

const app = express();
app.use(fileUpload())
const publicDir = path.join(rootDir, 'public');

// Environment Variables
const port = process.env.PORT || 3300;
const env = process.env.NODE_ENV || 'dev';

const postgresUser = process.env.POSTGRES_USER || process.env.USER;
const postgresPassword = process.env.POSTGRES_PASSWORD || null;
const postgresHost = process.env.POSTGRES_HOST || 'localhost';
const postgresDatabase = process.env.POSTGRES_DATABASE || 'local';
const postgresPort = process.env.POSTGRES_PORT || 5432;
const firebaseApiKey = process.env.FIREBASE_API_KEY;
const firebaseAuthDomain = process.env.FIREBASE_AUTH_DOMAIN;
const firebaseDatabaseUrl = process.env.FIREBASE_DB_URL;
const firebaseProjectId = process.env.FIREBASE_PROJECT_ID;
const firebaseStorageBucket = process.env.FIREBASE_STORAGE_BUCKET;
const firebaseMsgSenderId = process.env.FIREBASE_MSG_SENDER_ID;
const mundipaggPk = process.env.MUNDIPAGG_PK;
const mundipaggSk = process.env.MUNDIPAGG_SK;

app.set('port', port);
app.set('env', env);

app.set('postgresUser', postgresUser);
app.set('postgresPassword', postgresPassword);
app.set('postgresHost', postgresHost);
app.set('postgresDatabase', postgresDatabase);
app.set('postgresPort', postgresPort);

app.set('firebaseApiKey', firebaseApiKey);
app.set('firebaseAuthDomain', firebaseAuthDomain);
app.set('firebaseDatabaseUrl', firebaseDatabaseUrl);
app.set('firebaseProjectId', firebaseProjectId);
app.set('firebaseStorageBucket', firebaseStorageBucket);
app.set('firebaseMsgSenderId', firebaseMsgSenderId);

app.set('mundipaggPk', mundipaggPk);
app.set('mundipaggSk', mundipaggSk);
app.set('mundipaggHeader', {               
  'Authorization': 'Basic ' + new Buffer(mundipaggSk).toString('base64'),
  'Content-Type': 'application/json'              
});

app.use(express.static(publicDir));
app.set('views', path.join(publicDir, 'views'));
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(compression());

app.use(AccessControlMiddleware.allowAccess);

// Init DB
const postgresConfig = {
  user: postgresUser,
  host: postgresHost,
  database: postgresDatabase,
  password: postgresPassword,
  port: postgresPort
};

const postgres = new PostgresDB(postgresConfig);
postgres.init();

const firebaseConfig = {
  apiKey: firebaseApiKey, 
  authDomain: firebaseAuthDomain, 
  databaseURL: firebaseDatabaseUrl, 
  projectId: firebaseProjectId, 
  storageBucket: firebaseStorageBucket, 
  messagingSenderId: firebaseMsgSenderId 
};

const firebase = new Firebase(firebaseConfig);
firebase.init();

// Init Router
const router = new Router(app, postgres, firebase);
router.init();

export { postgres, router };

process.on('unhandledRejection', (reason, p) => {
	console.log(reason);
	console.log(p);
});

app.listen(port, err => {
	if(err) console.log(err);
	else console.log(`Server online - Listening to port ${port}`);
});
