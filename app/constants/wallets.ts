import { WalletI } from "app/interfaces"

export const walletType = [
  {
    _id: "1",
    name: "Cash",
    icon: {
      format: "jpg",
      secureURL:
        "https://res.cloudinary.com/dnpfq0qed/image/upload/v1698504555/k8roagtkxaxtdphrzi0b.jpg",
      _id: "653d1f6c40ef43e6c7e734e4",
      createdAt: "2023-10-28T14:49:16.778Z",
      updatedAt: "2023-10-28T14:49:26.582Z",
    },
  },
  {
    _id: "2",
    name: "Bank",
    icon: {
      _id: "653d1f8840ef43e6c7e734ec",
      format: "jpg",
      secureURL:
        "https://res.cloudinary.com/dnpfq0qed/image/upload/v1698504583/xlesxdldyl8uyahd0rek.jpg",
      createdAt: "2023-11-16T11:27:48.269Z",
      updatedAt: "2023-11-16T11:27:48.269Z",
    },
  },
  {
    _id: "3",
    name: "Credit Card",
    icon: {
      format: "jpg",
      secureURL:
        "https://res.cloudinary.com/dnpfq0qed/image/upload/v1698504490/jkxjvkw8nsygh1j2kovm.jpg",
      _id: "653d1f2a40ef43e6c7e734d9",
      createdAt: "2023-10-28T14:48:10.825Z",
      updatedAt: "2023-10-28T14:48:22.554Z",
    },
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
