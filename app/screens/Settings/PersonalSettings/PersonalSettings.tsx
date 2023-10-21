import React, { FC, useState } from "react"
import { ScrollView, TouchableOpacity, View } from "react-native"
import { colors } from "app/theme"
import { ScreensEnum } from "app/enums"
import { wp } from "app/utils/responsive"
import { Header, TextField, AutoImage, Button } from "app/components"
import { AppStackScreenProps } from "app/navigators"
import { RootState, useAppDispatch, useAppSelector } from "app/store/store"
import { UserI } from "app/store/slices/auth/types"
import { updateUserService } from "app/store/slices/auth/authService"
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from "./styles"

export const PersonalSettingScreen: FC<AppStackScreenProps<ScreensEnum.PERSONAL_SETTINGS>> = ({
  navigation,
}) => {
  const dispatch = useAppDispatch()
  const { user, loading, error } = useAppSelector((state: RootState) => state.auth)
  const [updateUser, setUpdateUser] = useState<UserI>(user.user)

  const updateProfile = () => {
    console.log(updateUser)
    updateUser.displayPicture = ""
    dispatch(updateUserService(updateUser))
      .unwrap()
      .then((response: any) => navigation.goBack())
      .catch((err: Error) => console.log("error", err))
  }

  return (
    <View style={styles.root}>
      <Header title="Edit Profile" leftIcon="back" onLeftPress={() => navigation.goBack()} />

      <ScrollView style={{ paddingHorizontal: wp(5), paddingTop: 20 }}>
        <View style={styles.profilePicContainer}>
          <View style={styles.profilePicBlock}>
            <AutoImage source={{ uri: "https://picsum.photos/302" }} style={styles.profilePic} />
          </View>
          <TouchableOpacity style={styles.uploadPicBtn}>
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
          // helper={error?.firstname}
          // status={error?.firstname ? "error" : undefined}
          // onSubmitEditing={() => passwordInput.current?.focus()}
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
          // helper={error?.firstname}
          // status={error?.firstname ? "error" : undefined}
          // onSubmitEditing={() => passwordInput.current?.focus()}
        />
        <TextField
          value={updateUser.email}
          onChangeText={(text) => setUpdateUser({ ...updateUser, email: text })}
          containerStyle={styles.textField}
          autoCapitalize="none"
          autoComplete="name"
          autoCorrect={false}
          labelTx="common.email"
          placeholder=""
          // helper={error?.firstname}
          // status={error?.firstname ? "error" : undefined}
          // onSubmitEditing={() => passwordInput.current?.focus()}
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
    </View>
  )
}
