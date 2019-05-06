import axios from 'axios';
import { ResponseFactory } from '../../helper';
import { statusCodes } from '../../statusCodes';
import { ecOrders } from '../../models';

const {
  OK,
  MUNDIPAGG_CREATE_CARD_ERROR,
  MUNDIPAGG_FETCH_CARD_ERROR,
  EC_ORDER_UPDATE_ERROR,
  EC_ORDER_CREATE_ERROR
} = statusCodes;

export class PaymentController {
  constructor({ mpHeader }) {
    this.mpHeader = mpHeader;

    this.createCreditCard = this.createCreditCard.bind(this);
    this.listCreditCards = this.listCreditCards.bind(this);
    this.createOrder = this.createOrder.bind(this);
  }

  async createCreditCard({ body }) {
    let response = null;

    await axios({
      method: 'post',
      url: `https://api.mundipagg.com/core/v1/customers/${body.customer_id}/cards`,
      headers: this.mpHeader,
      data: body.toMundipagg
    }).then(async res => {
      response = ResponseFactory.create(OK, null, res.data);
    }).catch(err => {
      response = ResponseFactory.create(MUNDIPAGG_CREATE_CARD_ERROR, err.response.data, null);
    });

    return response;
  }
    
  async listCreditCards({ query }) {
    const { customer_id } = query;
    let response = null;
    
    await axios({
      method: 'get',
      url: `https://api.mundipagg.com/core/v1/customers/${customer_id}/cards`,
      headers: this.mpHeader
    }).then(async res => {
      response = ResponseFactory.create(OK, null, res.data);
    }).catch(err => {
      console.log(err);
      response = ResponseFactory.create(MUNDIPAGG_FETCH_CARD_ERROR, err.response.data, null);
    });

    return response;
  }

  async createOrder({ body }) {
    let lastResponse = null;
    let response = null;

    await ecOrders.create(body.toPg)
      .then(res => {
        lastResponse = res;
      })
      .catch(err => {
        return ResponseFactory.create(EC_ORDER_CREATE_ERROR, err, null);
      });

    const ecOrderId = lastResponse.dataValues.id;
    body.toMp.code = ecOrderId;

    await axios({
      method: 'post',
      url: `https://api.mundipagg.com/core/v1/orders`,
      headers: this.mpHeader,
      data: body.toMp
    }).then(async res => {
      lastResponse = res.data;
      response = ResponseFactory.create(OK, null, res.data);
    }).catch(err => {
      console.log(err);
      return ResponseFactory.create(MUNDIPAGG_FETCH_CARD_ERROR, err.response.data, null);
    });

    const update = { mpid: lastResponse.id };

    await ecOrders.update(update, {
      where: { id: ecOrderId },
      returning: true,
      plain: true
    })
      .then(res => {
        lastResponse = res;
        response = ResponseFactory.create(OK, null, res[1]);
      })
      .catch(err => {
        return ResponseFactory.create(EC_ORDER_UPDATE_ERROR, err, null);
      })

    return response;
  }
}