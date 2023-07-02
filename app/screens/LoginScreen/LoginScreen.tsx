import React, { FC, useMemo, useRef, useState } from "react"
import { observer } from "mobx-react-lite"
import { Pressable, TextInput, TouchableOpacity, View, ViewStyle } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AppStackScreenProps } from "app/navigators"
import { Button, Icon, Screen, Text, TextField, TextFieldAccessoryProps } from "app/components"
import { ScreensEnum } from "app/enums"
import { colors, spacing } from "app/theme"
import { useStores } from "app/models"
import { useFieldErrorHandler } from "app/hooks/useFieldErrorHandler"
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from "./styles"

interface SignInScreenProps
  extends NativeStackScreenProps<AppStackScreenProps<ScreensEnum.SIGNIN>> {}

export const SignInScreen: FC<SignInScreenProps> = observer(({ navigation }) => {
  const { authenticationStore: { email, password, setEmail, setPassword, validationError } } = useStores()

  const authPasswordInput = useRef<TextInput>()

  const [isAuthPasswordHidden, setIsAuthPasswordHidden] = useState<boolean>(true)
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  const { formHavingError } = useFieldErrorHandler(validationError)
  const error = isSubmitted ? validationError : null


  const PasswordRightAccessory = useMemo(
    () =>
      function PasswordRightAccessory(props: TextFieldAccessoryProps) {
        return (
          <Icon
            icon={isAuthPasswordHidden ? "view" : "hidden"}
            color={colors.palette.neutral500}
            containerStyle={{ ...props.style, marginRight: 20 }}
            size={20}
            onPress={() => setIsAuthPasswordHidden(!isAuthPasswordHidden)}
          />
        )
      },
    [isAuthPasswordHidden],
  )

  const login = () => {
    setIsSubmitted(true)

    if (formHavingError) return

    setIsSubmitted(false)
    setPassword("")
    setEmail("")
  }

  return (
    <Screen style={$root} preset="scroll" safeAreaEdges={["top"]}>
      <View style={{ paddingHorizontal: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <TouchableOpacity style={styles.headerBackBtn}>
            <Ionicons name="arrow-back" size={30} color={"black"} />
          </TouchableOpacity>

          <Text tx="signinScreen.signin" preset="title" />

          <Pressable style={styles.headerForwardBtn}>
            <Ionicons name="arrow-forward" size={30} color={"black"} />
          </Pressable>
        </View>

        <View style={{ marginTop: 60 }}>
          <TextField
            value={email}
            onChangeText={setEmail}
            containerStyle={$textField}
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect={false}
            keyboardType="email-address"
            labelTx="common.email"
            placeholderTx="signinScreen.enterEmail"
            helper={error?.email}
            status={error?.email ? "error" : undefined}
            onSubmitEditing={() => authPasswordInput.current?.focus()}
          />

          <TextField
            ref={authPasswordInput}
            value={password}
            onChangeText={setPassword}
            containerStyle={$textField}
            autoCapitalize="none"
            autoComplete="password"
            autoCorrect={false}
            secureTextEntry={isAuthPasswordHidden}
            labelTx="common.password"
            placeholderTx="signinScreen.enterPass"
            onSubmitEditing={login}
            RightAccessory={PasswordRightAccessory}
            helper={error?.password}
            status={error?.password ? "error" : undefined}
          />

          <Button
            tx="common.login"
            style={$tapButton}
            preset="filled"
            onPress={login}
          />
        </View>

        <TouchableOpacity style={styles.forgetpassBlock}>
          <Text tx="signinScreen.forgotPass" preset="bold" style={styles.forgetPassText} />
        </TouchableOpacity>

        <View
          style={{
            alignSelf: "center",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Text tx="signinScreen.donthaveaccount" style={{ color: colors.textDim, marginRight: 5 }} />
          <TouchableOpacity>
            <Text tx="common.signup" style={styles.loginText} />
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}

const $textField: ViewStyle = {
  marginBottom: spacing.lg,
}

const $tapButton: ViewStyle = {
  marginTop: spacing.xs,
}
