import React, { FC } from "react"
import { colors } from "app/theme"
import { ScreensEnum } from "app/enums"
import { BudgetScreen, HomeScreen, ProfileScreen, TransactionScreen } from "../"
import { AppStackScreenProps } from "app/navigators"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Ionicons from "react-native-vector-icons/Ionicons"

interface MainScreenProps extends NativeStackScreenProps<AppStackScreenProps<ScreensEnum.MAIN>> {}

export const MainScreen: FC<MainScreenProps> = ({ navigation }) => {
  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.palette.primary500,
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="ios-home" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Transaction"
        component={TransactionScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-file-tray-full" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Budget"
        component={BudgetScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="pie-chart" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="md-person" size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  )
}
