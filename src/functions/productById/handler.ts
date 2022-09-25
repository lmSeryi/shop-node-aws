import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import { container } from '../../../inversify.config';
import { ProductService } from '../../Application/Services';
import { TYPES } from '../../../types';

export const products = async (event) => {
  const { productId } = event.pathParameters;

  const productsService = container.get<ProductService>(TYPES.ProductService);
  const productResponse = await productsService.getById(productId);

  if (productResponse.success === false) {
    return formatJSONResponse({
      message: productResponse.message,
    }, productResponse.code);
  }
  return formatJSONResponse(productResponse.data);
};

export const main = middyfy(products);
