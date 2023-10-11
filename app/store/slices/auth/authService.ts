import { createAsyncThunk } from "@reduxjs/toolkit"
import axios, { AxiosResponse } from "axios"
import axiosInstance from "../../../config/axios"
import {
  SignupResponseI,
  SignupPayloadI,
  SigninResponseI,
  SigninPayloadI,
  VerifyEmailPayloadI,
  VerifyEmailResponseI,
  UpdateUserPayloadI,
  UpdateUserResponseI,
} from "./types"
import { STORAGE_KEYS, saveString } from "app/utils/storage"
import { api } from "app/services/api"

export const signupService: any = createAsyncThunk(
  "auth/signup",
  async (payload: SignupPayloadI, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<SignupResponseI> = await axiosInstance.post(
        `/v1/user/auth/email-signup`,
        {
          firstname: payload.firstname,
          lastname: payload.lastname,
          email: payload.email,
          password: payload.password,
        },
      )

      if (response?.data?.result?.token) {
        saveString(STORAGE_KEYS.USER_TOKEN, response.data.result.token)
      }

      return response.data
    } catch (response: any) {
      return rejectWithValue(response.data.error || "Something went wrong!")
    }
  },
)

export const signinService: any = createAsyncThunk(
  "auth/signin",
  async (payload: SigninPayloadI, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<SigninResponseI> = await axiosInstance.post(
        `/v1/user/auth/email-signin`,
        {
          email: payload.email,
          password: payload.password,
        },
      )

      const { result } = response.data
      await saveString(STORAGE_KEYS.USER_TOKEN, result.token)
      return response.data
    } catch (response: any) {
      return rejectWithValue(response.data.error || "Something went wrong!")
    }
  },
)

export const verifyEmailService: any = createAsyncThunk(
  "auth/verifyOTP",
  async (payload: VerifyEmailPayloadI, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<VerifyEmailResponseI> = await axiosInstance.post(
        "/v1/user/auth/verify-email",
        { email: payload.email, authCode: payload.authCode },
      )
      return response.data
    } catch (response: any) {
      return rejectWithValue(response.data.error || "Something went wrong!")
    }
  },
)

export const updateUserService: any = createAsyncThunk(
  "auth/updateUser",
  async (payload: UpdateUserPayloadI, { rejectWithValue }) => {
    try {
      let apiConfig = await api.getApiConfig(true)
      const response: AxiosResponse<UpdateUserResponseI> = await axiosInstance.patch(
        "/v1/user/auth/update-profile",
        {
          firstname: payload.firstname,
          lastname: payload.lastname,
          email: payload.email,
          displayPicture: payload.displayPicture,
        },

        apiConfig,
      )

      console.log("response === ", response.data.result.user)
      return response.data
    } catch (response: any) {
      return rejectWithValue(response.data.error || "Something went wrong!")
    }
  },
)
