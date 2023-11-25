import { createAsyncThunk } from "@reduxjs/toolkit"
import { AxiosResponse } from "axios"
import {
  CreateWalletI,
  GetWalletListI,
  PayloadCreateWalletI,
  PayloadDeleteWalletI,
  PayloadEditWalletI,
  UpdateWalletI,
} from "./types"
import axiosInstance from "../../../config/axios"
import { api } from "app/services/api"
import { showMessage } from "react-native-flash-message"

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
          icon: payload.icon,
        },
        apiConfig,
      )
      showMessage({
        type: "success",
        message: "Wallet has been created Successfully!",
      })
      return response.data
    } catch (response: any) {
      showMessage({
        type: "danger",
        message: "Error occur in creating wallet!",
      })
      return rejectWithValue(response.data.error || "Something went wrong!")
    }
  },
)

export const updateWallet: any = createAsyncThunk(
  "wallet/updateWallet",
  async (payload: PayloadEditWalletI, { rejectWithValue }) => {
    try {
      console.log("payload === ", payload)

      let apiConfig = await api.getApiConfig(true)
      const response: AxiosResponse<UpdateWalletI> = await axiosInstance.patch(
        `/wallet/update-wallet/${payload.id}`,
        {
          // name: payload.amount,
          amount: payload.amount,
        },
        apiConfig,
      )
      showMessage({
        type: "success",
        message: "Wallet has been updated Successfully!",
      })
      return response.data
    } catch (response: any) {
      showMessage({
        type: "danger",
        message: "Error occur in updating wallet!",
      })
      return rejectWithValue(response.data.error || "Something went wrong!")
    }
  },
)

export const deleteWallet: any = createAsyncThunk(
  "wallet/deleteWallet",
  async (payload: PayloadDeleteWalletI, { rejectWithValue }) => {
    try {
      let apiConfig = await api.getApiConfig(true)
      const response: AxiosResponse<any> = await axiosInstance.delete(
        `/wallet/delete-wallet/${payload.id}`,
        apiConfig,
      )
      showMessage({
        type: "success",
        message: "Wallet has been deleted Successfully!",
      })
      return response.data
    } catch (response: any) {
      showMessage({
        type: "danger",
        message: "Error occur in deleting wallet!",
      })
      return rejectWithValue(response.data.error || "Something went wrong!")
    }
  },
)
