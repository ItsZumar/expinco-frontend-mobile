import { createAsyncThunk } from "@reduxjs/toolkit"
import { AxiosResponse } from "axios"
import {
  CreateTransactionI,
  CreateTransactionPayloadI,
  DeleteTransactionPayloadI,
  GetTransactionListI,
  GetTransactionsPayloadI,
  UpdateTransactionI,
  UpdateTransactionPayloadI,
} from "./types"
import axiosInstance from "../../../config/axios"
import { api } from "app/services/api"
import { showMessage } from "react-native-flash-message"

export const getAllTransactions: any = createAsyncThunk(
  "transaction/getAllTransactions",
  async (payload: GetTransactionsPayloadI, { rejectWithValue }) => {
    try {
      let apiConfig = await api.getApiConfig(true)
      if (payload) {
        const response: AxiosResponse<GetTransactionListI> = await axiosInstance.get(
          `/transaction/list?type=${payload.type}&sortTransactionBy=${payload.sortTransactionBy}&category=${payload.category}`,
          apiConfig,
        )

        return response.data
      } else {
        const response: AxiosResponse<GetTransactionListI> = await axiosInstance.get(
          `/transaction/list`,
          apiConfig,
        )
        return response.data
      }
    } catch (response: any) {
      return rejectWithValue(response.data.error || "Something went wrong!")
    }
  },
)

export const getAllRecentTransactions: any = createAsyncThunk(
  "transaction/getAllRecentTransactions",
  async (payload: any, { rejectWithValue }) => {
    try {
      let apiConfig = await api.getApiConfig(true)

      if (payload) {
        const response: AxiosResponse<GetTransactionListI> = await axiosInstance.get(
          `/transaction/list?page=${payload.page}&perPage=${payload.perPage}`,
          apiConfig,
        )
        return response.data
      } else {
        const response: AxiosResponse<GetTransactionListI> = await axiosInstance.get(
          `/transaction/list`,
          apiConfig,
        )
        return response.data
      }
    } catch (response: any) {
      return rejectWithValue(response.data.error || "Something went wrong!")
    }
  },
)

export const getTransactionsByMonth: any = createAsyncThunk(
  "transaction/getTransactionsByMonth",
  async (payload: any, { rejectWithValue }) => {
    try {
      let apiConfig = await api.getApiConfig(true)

      const response: AxiosResponse<GetTransactionListI> = await axiosInstance.get(
        `/transaction/list?month=${payload.month}`,
        apiConfig,
      )

      console.log("res by month === ", response.data.result.data)
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

      showMessage({
        type: "success",
        message: "Transaction has been created successfully",
      })

      return response.data
    } catch (response: any) {
      showMessage({
        type: "danger",
        message: `Error: ${response.data.error}`,
      })
      return rejectWithValue(response.data.error || "Something went wrong!")
    }
  },
)

export const updateTransaction: any = createAsyncThunk(
  "transaction/updateTransaction",
  async (payload: UpdateTransactionPayloadI, { rejectWithValue }) => {
    try {
      let apiConfig = await api.getApiConfig(true)
      const response: AxiosResponse<UpdateTransactionI> = await axiosInstance.patch(
        `/transaction/update-transaction/${payload.id}`,
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

      showMessage({
        type: "success",
        message: "Transaction has been updated successfully",
      })
      return response.data
    } catch (response: any) {
      showMessage({
        type: "danger",
        message: `Error: ${response.data.error}`,
      })
      return rejectWithValue(response.data.error || "Something went wrong!")
    }
  },
)

export const deleteTransaction: any = createAsyncThunk(
  "transaction/deleteTransaction",
  async (payload: DeleteTransactionPayloadI, { rejectWithValue }) => {
    try {
      console.log("paylo === ", payload.transactionId)
      let apiConfig = await api.getApiConfig(true)
      const response: AxiosResponse<any> = await axiosInstance.delete(
        `/transaction/delete-transaction/${payload.transactionId}`,
        apiConfig,
      )

      console.log("res === ", response.data)

      showMessage({
        type: "success",
        message: "Transaction has been deleted successfully",
      })

      return response.data
    } catch (response: any) {
      showMessage({
        type: "danger",
        message: `Error: ${response.data.error}`,
      })
      return rejectWithValue(response.data.error || "Something went wrong!")
    }
  },
)
