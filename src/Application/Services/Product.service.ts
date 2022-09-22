import { injectable, inject } from 'inversify';
import { ProductService as ProductServiceModel } from './Models';
import { Product } from 'src/interfaces';
import { TYPES } from '../../../types';
import { ProductRepository } from '../../Infrastructure/Repositories/Models';
import { BaseResponse } from '../../interfaces/BaseResponse.interface';

@injectable()
export class ProductService implements ProductServiceModel {
  @inject(TYPES.ProductRepository) private readonly productRepository: ProductRepository

  async getAll(): Promise<BaseResponse<Product[]>> {
    try {
      const data = await this.productRepository.getAll();
      if (!data) {
        return {
          message: 'Products not found',
          success: false,
          code: 404,
        }
      }
      return {
        success: true,
        data,
      }
    } catch (error) {
      console.error(error.message);
      return {
        message: 'Internal server error',
        success: false,
        code: 500,
      }
    }
  }

  async getById(id: string): Promise<BaseResponse<Product>> {
    try {
      const data = await this.productRepository.getById(id);
      if (!data) {
        return {
          message: 'Product not found',
          success: false,
          code: 404,
        }
      }
      return {
        success: true,
        data,
      }
    } catch (error) {
      console.error(error.message);
      return {
        message: 'Internal server error',
        success: false,
        code: 500,
      }
    }
  }

}
