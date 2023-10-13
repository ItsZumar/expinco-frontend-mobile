import { createAsyncThunk } from "@reduxjs/toolkit"
import { AxiosResponse } from "axios"
import { CreateTransactionI, CreateTransactionPayloadI, GetTransactionListI } from "./types"
import axiosInstance from "../../../config/axios"
import { api } from "app/services/api"

export const getAllTransactions: any = createAsyncThunk(
  "transaction/getAllTransactions",
  async (payload: any, { rejectWithValue }) => {
    try {
      let apiConfig = await api.getApiConfig(true)
      const response: AxiosResponse<GetTransactionListI> = await axiosInstance.get(
        `/transaction/list`,
        apiConfig,
      )

      return response.data
    } catch (response: any) {
      return rejectWithValue(response.data.error || "Something went wrong!")
    }
  },
)

export const createTransaction: any = createAsyncThunk(
  "transaction/createTransaction",
  async (payload: CreateTransactionPayloadI, { rejectWithValue }) => {
    try {
      let apiConfig = await api.getApiConfig(true)
      const response: AxiosResponse<CreateTransactionI> = await axiosInstance.post(
        `/transaction/create-transaction`,
        {
          type: payload.type,
          amount: payload.amount,
          category: payload.category,
          description: payload.description,
          wallet: payload.wallet,
          attachments: payload.attachments,
        },
        apiConfig,
      )

      console.log("res == ", response.data)

      return response.data
    } catch (response: any) {
      return rejectWithValue(response.data.error || "Something went wrong!")
    }
  },
)