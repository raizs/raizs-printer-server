import { Op } from 'sequelize';
import Promise from 'bluebird';
import axios from  'axios';

import { resPartner } from '../models';
import { PostgresDB, Firebase } from '../db';

const mundipaggSk = process.env.MUNDIPAGG_SK;

const populatePgWithMpids = async (offset = 0) => {
  console.log('offset:', offset);
  const result = await resPartner.findAll({
    attributes: ['id', 'email', 'cnpjCpf', 'name', 'mpid'],
    where: {
      id: 1100 // remove to update all
    },
    limit: 30,
    offset,
    raw: true
  });

  await Promise.each(result, async pgUser => {
    let toReturn = { err: null, fuid: null }

    var req = {                 
      method: 'POST',             
      url: 'https://api.mundipagg.com/core/v1/customers',                    
      headers: {               
        'Authorization': 'Basic ' + new Buffer(mundipaggSk).toString('base64'),
        'Content-Type': 'application/json'              
      },
      data : {
        name: pgUser.name,
        email: pgUser.email,
        document: pgUser.cnpjCpf,
        type: 'individual'
      }
    };

    axios(req)
    .then(res => {
      resPartner.update({ mpid: res.data.id }, { where: { id: pgUser.id } });
    })
    .catch(err => {
      console.log('err', err);
    });
  })
  .then(res => { console.log('done') })
  .catch(err => { console.log(`error in promise.each\n\n ${err}`) });

}

populatePgWithMpids();