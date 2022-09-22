import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { ProductService } from 'src/Application/Services/Models';
import { TYPES } from '../../../types';
import { container } from '../../../inversify.config'

export const products = async () => {
  const productsService = container.get<ProductService>(TYPES.ProductService);

  const productsReponse = await productsService.getAll();

  if (productsReponse.success === false) {
    return formatJSONResponse({
      message: productsReponse.message,
    }, productsReponse.code);
  }

  return formatJSONResponse({
    products: productsReponse.data,
  });
};

export const main = middyfy(products);
