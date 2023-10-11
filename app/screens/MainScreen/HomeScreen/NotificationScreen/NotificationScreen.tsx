import React, { FC } from "react"
import { View } from "react-native"
import { ScreensEnum } from "app/enums"
import { NOTIFICATION_DATA } from "./data"
import { AppStackScreenProps } from "app/navigators"
import { Header, Screen, NotificationCard } from "app/components"

export const NotificationScreen: FC<AppStackScreenProps<ScreensEnum.NOTIFICATION_SCREEN>> = ({
  navigation,
  route,
}) => {
  return (
    <Screen>
      <Header
        title="Notification"
        leftIcon="back"
        onLeftPress={() => navigation.goBack()}
        rightIcon="more"
        onRightPress={() => {}}
      />
      <View>
        {NOTIFICATION_DATA.map((notification) => (
          <NotificationCard
            description={notification.description}
            createdAt={notification.createdAt}
            title={notification.title}
            key={notification.id}
          />
        ))}
      </View>
    </Screen>
  )
}
