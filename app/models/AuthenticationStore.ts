import { validateData } from "../validations/loginSchema"
import { Instance, SnapshotOut, types } from "mobx-state-tree"

export const AuthenticationStoreModel = types
  .model("AuthenticationStore")
  .props({
    authToken: types.maybe(types.string),
    email: "",
    password: "",
  })
  .views((store) => ({
    get isAuthenticated() {
      return !!store.authToken
    },
    get validationError() {
      let errors = validateData({ email: store.email, password: store.password })
      return errors;
    },
  }))
  .actions((store) => ({
    setEmail(value: string) {
      store.email = value.replace(/ /g, "")
    },
    setPassword(value: string) {
      store.password = value
    },
    logout() {
      store.email = ""
      store.password = ""
    },
  }))

export interface AuthenticationStore extends Instance<typeof AuthenticationStoreModel> {}
export interface AuthenticationStoreSnapshot extends SnapshotOut<typeof AuthenticationStoreModel> {}

// @demo remove-file
