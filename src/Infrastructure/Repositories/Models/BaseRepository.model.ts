export interface BaseRepository<T> {
  getAll: () => Promise<T[]>;

  getById: (id: string) => Promise<T>;

}
