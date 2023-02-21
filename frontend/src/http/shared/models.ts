export interface IPagination {
  page: number
  count: number
}

export interface IPaginatedServerResponse<T> {
  total: number
  data: T
}

export type  IPaginatedServerRequest<T> = IPagination & T
