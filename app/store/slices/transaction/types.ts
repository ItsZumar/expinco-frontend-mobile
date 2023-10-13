interface IconI {
  type: string
  secureURL: string
  _id: string
  createdAt: string
  updatedAt: string
}

interface CategoryI {
  _id: string
  name: string
  icon: IconI
  createdAt: string
  updatedAt: string
}

interface WalletI {
  _id: string
  amount: number
  name: string
}

export interface TransactionI {
  _id: string
  type: string
  amount: number
  category: CategoryI
  description: string
  wallet: WalletI
  attachments: string[] | any
  createdAt: string
  updatedAt: string
}

export interface PaginationI {
  page: number
  perPage: number
  startIndex: number
  endIndex: number
  hasPrevious: boolean
  hasNext: boolean
}

export interface GetTransactionListI {
  result: {
    data: TransactionI[]
    pagination: PaginationI
  }
  error: string
  stack: string
}

export interface TransactionListI {
  loading: boolean
  transactions: GetTransactionListI["result"]
  error: string
  stack?: string
}

export interface CreateTransactionI {
  result: {
    type: string
    name: string
    amount: number
    category: string
    description: string
    wallet: string
    owner: string
    attachments: string[] | any
    _id: string
    createdAt: string
    updatedAt: string
  }
  error: string
  stack: string
}

export interface CreateTransactionPayloadI {
  type: string
  amount: number
  category: string
  description: string
  wallet: string
  attachments?: string | string[]
}
