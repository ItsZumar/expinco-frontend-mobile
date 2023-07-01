import { z } from "zod"

// Define the validation schema using Zod
const loginSchema = z.object({
  authEmail: z
    .string()
    .min(6, "Must be at least 6 characters")
    .email("Must be a valid email address"),
  username: z.string().min(4, "Username must be greater than 4"),
})

// Function to validate the data using the Zod schema
export const validateData = (data: { authEmail: string; username: string }) => {
  const errorObj: { authEmail: string; username: string } = {
    authEmail: null,
    username: null,
  }

  try {
    loginSchema.parse(data)
    return errorObj
  } catch (error) {
    // Convert the Zod error to a custom error object
    error.errors.forEach((err) => {
      const fieldName = err.path.join("Error")
      errorObj[fieldName] = err.message
    })

    return errorObj
  }
}
