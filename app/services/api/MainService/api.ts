/**
 * This Api class lets you define an API endpoint and methods to request
 * data and process it.
 *
 * See the [Backend API Integration](https://github.com/infinitered/ignite/blob/master/docs/Backend-API-Integration.md)
 * documentation for more details.
 */
import { ApiResponse, ApisauceInstance, create } from "apisauce"
import { GeneralApiProblem, ResponseKind, getGeneralApiProblem } from "./apiProblem" // @demo remove-current-line
import { loadString } from "../../../utils/storage"
import Config from "../../../config"
import type { ApiConfig } from "./api.types"

/**
 * Configuring the apisauce instance.
 */
export const DEFAULT_API_CONFIG: ApiConfig = {
  url: Config.API_URL,
  timeout: 10000,
}

/**
 * Manages all requests to the API. You can use this class to build out
 * various requests that you need to call from your backend API.
 */
export class Api {
  apisauce: ApisauceInstance
  config: ApiConfig

  /**
   * Set up our API instance. Keep this lightweight!
   */
  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: "application/json",
      },
    })
  }

  /**
   * This function creates a header object containing all necessary things if required
   * before API Calling.
   * @param isLoggedIn
   * @param contentType
   * @returns
   */
  async getApiConfig(isLoggedIn: boolean, contentType?: string) {
    let accessToken = await loadString("user-jwt-token")
    
    let headers = {}
    if (isLoggedIn) {
      headers = {
        ...headers,
        Authorization: "Bearer " + accessToken,
      }
    }
    if (contentType) {
      headers = {
        ...headers,
        "Content-Type": contentType,
      }
    }

    return { headers }
  }

  async getResponse<T>(response: ApiResponse<T>): Promise<any> {
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }
    return { kind: ResponseKind.OK, response: response?.data }
  }
}

// Singleton instance of the API for convenience
export const api = new Api()
