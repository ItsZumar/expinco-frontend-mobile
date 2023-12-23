import { createSlice } from "@reduxjs/toolkit"
import { createWallet, deleteWallet, getAllWallets, updateWallet } from "./walletService"
import { WalletListI } from "./types"

const initialState: WalletListI = {
  loading: false,
  wallets: {
    data: [
      {
        _id: "",
        amount: 0,
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
        // console.log("balance === ", action.payload.result)
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
      // .addCase(createWallet.fulfilled, (state, action) => {
      //   console.log("action.payload.result === ", action.payload.result)
      //   state.loading = false
      //   state.wallets = {
      //     ...state.wallets,
      //     data: state.wallets.data.map((item) => {
      //       if (item._id === action.payload.result._id) {
      //         return action.payload.result
      //       } else {
      //         return item
      //       }
      //     }),
      //   }
      // })
      .addCase(createWallet.fulfilled, (state, action) => {
        state.loading = false
        const existingWallet = state.wallets.data.find(
          (item) => item._id === action.payload.result._id,
        )
        if (existingWallet) {
          state.wallets = {
            ...state.wallets,
            data: state.wallets.data.map((item) => {
              if (item._id === action.payload.result._id) {
                return {
                  ...item,
                  amount: item.amount + parseInt(action.payload.result.amount),
                }
              } else {
                return item
              }
            }),
          }
        } else {
          state.wallets = {
            ...state.wallets,
            data: [...state.wallets.data, action.payload.result],
          }
        }
      })

      .addCase(createWallet.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      .addCase(updateWallet.pending, (state) => {
        state.loading = true
      })

      .addCase(updateWallet.fulfilled, (state, action) => {
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

      .addCase(updateWallet.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      .addCase(deleteWallet.pending, (state) => {
        state.loading = true
      })
      .addCase(deleteWallet.fulfilled, (state, action) => {
        state.loading = false
        const deletedWalletId = action.payload.result.wallet._id

        state.wallets = {
          ...state.wallets,
          data: state.wallets.data.filter((item) => item._id !== deletedWalletId),
        }
      })
      .addCase(deleteWallet.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export const {} = walletSlice.actions

export default walletSlice.reducer
