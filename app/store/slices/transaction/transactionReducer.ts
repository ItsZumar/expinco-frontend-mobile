import { createSlice } from "@reduxjs/toolkit"
import {
  createTransaction,
  deleteTransaction,
  getAllRecentTransactions,
  getAllTransactions,
  getTransactionsByMonth,
  updateTransaction,
} from "./transactionService"
import { TransactionListI } from "./types"
import { TransactionType } from "app/enums/transactions.enum"

const initialState: TransactionListI = {
  loading: false,
  transactions: {
    data: [
      {
        _id: "",
        amount: 0,
        attachments: [],
        category: {
          _id: "",
          name: "",
          icon: {
            type: "",
            secureURL: "",
            _id: "",
            createdAt: "",
            updatedAt: "",
          },
          createdAt: "",
          updatedAt: "",
        },
        type: "",
        description: "",
        wallet: {
          _id: "",
          amount: 0,
          name: "",
        },
        createdAt: "",
        updatedAt: "",
      },
    ],
    pagination: {
      page: 0,
      perPage: 0,
      startIndex: 0,
      endIndex: 0,
      hasPrevious: false,
      hasNext: false,
    },
  },
  recentTransactions: {
    data: [
      {
        _id: "",
        amount: 0,
        attachments: [],
        category: {
          _id: "",
          name: "",
          icon: {
            type: "",
            secureURL: "",
            _id: "",
            createdAt: "",
            updatedAt: "",
          },
          createdAt: "",
          updatedAt: "",
        },
        type: "",
        description: "",
        wallet: {
          _id: "",
          amount: 0,
          name: "",
        },
        createdAt: "",
        updatedAt: "",
      },
    ],
    pagination: {
      page: 0,
      perPage: 0,
      startIndex: 0,
      endIndex: 0,
      hasPrevious: false,
      hasNext: false,
    },
  },
  monthlyTransactions: {
    data: [
      {
        _id: "",
        amount: 0,
        attachments: [],
        category: {
          _id: "",
          name: "",
          icon: {
            type: "",
            secureURL: "",
            _id: "",
            createdAt: "",
            updatedAt: "",
          },
          createdAt: "",
          updatedAt: "",
        },
        type: "",
        description: "",
        wallet: {
          _id: "",
          amount: 0,
          name: "",
        },
        createdAt: "",
        updatedAt: "",
      },
    ],
    pagination: {
      page: 0,
      perPage: 0,
      startIndex: 0,
      endIndex: 0,
      hasPrevious: false,
      hasNext: false,
    },
  },
  totalIncome: 0,
  totalExpense: 0,
  error: null,
}

export const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getAllTransactions.pending, (state) => {
        state.loading = true
      })
      .addCase(getAllTransactions.fulfilled, (state, action) => {
        state.transactions = action.payload.result

        state.totalIncome = action.payload.result.data.reduce(
          (total: number, transaction: { type: any; amount: number }) => {
            if (transaction.type === TransactionType.INCOME) {
              return total + transaction.amount
            }
            return total
          },
          0,
        )

        state.totalExpense = action.payload.result.data.reduce(
          (total: number, transaction: { type: any; amount: number }) => {
            if (transaction.type === TransactionType.EXPENSE) {
              return total + transaction.amount
            }
            return total
          },
          0,
        )
        state.loading = false
      })
      .addCase(getAllTransactions.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      .addCase(getAllRecentTransactions.pending, (state) => {
        state.loading = true
      })
      .addCase(getAllRecentTransactions.fulfilled, (state, action) => {
        state.loading = false
        state.recentTransactions = action.payload.result
      })
      .addCase(getAllRecentTransactions.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      .addCase(getTransactionsByMonth.pending, (state) => {
        state.loading = true
      })
      .addCase(getTransactionsByMonth.fulfilled, (state, action) => {
        state.loading = false
        state.monthlyTransactions = action.payload.result
      })
      .addCase(getTransactionsByMonth.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      .addCase(createTransaction.pending, (state) => {
        state.loading = true
      })
      .addCase(createTransaction.fulfilled, (state, action) => {
        state.transactions.data = [...state.transactions.data, action.payload.result]

        if (action.payload.result.type === TransactionType.INCOME) {
          state.totalIncome += action.payload.result.amount
        } else if (action.payload.result.type === TransactionType.EXPENSE) {
          state.totalExpense += action.payload.result.amount
        }

        state.recentTransactions.data = [...state.recentTransactions.data, action.payload.result]
        state.loading = false
      })
      .addCase(createTransaction.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      .addCase(updateTransaction.pending, (state) => {
        state.loading = true
      })
      .addCase(updateTransaction.fulfilled, (state, action) => {
        state.recentTransactions.data = state.recentTransactions.data.map((transaction) => {
          if (transaction._id === action.payload.result._id) {
            return action.payload.result
          }
          return transaction
        })

        state.transactions.data = state.transactions.data.map((transaction) => {
          if (transaction._id === action.payload.result._id) {
            return action.payload.result
          }
          return transaction
        })
        state.totalIncome = state.transactions.data.reduce((total, transaction) => {
          if (transaction.type === TransactionType.INCOME) {
            return total + transaction.amount
          }
          return total
        }, 0)

        state.totalExpense = state.transactions.data.reduce((total, transaction) => {
          if (transaction.type === TransactionType.EXPENSE) {
            return total + transaction.amount
          }

          return total
        }, 0)
        state.loading = false
      })
      .addCase(updateTransaction.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      .addCase(deleteTransaction.pending, (state) => {
        state.loading = true
      })
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        state.loading = false
      })
      .addCase(deleteTransaction.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export const {} = transactionSlice.actions

export default transactionSlice.reducer
