import { TransactionCategoryI } from "app/interfaces"
import { GeneralApiProblem, ResponseKind } from "../MainService/apiProblem"

export type CategoriesI = {
  result: {
    data: TransactionCategoryI[]
  }
  errors: string[]
  errorDetails: string | null
  stack: string | null
}

export type CategoriesReponse = { kind: ResponseKind.OK; response: CategoriesI } | GeneralApiProblem
