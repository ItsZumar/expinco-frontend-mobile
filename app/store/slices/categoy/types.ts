export interface CategoryIconI {
  type: string
  secureURL: string
  _id: string
  createdAt: string
  updatedAt: string
}

export interface CategoryI {
  _id: string
  name: string
  icon: CategoryIconI
  createdAt: string
  updatedAt: string
}

export interface GetCategoryListI {
  result: {
    data: CategoryI[]
    pagination: {
      page: number
      perPage: number
      startIndex: number
      endIndex: number
      hasPrevious: boolean
      hasNext: boolean
    }
  }
  error: string
  stack: string
}

export interface CategoryListI {
  loading: boolean
  categories: GetCategoryListI["result"]
  error: string
  stack?: string
}

export interface GetCategoryListPayloadI {
  firstname: string
  lastname: string
  email: string
  password: string
}
