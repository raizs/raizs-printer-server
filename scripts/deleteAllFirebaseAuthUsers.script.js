import { Op } from 'sequelize';
import Promise from 'bluebird';

import { resPartner } from '../models';
import { PostgresDB, Firebase } from '../db';

const postgresConfig = {
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT
};

const postgres = new PostgresDB(postgresConfig);
postgres.init();

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY, 
  authDomain: process.env.FIREBASE_AUTH_DOMAIN, 
  databaseURL: process.env.FIREBASE_DB_URL, 
  projectId: process.env.FIREBASE_PROJECT_ID, 
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET, 
  messagingSenderId: process.env.FIREBASE_MSG_SENDER_ID 
}

const firebase = new Firebase(firebaseConfig);
firebase.init();

const firebaseAuth = firebase.admin.auth();

const deleteAllFirebaseAuthUsers = async () => {
  const uids = await _listAllUsers();
  console.log(uids);

  Promise.each(uids, fuid => {
    firebaseAuth.deleteUser(fuid).then(res => console.log(`deleted user ${fuid}`));
    resPartner.update(
      { fuid: 'fuid' },
      {
        where: {
          fuid
        }
      }
    )
  }).then(() => console.log('done.'));
}

async function _listAllUsers(nextPageToken) {
  // List batch of users, 1000 at a time.
  const uids = [];

  await firebaseAuth.listUsers(1000, nextPageToken)
    .then(function(listUsersResult) {
      listUsersResult.users.forEach(function(userRecord) {
        uids.push(userRecord.toJSON().uid);
      });
      if (listUsersResult.pageToken) {
        // List next batch of users.
        _listAllUsers(listUsersResult.pageToken)
      }
    })
    .catch(function(error) {
      console.log("Error listing users:", error);
    });
  return uids;
}

deleteAllFirebaseAuthUsers();