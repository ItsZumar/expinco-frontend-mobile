import { createSlice } from "@reduxjs/toolkit"
import {
  createTransaction,
  getAllRecentTransactions,
  getAllTransactions,
} from "./transactionService"
import { TransactionListI } from "./types"

const initialState: TransactionListI = {
  loading: false,
  transactions: null,
  recentTransactions: null,
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
        state.loading = false
        state.transactions = action.payload.result
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

      .addCase(createTransaction.pending, (state) => {
        state.loading = true
      })
      .addCase(createTransaction.fulfilled, (state, action) => {
        state.loading = false
        state.transactions.data.push(action.payload.result)
      })
      .addCase(createTransaction.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export const {} = transactionSlice.actions

export default transactionSlice.reducer
