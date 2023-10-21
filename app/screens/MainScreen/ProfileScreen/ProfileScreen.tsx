import React, { FC, useEffect, useState } from "react"
import { ScrollView, TouchableOpacity, View } from "react-native"
import { wp } from "app/utils/responsive"
import { colors } from "app/theme"
import { formatName } from "app/utils/formatName"
import { ScreensEnum } from "app/enums"
import { getAllWallets } from "app/store/slices/wallet/walletService"
import { MY_ACHIEVEMENTS } from "./data"
import { TransactionType } from "app/enums/transactions.enum"
import { AppStackScreenProps } from "app/navigators"
import { AutoImage, Icon, Text, AppHeader } from "app/components"
import { RootState, useAppDispatch, useAppSelector } from "app/store/store"
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from "./styles"

export const ProfileScreen: FC<AppStackScreenProps<ScreensEnum.PROFILE>> = ({ navigation }) => {
  const dispatch = useAppDispatch()
  const { user } = useAppSelector((state: RootState) => state.auth)
  const { transactions } = useAppSelector((state: RootState) => state.transaction)
  const {
    wallets: { data: walletData },
  } = useAppSelector((state: RootState) => state.wallet)

  const [totalIncome, setTotalIncome] = useState<Number>(0)
  const [totalExpense, setTotalExpense] = useState<Number>(0)

  console.log("tra === ", transactions)

  const getTotalIncome = () => {
    //   const income = transactions.data.reduce((total, transaction) => {
    //     if (transaction.type === TransactionType.INCOME) {
    //       return total + transaction.amount
    //     }
    //     return total
    //   }, 0)
    //   setTotalIncome(income)
  }

  const getTotalExpense = () => {
    // const expense = transactions.data.reduce((total, transaction) => {
    //   if (transaction.type === TransactionType.EXPENSE) {
    //     return total + transaction.amount
    //   }
    //   return total
    // }, 0)
    // setTotalExpense(expense)
  }

  useEffect(() => {
    getTotalExpense()
  }, [])

  useEffect(() => {
    getTotalIncome()
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
              text={`$${totalIncome}`}
              preset="heading"
              style={{
                color: colors.palette.primary500,
              }}
            />
          </View>
          <View style={styles.subAmountContainer}>
            <Text text="TOTAL EXPENSE" style={{ color: colors.textDim }} />
            <Text
              text={`$${totalExpense}`}
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
