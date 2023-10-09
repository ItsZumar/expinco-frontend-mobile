import React, { FC } from "react"
import { ScrollView, TouchableOpacity, View } from "react-native"
import { wp } from "app/utils/responsive"
import { colors } from "app/theme"
import { observer } from "mobx-react-lite"
import { ScreensEnum } from "app/enums"
import { AppStackScreenProps } from "app/navigators"
import { MY_ACHIEVEMENTS } from "./data"
import { AutoImage, Icon, Text, AppHeader } from "app/components"
import { myWalletsData } from "app/constants"
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from "./styles"

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
        <ScrollView>
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
              {myWalletsData.map((el) => (
                <View
                  key={el.id}
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
                gap: 14,
              }}
            >
              {MY_ACHIEVEMENTS.map((item) => (
                <View
                  style={{
                    backgroundColor: colors.palette.primary100,
                    padding: 10,
                    borderRadius: 20,
                  }}
                >
                  <Icon icon={item.icon} size={30} />
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    )
  },
)
