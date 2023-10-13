import { WalletI } from "app/interfaces"

export const walletType = [
  {
    _id: "1",
    name: "Cash",
  },
  {
    _id: "2",
    name: "Bank",
  },
  {
    _id: "3",
    name: "Credit Card",
  },
]

export const myWalletsData: WalletI[] = [
  {
    id: "1",
    icon: "chase",
    name: "Chase",
    amount: 400,
  },
  {
    id: "2",
    icon: "citi",
    name: "Citi",
    amount: 9000,
  },
  {
    id: "3",
    icon: "paypal",
    name: "Paypal",
    amount: 10000,
  },
  {
    id: "4",
    icon: "wallet",
    name: "Wallet",
    amount: 10000,
  },
]
