import React from "react"
import { View } from "react-native"
import { Text } from "app/components/Text/Text"
import { hp, wp } from "app/utils/responsive"
import { colors } from "app/theme"
import { getTimeFromDateString } from "app/utils/formatDate"
import { TouchableOpacity } from "react-native"

interface NotificationCardI {
  title: string
  description: string
  createdAt: string
}

const NotificationCard = ({ title, description, createdAt }: NotificationCardI) => {
  return (
    <>
      <TouchableOpacity
        style={{
          borderBottomColor: colors.palette.neutral300,
          borderBottomWidth: 1,
          paddingHorizontal: wp(5),
          paddingVertical: hp(1),
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ width: wp(72) }}>
          <Text text={title} preset="bold" numberOfLines={1} />
          <Text text={description} numberOfLines={1} style={{ color: colors.palette.neutral700 }} />
        </View>

        <Text text={getTimeFromDateString(createdAt)} />
      </TouchableOpacity>
    </>
  )
}

export { NotificationCard }
