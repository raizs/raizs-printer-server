import axios from 'axios';

import { resPartner, resStateCity, resCountryState } from '../../models';
import { ResponseFactory } from '../../helper';
import { statusCodes } from '../../statusCodes';

const {
  OK,
  USER_FETCH_ERROR,
  FIREBASE_CREATE_ERROR,
  FIREBASE_UPDATE_ERROR
} = statusCodes;


export class ResPartnerController {
  constructor({ firebase, mpHeader }) {
    this.firebase = firebase;
    this.mpHeader = mpHeader;

    this.create = this.create.bind(this);
    this.updateFirebaseUser = this.updateFirebaseUser.bind(this);

    this.get = this.get.bind(this);
    this.update = this.update.bind(this);
  }

  async _get({ query }) {
    const { fuid, id, mpid } = query;
    const where = {};
    if(id) where.id = id;
    if(fuid) where.fuid = fuid;
    if(mpid) where.mpid = mpid;
    
    const user = await resPartner.findOne({ where,  raw: true });

    return user;
  }

  async create({ body }) {
    if(!body.fuid) {
      await this.firebase.services.auth().createUserWithEmailAndPassword(body.email, body.password)
      .then(res => {
        body.fuid = res.user.uid;
      })
      .catch(err => {
        return ResponseFactory.create(FIREBASE_CREATE_ERROR, err, null);
      });
    }
    
    let promise = await resPartner.create(body);

    if(!promise.err) {
      await axios({
        method: 'post',
        url: 'https://api.mundipagg.com/core/v1/customers',
        headers: this.mpHeader,
        data: {
          name: body.name,
          email: body.email,
          document: body.cnpjCpf,
          type: 'individual'
        }
      }).then(async res => {
        promise = await resPartner.update({ mpid: res.data.id }, {
          where: { id: promise.dataValues.id },
          returning: true,
          plain: true
        });
        promise[1].mpid = res.data.id;
      }).catch(err => {
        console.log('mundipagg create error on user', err);
      });

      return ResponseFactory.create(OK, null, promise[1]);
    }
  }
    
  async get({ query }) {
    const user = await this._get({ query });
    
    if(!user) return ResponseFactory.create(USER_FETCH_ERROR, true, null);
    return ResponseFactory.create(OK, null, user);
    
  }
  
  async getChildren({ query }) {
    const { parent_id } = query;
    
    const user = await resPartner.findAll({ where: { parent_id }, raw: true });

    if(!user) return ResponseFactory.create(USER_FETCH_ERROR, true, null);
    return ResponseFactory.create(OK, null, user);

  }

  async updateFirebaseUser({ body, query }) {
    const { uid } = query;

    let response = null;

    await this.firebase.admin.auth().updateUser(uid, body)
      .then(function(userRecord) {
        response = ResponseFactory.create(OK, null, userRecord.toJSON());
      })
      .catch(function(error) {
        response = ResponseFactory.create(FIREBASE_UPDATE_ERROR, error, null);
      })

    return response;
  }

  async update({ body, query }) {
    const { id } = query;

    if(body.state) {
      const stateObj = await resCountryState.findOne({ where: { code: body.state }, raw: true });
      body.state_id = stateObj.id;
    }
    
    if(body.city) {
      const cityObj = await resStateCity.findOne({ where: { name: body.city }, raw: true });
      body.city_id = cityObj.id;
    }
    
    let promise = await resPartner.update(body, {
      where: { id },
      returning: true,
      plain: true
    });

    promise = await this._get({ query });
      
    return ResponseFactory.create(OK, null, promise);
  }
}