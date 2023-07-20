import { WalletI } from "app/interfaces"

export const MY_WALLETS: WalletI[] = [
  {
    _id: "0",
    name: "paypal",
    amount: 120,
  },
  {
    _id: "1",
    name: "cash",
    amount: 29200,
  },
  {
    _id: "2",
    name: "wise",
    amount: 45,
  },
  {
    _id: "3",
    name: "stripe",
    amount: 120,
  },
  {
    _id: "4",
    name: "payoneer",
    amount: 120,
  },
  {
    _id: "5",
    name: "easypaisa",
    amount: 120,
  },
]

interface BadgeItemI {
  _id: string
  icon: any
}

export const MY_ACHIEVEMENTS: BadgeItemI[] = [
  {
    _id: "1",
    icon: "badge1",
  },
  {
    _id: "2",
    icon: "badge2",
  },
  {
    _id: "3",
    icon: "badge3",
  },
  {
    _id: "4",
    icon: "badge4",
  },
  {
    _id: "5",
    icon: "badge5",
  },
  {
    _id: "6",
    icon: "badge6",
  },
  {
    _id: "7",
    icon: "badge7",
  },
  {
    _id: "8",
    icon: "badge8",
  },
]
