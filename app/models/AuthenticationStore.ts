import { Instance, SnapshotOut, types } from "mobx-state-tree"

export const AuthenticationStoreModel = types
  .model("AuthenticationStore")
  .props({
    authToken: types.maybe(types.string),
    username: "",
    authEmail: "",
  })
  .views((store) => ({
    get isAuthenticated() {
      return !!store.authToken
    },
    get validationError() {
      let errorObj = {
        emailError: null,
        usernameError: null
      };

      if (store.authEmail.length === 0) {
        errorObj.emailError = "can't be blank"
      }
      if (store.authEmail.length < 6) {
        errorObj.emailError = "must be at least 6 characters"
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(store.authEmail)) {
        errorObj.emailError = "must be a valid email address";
      }

      if (store.username.length < 4) {
        errorObj.usernameError = "username must be greater than 4"
      }

      return errorObj;
    },
  }))
  .actions((store) => ({
    setAuthToken(value?: string) {
      store.authToken = value
    },
    setAuthEmail(value: string) {
      store.authEmail = value.replace(/ /g, "")
    },
    setUsername(value: string) {
      store.username = value
    },
    logout() {
      store.authToken = undefined
      store.authEmail = ""
    },
  }))

export interface AuthenticationStore extends Instance<typeof AuthenticationStoreModel> {}
export interface AuthenticationStoreSnapshot extends SnapshotOut<typeof AuthenticationStoreModel> {}

// @demo remove-file
