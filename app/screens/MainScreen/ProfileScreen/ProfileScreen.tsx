import React, { FC } from "react"
import { TouchableOpacity, View } from "react-native"
import { colors } from "app/theme"
import { ScreensEnum } from "app/enums"
import { observer } from "mobx-react-lite"
import { AutoImage, Icon, Text, AppHeader } from "app/components"
import { AppStackScreenProps, navigationRef } from "app/navigators"
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from "./styles"
import { wp } from "app/utils/responsive"
import { MY_WALLETS } from "./data"

export const ProfileScreen: FC<AppStackScreenProps<ScreensEnum.PROFILE>> = observer(
  ({ navigation }) => {
    return (
      <View style={styles.root}>
        <View style={styles.headerBlock}>
          <Text text="Profile" preset="bold" style={styles.headerText} />

          <TouchableOpacity onPress={() => navigation.navigate(ScreensEnum.SETTING)}>
            <Ionicons
              name="settings-outline"
              size={25}
              color={colors.palette.neutral900}
              style={styles.p5}
            />
          </TouchableOpacity>
        </View>

        {/* Profile Section */}
        <View style={styles.alignSelfCenter}>
          <View style={styles.profilePicBlock}>
            <AutoImage source={{ uri: "https://picsum.photos/302" }} style={styles.profilePic} />
          </View>
        </View>

        <View style={styles.alignSelfCenter}>
          <View style={styles.nameText}>
            <Text text="Haseeb Ahmed" preset="subheading" />
            {true && <Icon icon="verifiedBadge" size={15} style={{ marginLeft: wp(1) }} />}
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginVertical: 30,
            paddingHorizontal: wp(5),
          }}
        >
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Text text="TOTAL INCOME" style={{ color: colors.textDim }} />
            <Text
              text="$34K"
              preset="bold"
              style={{
                marginTop: 5,
                color: colors.palette.primary500,
                fontSize: 32,
                lineHeight: 35,
              }}
            />
          </View>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Text text="TOTAL EXPENSE" style={{ color: colors.textDim }} />
            <Text
              text="$102K"
              preset="bold"
              style={{
                marginTop: 5,
                color: colors.palette.primary500,
                fontSize: 32,
                lineHeight: 35,
              }}
            />
          </View>
        </View>

        <View style={{ paddingHorizontal: wp(5) }}>
          <AppHeader text="Wallets" />
          <View
            style={{
              marginVertical: 10,
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            {MY_WALLETS.map((el) => (
              <View
                key={el._id}
                style={{
                  marginRight: 10,
                  marginBottom: 10,
                  backgroundColor: colors.palette.primary100,
                  paddingVertical: 4,
                  paddingHorizontal: 16,
                  borderRadius: 20,
                }}
              >
                <Text text={el.name.toUpperCase()} style={{ fontSize: 12, color: colors.text }} />
              </View>
            ))}
          </View>

          <AppHeader text="Achievements" />
          <View
            style={{
              marginVertical: 10,
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          ></View>
        </View>
      </View>
    )
  },
)
