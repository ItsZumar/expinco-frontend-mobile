import { z } from "zod"

// Define the validation schema using Zod
const loginSchema = z.object({
  email: z
    .string()
    .email("Enter a valid email")
    .min(5, "Email is required"),
})

type ErrorObj = Partial<{ email: string }>;

// Function to validate the data using the Zod schema
export const validateData = (data: ErrorObj) => {
  const errorObj: ErrorObj = {
    email: null,
  }

  try {
    loginSchema.parse(data)
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
