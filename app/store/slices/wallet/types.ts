export interface WalletI {
  _id: string
  amount: number
  name: string
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

export interface GetWalletListI {
  result: {
    data: WalletI[]
    pagination: PaginationI
  }
  error: string
  stack: string
}

export interface WalletListI {
  loading: boolean
  wallets: GetWalletListI["result"]
  error: string
  stack?: string
}

export interface CreateWalletI {
  result: WalletI
  error: string
  stack: string
}

export interface PayloadCreateWalletI {
  name: string
  amount: string
}
