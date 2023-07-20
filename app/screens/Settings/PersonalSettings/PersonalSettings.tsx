import React, { FC } from "react"
import { ScrollView, TouchableOpacity, View } from "react-native"
import { colors, shadow } from "app/theme"
import { ScreensEnum } from "app/enums"
import { hp, wp } from "app/utils/responsive"
import { observer } from "mobx-react-lite"
import { Text, Header, TextField, AutoImage, Button } from "app/components"
import { AppStackScreenProps } from "app/navigators"
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from "./styles"

export const PersonalSettingScreen: FC<AppStackScreenProps<ScreensEnum.PERSONAL_SETTINGS>> =
  observer(({ navigation }) => {
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
            value={"Haseeb"}
            onChangeText={() => {}}
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
            value={"Ahmed"}
            onChangeText={() => {}}
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
            value={"haseebhowto@gmail.com"}
            onChangeText={() => {}}
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
          <Button text="Save" preset="filled" style={{ position: "absolute", bottom: 20 }} />
        </View>
      </View>
    )
  })
