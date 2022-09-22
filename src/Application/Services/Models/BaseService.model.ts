export interface BaseService<T> {
  getAll: () => Promise<T[]>;

  getById: (id: string) => Promise<T>;

}
