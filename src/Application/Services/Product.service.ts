import { injectable, inject } from 'inversify';
import { BaseService } from './Models';
import { Product } from 'src/interfaces';
import { TYPES } from '../../../types';
import { ProductRepository } from '../../Infrastructure/Repositories/Models';

@injectable()
export class ProductService implements BaseService<Product> {
  @inject(TYPES.ProductRepository) private readonly productRepository: ProductRepository

  getAll(): Promise<Product[]> {
    return this.productRepository.getAll();
  }

  async getById(id: string): Promise<Product> {
    return this.productRepository.getById(id);
  }

}
