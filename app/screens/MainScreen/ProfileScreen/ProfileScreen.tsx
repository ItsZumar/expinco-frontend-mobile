import React, { FC, useEffect, useState } from "react"
import { ScrollView, TouchableOpacity, View } from "react-native"
import { wp } from "app/utils/responsive"
import { colors } from "app/theme"
import { ScreensEnum } from "app/enums"
import { AppStackScreenProps } from "app/navigators"
import { MY_ACHIEVEMENTS } from "./data"
import { AutoImage, Icon, Text, AppHeader } from "app/components"
import { RootState, useAppDispatch, useAppSelector } from "app/store/store"
import { getAllWallets } from "app/store/slices/wallet/walletService"
import { formatName } from "app/utils/formatName"
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from "./styles"

export const ProfileScreen: FC<AppStackScreenProps<ScreensEnum.PROFILE>> = ({ navigation }) => {
  const dispatch = useAppDispatch()
  const { user } = useAppSelector((state: RootState) => state.auth)
  const {
    wallets: { data: walletData },
  } = useAppSelector((state: RootState) => state.wallet)

  useEffect(() => {
    dispatch(getAllWallets())
  }, [])

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

      <ScrollView>
        {/* Profile Section */}
        <View style={styles.alignSelfCenter}>
          <View style={styles.profilePicBlock}>
            <AutoImage
              source={
                user?.user?.displayPicture
                  ? { uri: user?.user?.displayPicture }
                  : { uri: "https://picsum.photos/302" }
              }
              // source={{ uri: "https://picsum.photos/302" }}
              style={styles.profilePic}
            />
          </View>
        </View>

        <View style={styles.alignSelfCenter}>
          <View style={styles.nameText}>
            <Text
              text={formatName(user?.user?.firstname, user?.user?.lastname)}
              preset="subheading"
            />
            {true && <Icon icon="verifiedBadge" size={15} style={{ marginLeft: wp(1) }} />}
          </View>
        </View>

        <View style={styles.totalAmountContainer}>
          <View style={styles.subAmountContainer}>
            <Text text="TOTAL INCOME" style={{ color: colors.textDim }} />
            <Text
              text="$34K"
              preset="heading"
              style={{
                color: colors.palette.primary500,
              }}
            />
          </View>
          <View style={styles.subAmountContainer}>
            <Text text="TOTAL EXPENSE" style={{ color: colors.textDim }} />
            <Text
              text="$102K"
              preset="heading"
              style={{
                color: colors.palette.primary500,
              }}
            />
          </View>
        </View>

        <View style={{ paddingHorizontal: wp(5) }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <AppHeader text="Wallets" />
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              onPress={() => navigation.navigate(ScreensEnum.CREATE_WALLET)}
            >
              <Text text="Add more" />
              <Ionicons name="add" size={21} color={colors.palette.neutral900} style={styles.p5} />
            </TouchableOpacity>
          </View>
          <View style={styles.walletsContainer}>
            {walletData != null && walletData.length !== 0 ? (
              <>
                {walletData.map((el: any) => (
                  <View key={el.id} style={styles.wallet}>
                    <Text text={el.name.toUpperCase()} style={styles.walletText} />
                  </View>
                ))}
              </>
            ) : (
              <Text text="No wallets" />
            )}
          </View>

          <AppHeader text="Achievements" />
          <View style={styles.achievementsContainer}>
            {MY_ACHIEVEMENTS.map((item) => (
              <View style={styles.achievement}>
                <Icon icon={item.icon} size={30} />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
