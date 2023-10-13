import { createSlice } from "@reduxjs/toolkit"
import { getCategoryList } from "./categoryService"
import { CategoryListI } from "./types"

const initialState: CategoryListI = {
  loading: false,
  categories: null,
  error: null,
}

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getCategoryList.pending, (state) => {
        state.loading = true
      })
      .addCase(getCategoryList.fulfilled, (state, action) => {
        state.loading = false
        state.categories = action.payload.result
      })
      .addCase(getCategoryList.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
  },
})

export const {} = categorySlice.actions

export default categorySlice.reducer
