export interface transactionTypesI {
  id: string
  type: string
  title: string
}

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
