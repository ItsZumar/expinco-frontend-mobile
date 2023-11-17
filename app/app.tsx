/**
 * Welcome to the main entry point of the app. In this file, we'll
 * be kicking off our app.
 *
 * Most of this file is boilerplate and you shouldn't need to modify
 * it very often. But take some time to look through and understand
 * what is going on here.
 *
 * The app navigation resides in ./app/navigators, so head over there
 * if you're interested in adding screens and navigators.
 */
import "./i18n"
import "./utils/ignoreWarnings"
import { useFonts } from "expo-font"
import React, { useEffect } from "react"
import { initialWindowMetrics, SafeAreaProvider } from "react-native-safe-area-context"
import * as Linking from "expo-linking"
import { AppNavigator } from "./navigators"
import { ErrorBoundary } from "./screens/ExampleScreens/ErrorScreen/ErrorBoundary"
import { customFontsToLoad } from "./theme"
// import { setupReactotron } from "./services/reactotron"
import { Provider } from "react-redux"
import { persistor, store } from "./store/store"
import { PersistGate } from "redux-persist/integration/react"
import FlashMessage from "react-native-flash-message"
import Config from "./config"

// Web linking configuration
const prefix = Linking.createURL("/")
const config = {
  screens: {
    Login: {
      path: "",
    },
    Welcome: "welcome",
    Demo: {
      screens: {
        DemoShowroom: {
          path: "showroom/:queryIndex?/:itemIndex?",
        },
        DemoDebug: "debug",
        DemoPodcastList: "podcast",
        DemoCommunity: "community",
      },
    },
  },
}

interface AppProps {
  hideSplashScreen: () => Promise<void>
}

function App({ hideSplashScreen }: AppProps) {
  const [areFontsLoaded] = useFonts(customFontsToLoad)

  useEffect(() => {
    setTimeout(hideSplashScreen, 500)
  }, [])

  const linking = {
    prefixes: [prefix],
    config,
  }

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <ErrorBoundary catchErrors={Config.catchErrors}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <AppNavigator linking={linking} />
            <FlashMessage position="top" style={{ marginTop: 20 }} />
          </PersistGate>
        </Provider>
      </ErrorBoundary>
    </SafeAreaProvider>
  )
}

export default App
