import config from "../../../config"
import { ApiResponse } from "apisauce"
import { Api } from "../MainService/api"
import { CategoriesI, CategoriesReponse } from "./transaction.types"

export class TransactionApi {
  private api: Api

  async getCategories(page: number, perPage: number): Promise<CategoriesReponse> {
    try {
      // let apiConfig = await this.api.getApiConfig(true)
      // const response: ApiResponse<CategoriesI> = await this.api.apisauce.get(
      //   `${config.API_URL}/category/content-creator?page=1&perPage=100`,
      //   undefined,
      //   apiConfig,
      // )

      // let data = await this.api.getResponse(response)
      return data
    } catch (e) {
      // logger(e.message)
      console.log("error")
    }
  }
}
