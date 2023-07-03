import React from "react"
import Config from "app/config"
import * as Screens from "app/screens"
import { useStores } from "app/models"
import { colors } from "app/theme"
import { observer } from "mobx-react-lite"
import { useColorScheme } from "react-native"
import { DemoNavigator, DemoTabParamList } from "./DemoNavigator"
import { navigationRef, useBackButtonHandler } from "app/navigators/navigationUtilities"
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack"
import { DarkTheme, DefaultTheme, NavigatorScreenParams, NavigationContainer } from "@react-navigation/native"
import { ScreensEnum } from "app/enums"

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 */
export type AppStackParamList = {
  Signin: undefined
  Signup: undefined
  Welcome: undefined
  Demo: NavigatorScreenParams<DemoTabParamList>
  // 🔥 Your screens go here
}

/**
 * This is a list of all the route names that will exit the app if the back button
 * is pressed while in that screen. Only affects Android.
 */
const exitRoutes = Config.exitRoutes

export type AppStackScreenProps<T extends keyof AppStackParamList> = NativeStackScreenProps<AppStackParamList, T>

const Stack = createNativeStackNavigator<AppStackParamList>()

const AppStack = observer(function AppStack() {
  const { authenticationStore: { isAuthenticated } } = useStores()

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        navigationBarColor: colors.background,
        animation: "slide_from_right",
      }}
      initialRouteName={ScreensEnum.SIGNUP}
    >
      {isAuthenticated ? (
        <>
          <Stack.Screen name="Welcome" component={Screens.WelcomeScreen} />
          <Stack.Screen name="Demo" component={DemoNavigator} />
        </>
      ) : (
        <>
          <Stack.Screen name={ScreensEnum.SIGNUP} component={Screens.SignUpScreen} />
          <Stack.Screen name={ScreensEnum.SIGNIN} component={Screens.SignInScreen} />
        </>
      )}
    </Stack.Navigator>
  )
})

export interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = observer(function AppNavigator(props: NavigationProps) {
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
})
