import axiosInstance from "app/config/axios"

export const uploadImageToCloudinary = async (selectedImage: any): Promise<any> => {
  try {
    const formData = new FormData()
    formData.append("file", {
      uri: selectedImage.uri,
      type: selectedImage.type,
      name: "file",
    } as unknown as Blob)

    const uploadResponse = await axiosInstance.post("/file/upload-file", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    return uploadResponse.data.result.newFileStorage
  } catch (error) {
    console.error("File upload error:", error)
    throw error
  }
}

export const removeImageToCloudinary = async (publicId: any): Promise<any> => {
  try {
    const removeImageResponse = await axiosInstance.post(`/file/delete-file/${publicId}`)
    console.log("delete File response:", removeImageResponse.data.result.newFileStorage)
    return removeImageResponse.data.result.newFileStorage
  } catch (error) {
    console.error("File upload error:", error)
    throw error
  }
}
