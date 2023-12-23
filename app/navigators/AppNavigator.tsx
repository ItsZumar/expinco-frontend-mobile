import React from "react"
import Config from "app/config"
import * as Screens from "app/screens"
import { colors } from "app/theme"
import { useColorScheme } from "react-native"
import { navigationRef, useBackButtonHandler } from "app/navigators/navigationUtilities"
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack"
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native"
import { ScreensEnum } from "app/enums"
import { RootState, useAppSelector } from "app/store/store"

export type AppStackParamList = {
  Signin: undefined
  Signup: undefined
  OTPVerification: undefined
  ForgotPassword: undefined
  ResetPassword: undefined

  Main: undefined
  Home: undefined
  Transaction: undefined
  Budget: undefined
  Profile: undefined

  Setting: undefined
  PersonalSettings: undefined
  MyWallets: undefined

  AddTransaction: {
    type: string
  }

  CreateBudget: undefined
  BudgetDetail: {
    id: number
  }
  EditBudget: undefined
  WalletDetail: {
    item: any
  }
  CreateWallet: undefined
  EditWallet: { item: any }
  AppSettings: undefined
  ExportData: undefined
  About: undefined
  PrivacyPolicy: undefined
  DetailTransactionScreen: { item: any }
  NotificationScreen: undefined
  FinancialReportScreen: undefined
  EditTransactionScreen: { item: any }
}

const exitRoutes = Config.exitRoutes

export type AppStackScreenProps<T extends keyof AppStackParamList> = NativeStackScreenProps<
  AppStackParamList,
  T
>

const Stack = createNativeStackNavigator<AppStackParamList>()

const AppStack = () => {
  const { user } = useAppSelector((state: RootState) => state.auth)

  if (user?.user?.isEmailVerified === false) {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          navigationBarColor: colors.background,
          animation: "slide_from_right",
        }}
        initialRouteName={ScreensEnum.SIGNIN}
      >
        <Stack.Screen
          name={ScreensEnum.OTP_VERIFICATION}
          component={Screens.OtpVerificationScreen}
        />
        <Stack.Screen name={ScreensEnum.SIGNIN} component={Screens.SignInScreen} />
        <Stack.Screen name={ScreensEnum.SIGNUP} component={Screens.SignUpScreen} />
      </Stack.Navigator>
    )
  }

  if (user?.user?.isEmailVerified) {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          navigationBarColor: colors.background,
          animation: "slide_from_right",
        }}
        initialRouteName={ScreensEnum.MAIN}
      >
        <Stack.Screen name={ScreensEnum.MAIN} component={Screens.MainScreen} />
        <Stack.Screen
          name={ScreensEnum.OTP_VERIFICATION}
          component={Screens.OtpVerificationScreen}
        />
        <Stack.Screen name={ScreensEnum.SIGNIN} component={Screens.SignInScreen} />
        <Stack.Screen name={ScreensEnum.SIGNUP} component={Screens.SignUpScreen} />
        <Stack.Screen name={ScreensEnum.FORGOT_PASSWORD} component={Screens.ForgotPasswordScreen} />
        <Stack.Screen name={ScreensEnum.RESET_PASSWORD} component={Screens.ResetPasswordScreen} />
        <Stack.Screen name={ScreensEnum.ADD_TRANSACTION} component={Screens.AddTransactionScreen} />
        <Stack.Screen name={ScreensEnum.SETTING} component={Screens.SettingScreen} />
        <Stack.Screen
          name={ScreensEnum.PERSONAL_SETTINGS}
          component={Screens.PersonalSettingScreen}
        />
        <Stack.Screen name={ScreensEnum.MY_WALLETS} component={Screens.MyWalletScreen} />
        <Stack.Screen name={ScreensEnum.CREATE_BUDGET} component={Screens.CreateBudgetScreen} />
        <Stack.Screen name={ScreensEnum.BUDGET_DETAIL} component={Screens.BudgetDetailScreen} />
        <Stack.Screen name={ScreensEnum.EDIT_BUDGET} component={Screens.EditBudgetScreen} />
        <Stack.Screen name={ScreensEnum.WALLET_DETAIL} component={Screens.WalletDetailScreen} />
        <Stack.Screen name={ScreensEnum.CREATE_WALLET} component={Screens.CreateWallet} />
        <Stack.Screen name={ScreensEnum.EDIT_WALLET} component={Screens.EditWallet} />

        <Stack.Screen name={ScreensEnum.APP_SETTINGS} component={Screens.AppSettingsScreen} />
        <Stack.Screen name={ScreensEnum.EXPORT_DATA} component={Screens.ExportDataScreen} />
        <Stack.Screen name={ScreensEnum.ABOUT} component={Screens.AboutScreen} />
        <Stack.Screen name={ScreensEnum.PRIVACY_POLICY} component={Screens.PrivacyPolicyScreen} />
        <Stack.Screen
          name={ScreensEnum.DETAIL_TRANSACTION}
          component={Screens.DetailTransactionScreen}
        />
        <Stack.Screen
          name={ScreensEnum.EDIT_TRANSACTION}
          component={Screens.EditTransactionScreen}
        />
        <Stack.Screen
          name={ScreensEnum.NOTIFICATION_SCREEN}
          component={Screens.NotificationScreen}
        />
        <Stack.Screen
          name={ScreensEnum.FINANCIAL_REPORT}
          component={Screens.FinancialReportScreen}
        />
      </Stack.Navigator>
    )
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        navigationBarColor: colors.background,
        animation: "slide_from_right",
      }}
      initialRouteName={ScreensEnum.SIGNIN}
    >
      <Stack.Screen name={ScreensEnum.SIGNIN} component={Screens.SignInScreen} />
      <Stack.Screen name={ScreensEnum.SIGNUP} component={Screens.SignUpScreen} />
    </Stack.Navigator>
  )
}

export interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  const colorScheme = useColorScheme()

  useBackButtonHandler((routeName) => exitRoutes.includes(routeName))

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      {...props}
    >
      <AppStack />
    </NavigationContainer>
  )
}
