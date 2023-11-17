import { createAsyncThunk } from "@reduxjs/toolkit"
import { AxiosResponse } from "axios"
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
  ResendAuthCodePayloadI,
} from "./types"
import { STORAGE_KEYS, saveString } from "app/utils/storage"
import { api } from "app/services/api"
import { showMessage } from "react-native-flash-message"

export const signupService: any = createAsyncThunk(
  "auth/signup",
  async (payload: SignupPayloadI, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<SignupResponseI> = await axiosInstance.post(
        `/user/auth/email-signup`,
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

      showMessage({
        type: "success",
        message: "Signup Successfully now Verify!",
      })

      return response.data
    } catch (response: any) {
      showMessage({
        type: "success",
        message: "error occured in signup!",
      })
      return rejectWithValue(response.data.error || "Something went wrong!")
    }
  },
)

export const signinService: any = createAsyncThunk(
  "auth/signin",
  async (payload: SigninPayloadI, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<SigninResponseI> = await axiosInstance.post(
        `/user/auth/email-signin`,
        {
          email: payload.email,
          password: payload.password,
        },
      )

      const { result } = response.data
      await saveString(STORAGE_KEYS.USER_TOKEN, result.token)

      showMessage({
        type: "success",
        message: "Login Successfully!",
      })

      return response.data
    } catch (response: any) {
      showMessage({
        type: "danger",
        message: "error occured in logging in!",
        style: { marginBottom: 20 },
      })

      return rejectWithValue(response.data.error || "Something went wrong!")
    }
  },
)

export const verifyEmailService: any = createAsyncThunk(
  "auth/verifyOTP",
  async (payload: VerifyEmailPayloadI, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<VerifyEmailResponseI> = await axiosInstance.post(
        "/user/auth/verify-email",
        { email: payload.email, authCode: payload.authCode },
      )

      showMessage({
        type: "success",
        message: "Successfully Verified!",
      })

      return response.data
    } catch (response: any) {
      showMessage({
        type: "danger",
        message: "error occur in Verification",
      })
      return rejectWithValue(response.data.error || "Something went wrong!")
    }
  },
)

export const resendOtpCode: any = createAsyncThunk(
  "auth/resendOtpCode",
  async (payload: ResendAuthCodePayloadI, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<VerifyEmailResponseI> = await axiosInstance.post(
        "/user/auth/resend-verify-email",
        {
          email: payload.email,
        },
      )

      showMessage({
        type: "success",
        message: "Successfully send OTP!",
      })

      return response.data
    } catch (response: any) {
      showMessage({
        type: "danger",
        message: "error occur in sending OTP",
      })
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
        "/user/auth/update-profile",
        {
          firstname: payload.firstname,
          lastname: payload.lastname,
          email: payload.email,
          displayPicture: payload.displayPicture,
        },

        apiConfig,
      )

      return response.data
    } catch (response: any) {
      return rejectWithValue(response.data.error || "Something went wrong!")
    }
  },
)
