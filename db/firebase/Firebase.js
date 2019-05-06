import firebase from 'firebase';
import admin from 'firebase-admin';

import serviceAccount from '../../config/raizs-api-firebase-adminsdk-pbo0l-818d0347ff.json';

export class Firebase {
	constructor(config) {
    this.config = config;
    this.services = null;
	}

	init() {
    firebase.initializeApp(this.config);
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: 'https://raizs-api.firebaseio.com'
    });

    this.services = firebase;
    this.admin = admin;
	}
}
