
import "reflect-metadata";
import { Container } from 'inversify';
import { TYPES } from './types'
// Repositories
import {
  ProductRepository,
} from './src/Infrastructure/Repositories';
// Repository Models
import {
  ProductRepository as ProductRepositoryModel,
} from './src/Infrastructure/Repositories/Models';
// Services
import {
  ProductService,
} from './src/Application/Services';
// Service Models
import {
  ProductService as ProductServiceModel,
} from './src/Application/Services/Models'

const container = new Container()

container.bind<ProductRepositoryModel>(TYPES.ProductRepository).to(ProductRepository)
container.bind<ProductServiceModel>(TYPES.ProductService).to(ProductService)

export { container }
