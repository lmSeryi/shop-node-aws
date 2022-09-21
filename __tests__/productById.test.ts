import { productsMock } from '../src/libs/products';
import { products }  from '../src/functions/productById/handler';

describe('Get all products', () => {
  const productId = '1'

  const event = {
    pathParameters: {
      productId,
    }
  }

  const toFind = productsMock.find((product) => product.id === productId);
  
  test('The function should return data', async () => {
    const response = await products(event);
    const { product: data } = JSON.parse(response.body);
    expect(data).toBeTruthy();
  });

  test('The function should return 200 status code', async () => {
    const response = await products(event);
    expect(response.statusCode).toBe(200);
  });

  test('The function should be equal to productsMock', async () => {
    const response = await products(event);
    const { product: data } = JSON.parse(response.body);
    expect(data).toEqual(toFind);
  });

  test('The function should return 404 status code', async () => {
    const response = await products({ pathParameters: { productId: '5' } });
    expect(response.statusCode).toBe(404);
  });

  test('The function should return message', async () => {
    const response = await products({ pathParameters: { productId: '5' } });
    const { message } = JSON.parse(response.body);
    expect(message).toBe('Product not found');
  })
})