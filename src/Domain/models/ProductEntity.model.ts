import { BaseEntity } from './BaseEntity.model';

export interface Product extends BaseEntity {
  name: string;
  description: string;
  price: number;
  quantity: number;
  imageUrl: string;
}
