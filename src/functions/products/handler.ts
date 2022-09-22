import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { ProductService } from 'src/Application/Services';
import { TYPES } from '../../../types';
import { container } from '../../../inversify.config'

export const products = async () => {
  const productsService = container.get<ProductService>(TYPES.ProductService);

  const products = await productsService.getAll();

  return formatJSONResponse({
    products,
  });
};

export const main = middyfy(products);
