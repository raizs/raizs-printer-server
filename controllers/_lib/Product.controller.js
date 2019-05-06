import { productProduct, productTemplate } from '../../models';
import { ResponseFactory } from '../../helper';
import { statusCodes } from '../../statusCodes';

const {
  OK
} = statusCodes;

export class ProductController {
  
  static async fetch() {
    const promise = await productProduct.findAll({
      attributes: ['id'],
      raw: true,
      include: [
        {
          attributes: [
            'name',
            'categ_id',
            'list_price',
            'uom_id',
            'id',
            'product_brand_id',
            'weight'
          ],
          model: productTemplate,
          as: 'productTmpl'
        }
      ],
    });

    return ResponseFactory.create(OK, null, promise);
  }
}