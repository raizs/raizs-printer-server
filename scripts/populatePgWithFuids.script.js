import { Op } from 'sequelize';
import Promise from 'bluebird';

import { resPartner } from '../models';
import { PostgresDB, Firebase } from '../db';

const defaultPassword = proccess.env.FIREBASE_DEFAULT_PASSWORD;

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

const populatePgWithFuids = async (offset = 0) => {
  console.log('offset:', offset);
  const result = await resPartner.findAll({
    attributes: ['id', 'email', 'phone', 'name', 'fuid'],
    where: {
      [Op.or]: [{email: { [Op.ne]: null }}, { phone: { [Op.ne]: null }}],
      name: { [Op.ne]: 'maassump@gmail.com' }
    },
    limit: 30,
    offset,
    raw: true
  });

  await Promise.each(result, async pgUser => {
    let toReturn = { err: null, fuid: null }

    const toCreate = {};
    if(pgUser.email && _matchEmailRegex(pgUser.email)) {
      toCreate.email = pgUser.email;
      toCreate.password = defaultPassword;
    }
    if(pgUser.phone) {
      if(!pgUser.phone.startsWith('+'))
        pgUser.phone = '+55' + pgUser.phone;
      toCreate.phoneNumber = pgUser.phone;
    }
    if(pgUser.name) toCreate.displayName = pgUser.name;

    await firebaseAuth.createUser(toCreate)
    .then(fbUser => {
      resPartner.update({
        fuid: fbUser.uid
      }, {
        where: {
          [Op.or]: [{ email: fbUser.email }, { phone: fbUser.phoneNumber }]
        },
        raw: true
      }).then(res => {
        console.log(`successfully updated pgUser ${fbUser.displayName}`)
      }).catch(err => {
        console.log(`error updating pgUser\n\n ${fbUser.displayName}\n\n ${err}`);
      })
    })
    .catch(err => {
      console.log(`error while creating firebase user ${err}`);
    })
  })
  .then(res => { console.log('done') })
  .catch(err => { console.log(`error in promise.each\n\n ${err}`) });

  if(offset < 3300) populatePgWithFuids(offset + 30);
}

const _matchEmailRegex = (email) => {
  return email.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);
}

populatePgWithFuids();