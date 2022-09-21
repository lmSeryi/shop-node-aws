import { BaseEntity } from './BaseEntity.model';

export interface ProductEntity extends BaseEntity {
  name: string;
  description: string;
  price: number;
}
