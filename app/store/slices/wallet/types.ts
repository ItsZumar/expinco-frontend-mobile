export interface IconI {
  type: string
  secureURL: string
  _id: string
  createdAt: string
  updatedAt: string
}

export interface EditWalletI {
  name: string
  amount: string
}

export interface WalletI {
  _id: string
  amount: number
  name: string
  icon: IconI
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

export interface UpdateWalletI {
  result: {
    _id: string
    amount: number
    name: string
    icon: {
      format: string
      secureURL: string
      _id: string
      createdAt: string
      updatedAt: string
    }
    owner: string
    createdAt: string
    updatedAt: string
  }
  error: string
  stack: string
}

export interface PayloadCreateWalletI {
  name: string
  amount: string
  icon: string
}

export interface PayloadEditWalletI {
  id: string
  name: string
  amount: string
  icon?: string
}

export interface PayloadDeleteWalletI {
  id: string
}
