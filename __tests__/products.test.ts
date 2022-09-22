import { describe, test, expect } from '@jest/globals';

import { productsMock } from '../src/libs/products';
import { products }  from '../src/functions/products/handler';

describe('Get all products', () => {
  test('The function should return data', async () => {

    const response = await products();

    const { products: data } = JSON.parse(response.body);

    expect(data.length).toBe(3);
    expect(data).toBeTruthy();
  });

  test('The function should return 200 status code', async () => {
    const response = await products();
    expect(response.statusCode).toBe(200);
  });

  test('The function should be equal to productsMock', async () => {
    const response = await products();
    const { products: data } = JSON.parse(response.body);
    expect(data).toEqual(productsMock);
  });
})
