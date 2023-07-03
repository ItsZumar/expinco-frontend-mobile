import { z } from "zod"

// Define the validation schema using Zod
const signupSchema = z.object({
  firstname: z.string().min(2, "Firstname is required"),
  lastname: z.string().min(2, "Lastname is required"),
  email: z.string().email("Enter a valid email").min(5, "Email is required"),
  password: z.string().min(4, "Password is required"),
})

type ErrorObj = Partial<{ firstname: string, lastname: string, email: string; password: string }>

// Function to validate the data using the Zod schema
export const validateData = (data: ErrorObj) => {
  const errorObj: ErrorObj = {
    firstname: null,
    lastname: null,
    email: null,
    password: null,
  }

  try {
    signupSchema.parse(data)
    return errorObj
  } catch (error) {
    error.errors.forEach((err: any) => {
      let fieldName = err.path.join("Error")
      errorObj[fieldName as keyof ErrorObj] = err.message
    })
    return errorObj
  }
}
