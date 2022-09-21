import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import { productsMock } from '@libs/products';

export const products = async () => {
  return formatJSONResponse({
    products: productsMock,
  });
};

export const main = middyfy(products);
