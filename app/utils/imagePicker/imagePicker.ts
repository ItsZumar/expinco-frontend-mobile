import {
  ImageLibraryOptions,
  launchImageLibrary,
  launchCamera,
  CameraOptions,
  ImagePickerResponse,
} from "react-native-image-picker"

export const ImagePicker = async (option?: ImageLibraryOptions): Promise<ImagePickerResponse> => {
  const result = await launchImageLibrary({
    mediaType: "photo",
    ...option,
  })

  return result
}

export const ImageCaptureAndPicker = async (option?: CameraOptions): Promise<ImagePickerResponse> => {
  const result = await launchCamera({
    mediaType: "photo",
    ...option
  })

  return result
}
