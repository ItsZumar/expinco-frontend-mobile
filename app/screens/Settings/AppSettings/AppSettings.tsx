import React, { FC, useState } from "react"
import { FlatList, TouchableOpacity, View } from "react-native"
import { hp } from "app/utils/responsive"
import { Switch } from "react-native"
import { colors } from "app/theme"
import { observer } from "mobx-react-lite"
import { ScreensEnum } from "app/enums"
import { Text, Header, Icon } from "app/components"
import { AppStackScreenProps } from "app/navigators"
import { SETTING_ITEMS } from "./data"
import styles from "./styles"

export const AppSettingsScreen: FC<AppStackScreenProps<ScreensEnum.APP_SETTINGS>> = observer(
  ({ navigation }) => {
    const [settingItems, setSettingItems] = useState<any>(SETTING_ITEMS)

    const toggleSwitch = (itemId: any) => {
      const updatedItems = settingItems.map((item: any) => {
        if (item.id === itemId) {
          return { ...item, isEnabled: !item.isEnabled }
        }
        return item
      })

      setSettingItems(updatedItems)
    }

    const renderItem = ({ item }: any) => {
      return (
        <TouchableOpacity
          onPress={item.onPress}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: hp(1.9),
          }}
        >
          <Text text={item.listItem} style={{ fontSize: 16, fontWeight: "bold" }} />
          {item.icon == null ? (
            <Switch
              trackColor={{ false: colors.palette.neutral300, true: colors.palette.primary500 }}
              thumbColor={item.isEnabled ? colors.palette.neutral100 : colors.palette.neutral100}
              ios_backgroundColor={colors.palette.neutral500}
              onValueChange={() => toggleSwitch(item.id)}
              value={item.isEnabled}
            />
          ) : (
            <Icon icon={item.icon} color={colors.palette.primary500} />
          )}
        </TouchableOpacity>
      )
    }

    return (
      <View style={styles.root}>
        <Header title="Settings" leftIcon="back" onLeftPress={() => navigation.goBack()} />
        <View style={styles.innerContainer}>
          <FlatList data={settingItems} renderItem={renderItem} keyExtractor={(item) => item.id} />
          <Text text="Delete My Account" style={styles.link} />
        </View>
      </View>
    )
  },
)
