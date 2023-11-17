import React, { FC, useState } from "react"
import { ScrollView, TouchableOpacity, View } from "react-native"
import { wp } from "app/utils/responsive"
import { UserI } from "app/store/slices/auth/types"
import { colors } from "app/theme"
import { ScreensEnum } from "app/enums"
import { AppStackScreenProps } from "app/navigators"
import { Header, TextField, AutoImage, Button, AlertBox } from "app/components"
import { RootState, useAppDispatch, useAppSelector } from "app/store/store"
import { updateUserService } from "app/store/slices/auth/authService"
import { launchImageLibrary } from "react-native-image-picker"
import { uploadImageToCloudinary } from "app/utils/uploadImage"
import { validateEditProfileData } from "../../../validations/editProfileSchema"
import imagePrev from "../../../../images/no-image.jpg"
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from "./styles"

export const PersonalSettingScreen: FC<AppStackScreenProps<ScreensEnum.PERSONAL_SETTINGS>> = ({
  navigation,
}) => {
  const dispatch = useAppDispatch()
  const { user } = useAppSelector((state: RootState) => state.auth)
  const [updateUser, setUpdateUser] = useState<UserI>(user.user)
  const [profileImage, setProfileImage] = useState<any>({ uri: user?.user?.displayPicture })
  const [imageUpload, setImageUpload] = useState<boolean>(false)
  const [alertModalVisible, setAlertModalVisible] = useState<boolean>(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const [validationErrors, setValidationErrors] = useState<any>({
    firstname: "",
    lastname: "",
    email: "",
  })

  const handleValidation = () => {
    const dataToValidate = {
      firstname: updateUser.firstname,
      lastname: updateUser.lastname,
      email: updateUser.email,
    }

    const errors = validateEditProfileData(dataToValidate)

    setValidationErrors(errors)
  }

  const updateProfile = async () => {
    handleValidation()

    if (Object.values(validationErrors).every((error) => !error)) {
      if (imageUpload) {
        await uploadImageToCloudinary(selectedImage)
        updateUser.displayPicture = profileImage.uri
      }
      await dispatch(updateUserService(updateUser))
    }
    setAlertModalVisible((prev) => !prev)
  }

  const uploadProfileImage = async () => {
    let result = await launchImageLibrary({
      mediaType: "photo",
    })

    if (result?.assets) {
      const selectedImageUri = result.assets[0].uri
      setSelectedImage(result.assets[0])
      setImageUpload(true)
      setProfileImage({ uri: selectedImageUri })
    }
  }

  const onCloseAlertBoxPress = () => {
    setAlertModalVisible((prev) => !prev)
    navigation.navigate(ScreensEnum.PROFILE)
  }

  return (
    <View style={styles.root}>
      <Header title="Edit Profile" leftIcon="back" onLeftPress={() => navigation.goBack()} />

      <ScrollView style={{ paddingHorizontal: wp(5), paddingTop: 20 }}>
        <View style={styles.profilePicContainer}>
          <View style={styles.profilePicBlock}>
            <AutoImage
              source={profileImage?.uri != null ? profileImage : imagePrev}
              style={styles.profilePic}
            />
          </View>
          <TouchableOpacity style={styles.uploadPicBtn} onPress={uploadProfileImage}>
            <Ionicons name="cloud-upload-outline" color={colors.palette.neutral100} size={15} />
          </TouchableOpacity>
        </View>

        <TextField
          value={updateUser.firstname}
          onChangeText={(text) => setUpdateUser({ ...updateUser, firstname: text })}
          containerStyle={styles.textField}
          autoCapitalize="none"
          autoComplete="name"
          autoCorrect={false}
          labelTx="common.firstname"
          placeholderTx="signupScreen.enterfirstname"
          helper={validationErrors?.firstname}
          status={validationErrors?.firstname ? "error" : undefined}
        />
        <TextField
          value={updateUser.lastname}
          onChangeText={(text) => setUpdateUser({ ...updateUser, lastname: text })}
          containerStyle={styles.textField}
          autoCapitalize="none"
          autoComplete="name"
          autoCorrect={false}
          labelTx="common.lastname"
          placeholderTx="signupScreen.enterlastname"
          helper={validationErrors?.lastname}
          status={validationErrors?.lastname ? "error" : undefined}
        />
        <TextField
          value={updateUser.email}
          onChangeText={(text) => setUpdateUser({ ...updateUser, email: text })}
          containerStyle={styles.textField}
          autoCapitalize="none"
          autoComplete="name"
          autoCorrect={false}
          labelTx="common.email"
          placeholder="Email"
          helper={validationErrors?.email}
          status={validationErrors?.email ? "error" : undefined}
        />
      </ScrollView>

      <View style={{ paddingHorizontal: wp(5) }}>
        <Button
          text="Save"
          preset="filled"
          style={{ position: "absolute", bottom: 20 }}
          onPress={updateProfile}
        />
      </View>

      <AlertBox
        checkIcon={true}
        open={alertModalVisible}
        type="success"
        description="User has been successfully updated"
        onClose={onCloseAlertBoxPress}
        title={""}
      />
    </View>
  )
}
