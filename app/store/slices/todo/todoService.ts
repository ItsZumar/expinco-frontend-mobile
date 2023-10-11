import { createAsyncThunk } from "@reduxjs/toolkit"
import axios, { AxiosResponse } from "axios"
import axiosInstance from "../../../config/axios"
import { TodosI } from "./todoReducer"

export function fetchCount(amount = 1) {
  return new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500),
  )
}

export const fetchTodos = createAsyncThunk<TodosI[], void, { rejectValue: string }>(
  "todos/fetchTodos",
  async (payload, thunkAPI) => {
    try {
      const response: AxiosResponse<TodosI[]> = await axiosInstance.get("/posts")
      return response.data
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        return thunkAPI.rejectWithValue(err.message)
      }
      throw err
    }
  },
)
