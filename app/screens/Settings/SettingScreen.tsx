import React, { FC } from "react"
import { TouchableOpacity, View, FlatList } from "react-native"
import { colors, shadow } from "app/theme"
import { ScreensEnum } from "app/enums"
import { wp } from "app/utils/responsive"
import { Text, Header } from "app/components"
import { AppStackScreenProps } from "app/navigators"
import { SETTINGS_ITEMS } from "./data"
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from "./styles"
// import { useStores } from "app/models"

export const SettingScreen: FC<AppStackScreenProps<ScreensEnum.SETTING>> = ({ navigation }) => {
  // const {
  //   authenticationStore: { logout },
  // } = useStores()

  return (
    <View style={styles.root}>
      <Header title="Settings" leftIcon="back" onLeftPress={() => navigation.goBack()} />

      <FlatList
        data={SETTINGS_ITEMS}
        keyExtractor={(item) => item._id}
        style={{ paddingTop: 20 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={
              item.name === "Logout"
                ? () => {
                    // logout()
                    navigation.navigate(ScreensEnum.SIGNUP)
                  }
                : item.onPress
            }
            style={{
              flex: 1,
              marginBottom: 15,
              backgroundColor: colors.palette.neutral100,
              marginHorizontal: wp(5),
              borderRadius: 10,
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 20,
              paddingVertical: 10,
              ...shadow.light,
            }}
          >
            <View
              style={{
                backgroundColor: colors.palette.primary100,
                justifyContent: "center",
                alignItems: "center",
                width: wp(14),
                height: wp(14),
                borderRadius: 15,
              }}
            >
              <Ionicons name={item.icon} size={30} color={colors.palette.primary500} />
            </View>
            <Text text={item.name} style={{ marginLeft: 20 }} />
          </TouchableOpacity>
        )}
      />
    </View>
  )
}
