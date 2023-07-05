import { z } from "zod"

// Define the validation schema using Zod
const resetPassSchema = z.object({
  password: z.string().min(4, "Password is required"),
  confirmpassword: z.string().min(4, "Password is required"),
})
// .refine((data) => data.password === data.confirmpassword, {
//   message: "Passwords don't match",
//   path: ["confirmpassword"],
// })

type ErrorObj = Partial<{ password: string; confirmpassword: string }>

// Function to validate the data using the Zod schema
export const validateData = (data: ErrorObj) => {
  const errorObj: ErrorObj = {
    password: null,
    confirmpassword: null,
  }

  try {
    resetPassSchema.parse(data)
    return errorObj
  } catch (error) {
    // Convert the Zod error to a custom error object
    error.errors.forEach((err: any) => {
      const fieldName = err.path.join("Error")
      errorObj[fieldName as keyof ErrorObj] = err.message
    })

    return errorObj
  }
}
