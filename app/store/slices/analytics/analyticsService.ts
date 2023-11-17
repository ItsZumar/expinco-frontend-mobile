import { createAsyncThunk } from "@reduxjs/toolkit"
import { AxiosResponse } from "axios"
import { GetSpendFrequencyServiceI, SpendFrequencyPayloadI } from "./types"
import { api } from "app/services/api"
import axiosInstance from "../../../config/axios"

export const getSpendFrequencyService: any = createAsyncThunk(
  "analytics/spendFrequencyService",
  async (payload: SpendFrequencyPayloadI, { rejectWithValue }) => {
    try {
      let apiConfig = await api.getApiConfig(true)
      const response: AxiosResponse<GetSpendFrequencyServiceI> = await axiosInstance.get(
        `/analytics/list-spend-frequency?orderBy=${payload.orderBy}`,
        apiConfig,
      )

      return response.data
    } catch (response: any) {
      return rejectWithValue(response.data.error || "Something went wrong!")
    }
  },
)
