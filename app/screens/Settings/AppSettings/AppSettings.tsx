import React, { FC, useState } from "react"
import { FlatList, ScrollView, TouchableOpacity, View } from "react-native"
import { colors, shadow } from "app/theme"
import { ScreensEnum } from "app/enums"
import { hp, wp } from "app/utils/responsive"
import { observer } from "mobx-react-lite"
import { Text, Header, TextField, AutoImage, Button, ListItemCard, Icon } from "app/components"
import { AppStackScreenProps } from "app/navigators"
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from "./styles"
import { Switch } from "react-native"
import { SETTING_ITEMS } from "./data"

export const AppSettingsScreen: FC<AppStackScreenProps<ScreensEnum.APP_SETTINGS>> = observer(
  ({ navigation }) => {
    const [isEnabled, setIsEnabled] = useState(false)
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState)

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
              thumbColor={isEnabled ? colors.palette.neutral100 : colors.palette.neutral100}
              ios_backgroundColor={colors.palette.neutral500}
              onValueChange={toggleSwitch}
              value={isEnabled}
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
          <FlatList data={SETTING_ITEMS} renderItem={renderItem} keyExtractor={(item) => item.id} />
          <Text text="Delete My Account" style={styles.link} />
        </View>
      </View>
    )
  },
)
