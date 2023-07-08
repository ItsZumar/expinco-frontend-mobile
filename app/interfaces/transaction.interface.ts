import { WalletI } from "./wallet.interface"

export interface TransactionCategoryI {
    _id: string
    name: string
    icon: string
    createdAt: string
    updatedAt: string
}

export interface TransactionI {
    _id: string
    type: string
    amount: number
    category: TransactionCategoryI
    description: string
    wallet: WalletI
    attachments: string[]
    createdAt: string
    updatedAt: string
}