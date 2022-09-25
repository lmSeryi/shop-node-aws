import { Product } from './models';

export default class ProductEntity implements Product {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
}
