import axiosInstance from "app/config/axios"
import RNFetchBlob from "rn-fetch-blob"

export const uploadImageToCloudinary = async (imageUri: string) => {
  try {
    const imageData = await RNFetchBlob.fs.readFile(imageUri, "base64")

    const formData = new FormData()
    formData.append("file", imageData)

    const response = await axiosInstance.post(`/file/upload-file`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })

    console.log("res === ", response.data)

    return response.data.secure_url || null
  } catch (error) {
    console.error("Error uploading the image to Cloudinary:", error.message)
    return null
  }
}
