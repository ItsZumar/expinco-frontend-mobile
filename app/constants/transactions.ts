import { TransactionAttachmentTypesI, TransactionI, transactionTypesI } from "app/interfaces"

export const TransactionData: TransactionI[] = [
  {
    _id: "64a96b8662c5c32e9b62fe17",
    type: "EXPENSE",
    amount: 100,
    category: {
      _id: "64a96b6162c5c32e9b62fe09",
      name: "Shopping",
      icon: "https://picsum.photos/101",
      createdAt: "2023-07-08T13:57:53.274Z",
      updatedAt: "2023-07-08T13:57:53.274Z",
    },
    name: "Test gaming transaction",
    description:
      "This is test gaming transaction. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    wallet: {
      _id: "64a96b3562c5c32e9b62fe06",
      amount: 700,
      name: "Cash",
    },
    attachments: ["6499bcb0bdeb19285d6d92a1"],
    createdAt: "2023-07-08T13:58:30.335Z",
    updatedAt: "2023-07-08T13:58:30.335Z",
  },
  {
    _id: "64a96b7e62c5c32e9b62fe12",
    type: "INCOME",
    amount: 550,
    category: {
      _id: "64a96b6162c5c32e9b62fe09",
      name: "Salary",
      icon: "https://picsum.photos/101",
      createdAt: "2023-07-08T13:57:53.274Z",
      updatedAt: "2023-07-08T13:57:53.274Z",
    },
    name: "Test gaming transaction",
    description: "This is test gaming transaction",
    wallet: {
      _id: "64a96b3562c5c32e9b62fe06",
      amount: 700,
      name: "Cash",
    },
    attachments: ["6499bcb0bdeb19285d6d92a1"],
    createdAt: "2023-07-08T13:58:22.575Z",
    updatedAt: "2023-07-08T13:58:22.575Z",
  },
  {
    _id: "64a96b6f62c5c32e9b62fe0d",
    type: "EXPENSE",
    amount: 50,
    category: {
      _id: "64a96b6162c5c32e9b62fe09",
      name: "Gaming",
      icon: "https://picsum.photos/102",
      createdAt: "2023-07-08T13:57:53.274Z",
      updatedAt: "2023-07-08T13:57:53.274Z",
    },
    name: "Test gaming transaction",
    description: "This is test gaming transaction",
    wallet: {
      _id: "64a96b3562c5c32e9b62fe06",
      amount: 700,
      name: "Cash",
    },
    attachments: ["6499bcb0bdeb19285d6d92a1"],
    createdAt: "2023-07-08T13:58:07.407Z",
    updatedAt: "2023-07-08T13:58:07.407Z",
  },
]

export const transactionTypes: transactionTypesI[] = [
  {
    id: "0",
    type: "type",
    title: "expense",
  },
  {
    id: "1",
    type: "category",
    title: "shopping",
  },
  {
    id: "2",
    type: "wallet",
    title: "cash",
  },
]

export const transactionAttachments: TransactionAttachmentTypesI[] = [
  {
    id: "0",
    attachment: "",
  },
  {
    id: "1",
    attachment: "",
  },
  {
    id: "2",
    attachment: "",
  },
  {
    id: "3",
    attachment: "",
  },
  {
    id: "4",
    attachment: "",
  },
]
