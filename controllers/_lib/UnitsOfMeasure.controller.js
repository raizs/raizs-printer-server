import { productUom } from '../../models';
import { ResponseFactory } from '../../helper';
import { statusCodes } from '../../statusCodes';

const {
  OK
} = statusCodes;

export class UnitsOfMeasureController {
  
  static async fetch() {
    const promise = await productUom.findAll({
      attributes: ['id', 'name', 'category_id'],
      raw: true
    });

    return ResponseFactory.create(OK, null, promise);
  }
}