import { createAsyncThunk } from "@reduxjs/toolkit"
import { AxiosResponse } from "axios"
import { GetCategoryListI, GetCategoryListPayloadI } from "./types"
import axiosInstance from "../../../config/axios"

export const getCategoryList: any = createAsyncThunk(
  "category/getCategoryList",
  async (payload: GetCategoryListPayloadI, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<GetCategoryListI> = await axiosInstance.get(`/category/list`)

      return response.data
    } catch (response: any) {
      return rejectWithValue(response.data.error || "Something went wrong!")
    }
  },
)
