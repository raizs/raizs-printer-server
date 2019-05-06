import { resPartner, resCountryState, resStateCity } from '../../models';
import { ResponseFactory } from '../../helper';
import { statusCodes } from '../../statusCodes';
import { Op } from 'sequelize';

const {
  OK
} = statusCodes;

export class UserAddressesController {
  async create({ body }) {
    console.log("BODY", body);
    const promise = await resPartner.create(body);

    if(!promise.err) {
      const { addressIsDefault, id } = promise.dataValues;
      if(addressIsDefault) {
        await resPartner.update({
          addressIsDefault: false
        }, {
          where: {
            [Op.or]: [{ id: body.parentId }, { parentId: body.parentId }],
            id: { [Op.ne]: id }
          }
        })
      }
      return ResponseFactory.create(OK, null, promise.dataValues);
    }
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

    const promise = await resPartner.update(body, {
      where: { id },
      returning: true,
      plain: true
    });
    
    if(!promise.err) {
      if(body.addressIsDefault) {
        console.log('updating all addresses default to false...');
        const where = body.parentId ? 
          {
            [Op.or]: [
              { id: body.parentId },
              { [Op.and]: [{ parentId: body.parentId }, { id: { [Op.ne]: id } }] }
            ]
          } : {
            parentId: id
          };
        await resPartner.update({
          addressIsDefault: false
        }, { where })
      }
      
      return ResponseFactory.create(OK, null, promise[1]);
    }
  }

  static async list({ query }) {
    const { res_partner_id } = query;
    
    const promise = await resPartner.findAll({ where: { res_partner_id }, raw: true });
      
    if(!promise.err)
      return ResponseFactory.create(OK, null, promise);
  }
}