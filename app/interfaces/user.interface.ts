export interface UserI {
  _id: string
  displayPicture: string | null
  firstname: string
  lastname: string
  email: string
  password: string
  isEmailVerified: boolean
  authCode: string
}
