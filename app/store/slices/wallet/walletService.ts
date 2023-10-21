import { createAsyncThunk } from "@reduxjs/toolkit"
import { AxiosResponse } from "axios"
import { CreateWalletI, GetWalletListI, PayloadCreateWalletI } from "./types"
import axiosInstance from "../../../config/axios"
import { api } from "app/services/api"

export const getAllWallets: any = createAsyncThunk(
  "wallet/getAllWallets",
  async (_, { rejectWithValue }) => {
    try {
      let apiConfig = await api.getApiConfig(true)

      const response: AxiosResponse<GetWalletListI> = await axiosInstance.get(
        `/wallet/list-wallet`,
        apiConfig,
      )

      return response.data
    } catch (response: any) {
      return rejectWithValue(response.data.error || "Something went wrong!")
    }
  },
)

export const createWallet: any = createAsyncThunk(
  "wallet/createWallet",
  async (payload: PayloadCreateWalletI, { rejectWithValue }) => {
    try {
      let apiConfig = await api.getApiConfig(true)
      const response: AxiosResponse<CreateWalletI> = await axiosInstance.post(
        `/wallet/add-wallet`,
        {
          name: payload.name,
          amount: payload.amount,
        },
        apiConfig,
      )

      return response.data
    } catch (response: any) {
      return rejectWithValue(response.data.error || "Something went wrong!")
    }
  },
)
