import { createSlice } from "@reduxjs/toolkit"
import { createWallet, getAllWallets } from "./walletService"
import { WalletListI } from "./types"

const initialState: WalletListI = {
  loading: false,
  wallets: null,
  error: null,
}

export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getAllWallets.pending, (state) => {
        state.loading = true
      })
      .addCase(getAllWallets.fulfilled, (state, action) => {
        state.loading = false
        state.wallets = action.payload.result
      })
      .addCase(getAllWallets.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      .addCase(createWallet.pending, (state) => {
        state.loading = true
      })
      .addCase(createWallet.fulfilled, (state, action) => {
        console.log("action.payload.result === ", action.payload.result)
        state.loading = false
        state.wallets = {
          ...state.wallets,
          data: state.wallets.data.map((item) => {
            if (item._id === action.payload.result._id) {
              return action.payload.result
            } else {
              return item
            }
          }),
        }
      })
      .addCase(createWallet.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export const {} = walletSlice.actions

export default walletSlice.reducer
