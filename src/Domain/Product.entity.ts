import { ProductEntity as ProductEntityModel } from './models';

export default class ProductEntity implements ProductEntityModel {
  id: string;
  name: string;
  description: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}
