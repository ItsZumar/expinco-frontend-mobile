import React, { FC, useEffect } from "react"
import { ActivityIndicator, ScrollView, TouchableOpacity, View } from "react-native"
import { wp } from "app/utils/responsive"
import { colors } from "app/theme"
import { formatName } from "app/utils/formatName"
import { ScreensEnum } from "app/enums"
import { getAllWallets } from "app/store/slices/wallet/walletService"
import { AppStackScreenProps } from "app/navigators"
import { AutoImage, Icon, Text, AppHeader } from "app/components"
import { RootState, useAppDispatch, useAppSelector } from "app/store/store"
import { getAllTransactions } from "app/store/slices/transaction/transactionService"
import imagePrev from "../../../../images/no-image.jpg"
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from "./styles"

export const ProfileScreen: FC<AppStackScreenProps<ScreensEnum.PROFILE>> = ({ navigation }) => {
  const dispatch = useAppDispatch()
  const { user, loading } = useAppSelector((state: RootState) => state.auth)
  const { totalIncome: totalI, totalExpense: totalE } = useAppSelector(
    (state: RootState) => state.transaction,
  )
  const {
    wallets: { data: walletData },
    loading: walletsLoading,
  } = useAppSelector((state: RootState) => state.wallet)

  useEffect(() => {
    dispatch(getAllTransactions())
  }, [])

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

      {loading || walletsLoading ? (
        <View style={{ marginTop: 20 }}>
          <ActivityIndicator color="red" />
        </View>
      ) : (
        <ScrollView>
          {/* Profile Section */}
          <View style={styles.alignSelfCenter}>
            <View style={styles.profilePicBlock}>
              <AutoImage
                source={
                  user?.user?.displayPicture ? { uri: user?.user?.displayPicture } : imagePrev
                }
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
                text={`$${totalI}`}
                preset="heading"
                style={{
                  color: colors.palette.primary500,
                }}
              />
            </View>
            <View style={styles.subAmountContainer}>
              <Text text="TOTAL EXPENSE" style={{ color: colors.textDim }} />
              <Text
                text={`$${totalE}`}
                preset="heading"
                style={{
                  color: colors.palette.primary500,
                }}
              />
            </View>
          </View>

          <View style={{ paddingHorizontal: wp(5) }}>
            <AppHeader text="Wallets" />

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
              <Text text="No Achievements" />
              {/* {MY_ACHIEVEMENTS.map((item) => (
                <View style={styles.achievement}>
                  <Icon icon={item.icon} size={30} />
                </View>
              ))} */}
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  )
}
