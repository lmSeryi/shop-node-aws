import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import { productsMock } from '@libs/products';

export const products = async (event) => {
  const { productId } = event.pathParameters;

  const product = productsMock.find((product) => product.id === productId);

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
