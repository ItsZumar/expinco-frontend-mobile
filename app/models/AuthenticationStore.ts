import { validateData as LoginDataValidator } from "../validations/loginSchema"
import { validateData as SignupDataValidator } from "app/validations/signupSchema"
import { Instance, SnapshotOut, types } from "mobx-state-tree"

export const AuthenticationStoreModel = types
  .model("AuthenticationStore")
  .props({
    authToken: types.maybe(types.string),

    firstname: "",
    lastname: "",
    email: "",
    password: "",
  })
  .views((store) => ({
    get isAuthenticated() {
      return !!store.authToken
    },
    get validationError() {
      let errors = LoginDataValidator({ email: store.email, password: store.password })
      return errors;
    },
    get validateSignupErrors() {
      let errors = SignupDataValidator({ firstname: store.firstname, lastname: store.lastname, email: store.email, password: store.password })
      return errors;
    }
  }))
  .actions((store) => ({
    setFirstName(value: string) {
      store.firstname = value
    },
    setLastName(value: string) {
      store.lastname = value
    },

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
