import { ProductRepository as ProductRepositoryModel } from './Models'
import { Product } from 'src/interfaces';

export default class ProductRepository implements ProductRepositoryModel {
  getAll(): Promise<Product> {
    return Promise.resolve(undefined);
  }

  getById(id: string): Promise<Product> {
    return Promise.resolve(undefined);
  }

}
