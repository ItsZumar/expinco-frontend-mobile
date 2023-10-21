import { createSlice } from "@reduxjs/toolkit"
import { SpendFrequencyServiceI } from "./types"
import { getSpendFrequencyService } from "./analyticsService"

const initialState: SpendFrequencyServiceI = {
  loading: false,
  spendFrequency: null,
  error: null,
}

export const analyticsSlice = createSlice({
  name: "analytics",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getSpendFrequencyService.pending, (state) => {
        state.loading = true
      })
      .addCase(getSpendFrequencyService.fulfilled, (state, action) => {
        state.loading = false
        state.spendFrequency = action.payload.result
      })
      .addCase(getSpendFrequencyService.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export const {} = analyticsSlice.actions

export default analyticsSlice.reducer
