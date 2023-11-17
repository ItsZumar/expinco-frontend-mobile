import { WalletI } from "./wallet.interface"

export interface TransactionCategoryI {
  _id: string
  name: string
  icon: {
    _id: string
    createdAt: string
    format: string
    secureURL: string
    updatedAt: string
  }
  createdAt: string
  updatedAt: string
}

export interface TransactionI {
  _id: string
  type: string
  amount: number
  category: TransactionCategoryI
  name: string
  description: string
  wallet: WalletI
  attachments: string[]
  createdAt: string
  updatedAt: string
}

export interface transactionTypesI {
  id: string
  type: string
  title: string
}

export interface TransactionAttachmentTypesI {
  id: string
  attachment: string
}
