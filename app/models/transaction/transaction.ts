import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "../rootStore/helpers/withSetPropAction"
import { TransactionApi } from "../../services/api/transaction/transaction.api"
import { ResponseKind } from "app/services/api/MainService/apiProblem"

export const TransactionModel = types
  .model("TransactionStore")
  .props({
    isLoading: false,
  })
  .actions(withSetPropAction)
  .actions((self) => ({
    toggleIsLoading: (value: boolean) => {
      self.isLoading = value
    },
  }))
  .actions((store) => ({
    getCategories: async (page: number, perPage: number) => {
      store.toggleIsLoading(true)

      const transactionApi = new TransactionApi()
      const response = await transactionApi.getCategories(page, perPage)

      if (response.kind === ResponseKind.OK) {
        store.toggleIsLoading(false)
        return response.response.result
      } else {
        store.toggleIsLoading(false)
        console.log("Something went wrong!")
      }
    },
  }))
  .views((self) => ({
    get IsLoading() {
      return self.isLoading
    },
  }))

export interface TransactionStore extends Instance<typeof TransactionModel> {}
export interface TransactionStoreSnapshot extends SnapshotOut<typeof TransactionModel> {}
