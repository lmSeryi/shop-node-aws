import { injectable } from 'inversify';
import { ProductRepository as ProductRepositoryModel } from './Models'
import { Product } from '../../Domain/models';

@injectable()
export class ProductRepository implements ProductRepositoryModel {
  products: Product[] = [
    {
      id: '1',
      name: 'Product 1',
      description: 'Description 1',
      price: 100,
      quantity: 10,
      imageUrl: `https://picsum.photos/200/300?random=1`,
    },
    {
      id: '2',
      name: 'Product 2',
      description: 'Description 2',
      price: 200,
      quantity: 10,
      imageUrl: `https://picsum.photos/200/300?random=2`,
    },
    {
      id: '3',
      name: 'Product 3',
      description: 'Description 3',
      price: 300,
      quantity: 10,
      imageUrl: `https://picsum.photos/200/300?random=3`,
    }
  ]

  getAll(): Promise<Product[]> {
    return Promise.resolve(this.products);
  }

  getById(id: string): Promise<Product> {
    return Promise.resolve(this.products.find(p => p.id === id))
  }

}
