import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AppStackScreenProps } from "app/navigators"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { ScreensEnum } from "app/enums"
import { colors } from "app/theme"
import Ionicons from 'react-native-vector-icons/Ionicons';

import { HomeScreen } from "../"

interface MainScreenProps extends NativeStackScreenProps<AppStackScreenProps<ScreensEnum.MAIN>> {}

export const MainScreen: FC<MainScreenProps> = observer(({ navigation }) => {
  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.palette.primary500,
        tabBarInactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Transaction"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-file-tray-full" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Budget"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="pie-chart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="md-person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
})