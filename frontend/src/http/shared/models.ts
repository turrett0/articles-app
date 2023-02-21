export interface IPagination {
  page: number
  count: number
}

export interface IPaginatedServerResponse<T> {
  total: number
  data: T
}
