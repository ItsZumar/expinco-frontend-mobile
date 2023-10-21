import { configureStore, ThunkAction, Action, combineReducers } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { persistReducer, persistStore } from "redux-persist"
import AsyncStorage from "@react-native-async-storage/async-storage"
import authReducer from "./slices/auth/authReducer"
import thunk from "redux-thunk"
import categoryReducer from "./slices/categoy/categoryReducer"
import walletReducer from "./slices/wallet/walletReducer"
import transactionReducer from "./slices/transaction/transactionReducer"
import analyticsReducer from "./slices/analytics/analyticsReducer"

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
}

const rootReducer = combineReducers({
  auth: authReducer,
  category: categoryReducer,
  wallet: walletReducer,
  transaction: transactionReducer,
  spendFrequency: analyticsReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
})

export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
