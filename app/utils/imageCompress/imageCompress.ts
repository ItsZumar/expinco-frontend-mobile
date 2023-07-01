import { Image } from "react-native-compressor"

/** This method return compressed image as string. */
export const ImageCompressor = async (uri: string) => {
  const result = await Image.compress(uri, {
    compressionMethod: "auto",
  })

  return result
}
