import { BaseResponse } from '../../../interfaces/BaseResponse.interface';

export interface BaseService<T> {

  getAll: () => Promise<BaseResponse<T[]>>;

  getById: (id: string) => Promise<BaseResponse<T>>;

}
