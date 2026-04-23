export interface PaginatedResponse<T> {
  data: T[]
  meta: {
    page: number
    total: number
    limit: number
    last_page: number
  }
}
