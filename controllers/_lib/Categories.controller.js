import { productCategory } from '../../models';
import { ResponseFactory } from '../../helper';
import { statusCodes } from '../../statusCodes';

const {
  OK
} = statusCodes;

export class CategoriesController {
  
  static async fetch() {
    const promise = await productCategory.findAll({
      attributes: ['id', 'name', 'complete_name', 'parent_id'],
      raw: true
    });

    return ResponseFactory.create(OK, null, promise);
  }
}