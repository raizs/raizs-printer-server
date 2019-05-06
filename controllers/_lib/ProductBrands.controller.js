import { productBrand } from '../../models';
import { ResponseFactory } from '../../helper';
import { statusCodes } from '../../statusCodes';

const {
  OK
} = statusCodes;

export class ProductBrandsController {
  
  static async fetch() {
    const promise = await productBrand.findAll({
      attributes: ['id', 'name', 'description', 'logo'],
      raw: true
    });

    return ResponseFactory.create(OK, null, promise);
  }
}