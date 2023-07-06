import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { TouchableOpacity, View, ViewStyle } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AppStackScreenProps } from "app/navigators"
import { Screen, AutoImage, Text } from "app/components"
import { ScreensEnum } from "app/enums"
import { colors, typography } from "app/theme"
import { wp } from "app/utils/responsive"
import Ionicons from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"
import styles from "./styles"

interface HomeScreenProps extends NativeStackScreenProps<AppStackScreenProps<ScreensEnum.HOME>> {}

export const HomeScreen: FC<HomeScreenProps> = observer(() => {
  return (
    <Screen style={$root} preset="auto">
      <View style={styles.mainHeader}>
        <AutoImage source={{ uri: "https://picsum.photos/200" }} style={styles.profileImage} />

        <TouchableOpacity style={styles.monthContainer}>
          <Ionicons name="chevron-down" size={25} color={colors.palette.primary500} />
          <Text style={styles.monthText}>July</Text>
        </TouchableOpacity>

        <View style={styles.bellContainer}>
          <Ionicons name="md-notifications" size={25} color={colors.palette.primary500} />
        </View>
      </View>

      {/* Balance */}
      <View style={styles.topBlock}>
        <Text text="Account Balance" style={styles.accountBalanceText} />
        <Text text="$9140" style={styles.amountText} />
      </View>

      <View style={styles.transBtnBlock}>
        <TouchableOpacity style={[styles.incBtnBlock, styles.incBg]}>
          <View style={styles.arrowBlock}>
            <Feather name="arrow-down" size={25} color={"#00A86B"} />
          </View>
          <View>
            <Text text="Income" style={styles.topLightText} />
            <Text text="$3020" style={styles.actualAmountText} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.incBtnBlock, styles.expBg]}>
          <View style={styles.arrowBlock}>
            <Feather name="arrow-up" size={25} color={"#FD3C4A"} />
          </View>
          <View>
            <Text text="Expense" style={styles.topLightText} />
            <Text text="$1205" style={styles.actualAmountText} />
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ paddingHorizontal: wp(5), marginTop: 30 }}>
        <Text
          text="Spend Frequency"
          style={{ fontSize: 18, fontFamily: typography.fonts.inter.semiBold }}
        />
        <View style={{ marginTop: 20, width: "100%", height: 170, backgroundColor: "purple" }} />

        <View
          style={{ flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", marginTop: 15 }}
        >
          {["Today", "Week", "Month", "Year"].map((el) => (
            <View
              style={{
                paddingHorizontal: 20,
                paddingVertical: 6,
                borderRadius: 20,
                backgroundColor: "#FCEED4",
              }}
            >
              <Text
                text={el}
                style={{
                  color: "orange",
                  fontSize: 14,
                  fontFamily: typography.fonts.inter.semiBold,
                }}
              />
            </View>
          ))}
        </View>
      </View>
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
