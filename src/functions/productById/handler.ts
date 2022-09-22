import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import { container } from '../../../inversify.config';
import { ProductService } from '../../Application/Services';
import { TYPES } from '../../../types';

export const products = async (event) => {
  const { productId } = event.pathParameters;

  const productsService = container.get<ProductService>(TYPES.ProductService);
  const product = await productsService.getById(productId);

  if (!product) {
    return formatJSONResponse({
      message: 'Product not found',
    }, 404);
  }
  return formatJSONResponse({
    product,
  });
};

export const main = middyfy(products);
