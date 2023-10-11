export interface TodosStateI {
  loading: boolean
  data: TodosI[]
  error: string | undefined
}

export interface TodosI {
  userId: number
  id: number
  title: string
  body: string
}

export interface UserI {
  displayPicture: string | null
  firstname: string
  lastname: string
  email: string
  isEmailVerified: boolean
  _id: string
  createdAt: string
  updatedAt: string
}

export interface SignupResponseI {
  result: {
    token: string
    user: UserI
  }
  error: string
  stack: string
}

export interface AuthI {
  loading: boolean
  data: SignupResponseI["result"]
  error: string
  stack?: string
}

export interface SignupPayloadI {
  firstname: string
  lastname: string
  email: string
  password: string
}

export interface SigninResponseI {
  result: {
    token: string
    user: UserI
  }
  error: string
  stack: string
}

export interface SigninPayloadI {
  email: string
  password: string
}

export interface VerifyEmailPayloadI {
  email: string
  authCode: string
}

export interface VerifyEmailResponseI {
  result: {
    message: string
  }
  error: string
  stack: string
}

export interface UpdateUserPayloadI {
  displayPicture?: string | null
  firstname?: string
  lastname?: string
  email?: string
}

export interface UpdateUserResponseI {
  result: {
    user: UserI
  }
  error: string
  stack: string
}
