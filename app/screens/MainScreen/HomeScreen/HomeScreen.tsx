import React, { FC, useEffect, useState } from "react"
import { ActivityIndicator, FlatList, TouchableOpacity, View, ViewStyle } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AppStackScreenProps } from "app/navigators"
import {
  Screen,
  AutoImage,
  Text,
  AppHeader,
  TransactionCard,
  MyLineChart,
  ArrowRoundButton,
} from "app/components"
import { ScreensEnum } from "app/enums"
import { colors } from "app/theme"
import { TransactionType } from "app/enums/transactions.enum"
import { RootState, useAppDispatch, useAppSelector } from "app/store/store"
import { hp } from "app/utils/responsive"
import { getAllRecentTransactions } from "app/store/slices/transaction/transactionService"
import { getAllWallets } from "app/store/slices/wallet/walletService"
import Ionicons from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"
import styles from "./styles"
import { getSpendFrequencyService } from "app/store/slices/analytics/analyticsService"

interface HomeScreenProps extends NativeStackScreenProps<AppStackScreenProps<ScreensEnum.HOME>> {}

export const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
  const dispatch = useAppDispatch()
  const { user } = useAppSelector((state: RootState) => state.auth)
  const { loading, recentTransactions } = useAppSelector((state: RootState) => state.transaction)
  const { wallets } = useAppSelector((state: RootState) => state.wallet)
  const { spendFrequency, loading: spendFrequencyLoading } = useAppSelector(
    (state: RootState) => state.spendFrequency,
  )

  const [refreshing, setRefresing] = useState<boolean>(false)
  const [availableBalance, setAvailableBalance] = useState<Number>(0)
  const [totalIncome, setTotalIncome] = useState<Number>(0)
  const [totalExpense, setTotalExpense] = useState<Number>(0)

  const handleButtonClick = (buttonTitle: string) => {
    dispatch(getSpendFrequencyService({ orderBy: buttonTitle.toUpperCase() }))
  }

  const getTotalIncome = () => {
    const income = recentTransactions.data.reduce((total, transaction) => {
      if (transaction.type === TransactionType.INCOME) {
        return total + transaction.amount
      }
      return total
    }, 0)
    setTotalIncome(income)
  }

  const getTotalExpense = () => {
    const expense = recentTransactions.data.reduce((total, transaction) => {
      if (transaction.type === TransactionType.EXPENSE) {
        return total + transaction.amount
      }
      return total
    }, 0)
    setTotalExpense(expense)
  }

  const getTotalAvailableBalance = () => {
    const totalAmount = wallets.data.reduce((total, transaction) => {
      return total + transaction.amount
    }, 0)
    setAvailableBalance(totalAmount)
  }

  useEffect(() => {
    getTotalExpense()
  }, [])

  useEffect(() => {
    getTotalIncome()
  }, [])

  useEffect(() => {
    getTotalAvailableBalance()
  }, [])

  useEffect(() => {
    dispatch(getAllRecentTransactions())
  }, [])

  useEffect(() => {
    dispatch(getAllWallets())
  }, [])

  useEffect(() => {
    dispatch(getSpendFrequencyService({ orderBy: "YEAR" }))
  }, [])

  return (
    <Screen
      style={$root}
      preset="auto"
      ScrollViewProps={{ showsVerticalScrollIndicator: false }}
      StatusBarProps={{ backgroundColor: colors.palette.neutral100 }}
    >
      <View style={styles.mainHeader}>
        <AutoImage
          source={
            user?.user?.displayPicture
              ? { uri: user?.user?.displayPicture }
              : { uri: "https://picsum.photos/200" }
          }
          style={styles.profileImage}
        />

        <ArrowRoundButton title="July" onPress={() => {}} />

        <TouchableOpacity
          style={styles.bellContainer}
          onPress={() => navigation.navigate(ScreensEnum.NOTIFICATION_SCREEN as any)}
        >
          <Ionicons name="md-notifications-outline" size={25} color={colors.palette.primary500} />
        </TouchableOpacity>
      </View>

      {/* Balance */}
      <View style={styles.topBlock}>
        <Text text="Account Balance" preset="default" style={styles.accountBalanceText} />
        <Text
          text={`$${availableBalance.toLocaleString()}`}
          preset="heading"
          style={styles.amountText}
        />
      </View>

      <View style={styles.transBtnBlock}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(ScreensEnum.ADD_TRANSACTION as any, {
              type: String(TransactionType.INCOME),
            })
          }
          style={[styles.incBtnBlock, styles.incBg]}
        >
          <View style={styles.arrowBlock}>
            <Feather name="arrow-down" size={25} color={colors.palette.income} />
          </View>

          <View>
            <Text text="Income" preset="default" style={styles.topLightText} />
            <Text text={`$${totalIncome.toLocaleString()}`} style={styles.actualAmountText} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate(ScreensEnum.ADD_TRANSACTION as any, {
              type: String(TransactionType.EXPENSE),
            })
          }
          style={[styles.incBtnBlock, styles.expBg]}
        >
          <View style={styles.arrowBlock}>
            <Feather name="arrow-up" size={25} color={colors.palette.expense} />
          </View>
          <View>
            <Text text="Expense" preset="default" style={styles.topLightText} />
            <Text text={`$${totalExpense.toLocaleString()}`} style={styles.actualAmountText} />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomBlock}>
        <AppHeader text="Spend Frequency" />

        <View>
          {spendFrequencyLoading ? (
            <View style={{ marginTop: 20 }}>
              <ActivityIndicator color="red" />
            </View>
          ) : (
            <MyLineChart data={spendFrequency.data} labels={spendFrequency.label} />
          )}
        </View>

        <View style={styles.graphSortBlock}>
          {["Today", "Week", "Month", "Year"].map((el) => (
            <TouchableOpacity
              style={styles.timeStampBtn}
              key={el}
              onPress={() => handleButtonClick(el)}
            >
              <Text text={el} preset="bold" style={styles.timeStampText} />
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.spacingTop}>
          <AppHeader
            text="Recent Transactions"
            rightComponent={() => (
              <TouchableOpacity style={styles.seeAllbtnBlock}>
                <Text text="See All" style={styles.seeAllText} />
              </TouchableOpacity>
            )}
          />

          {loading ? (
            <View style={{ marginTop: 20 }}>
              <ActivityIndicator color="red" />
            </View>
          ) : (
            <FlatList
              data={recentTransactions.data}
              keyExtractor={(item) => String(item._id)}
              renderItem={({ item }) => (
                <TransactionCard
                  {...item}
                  onPress={() =>
                    navigation.navigate(ScreensEnum.DETAIL_TRANSACTION as any, { item })
                  }
                />
              )}
              ListEmptyComponent={() =>
                !refreshing && (
                  <Text
                    text="You don't have any transactions yet!"
                    preset="subheading"
                    style={{ marginVertical: hp(2), marginHorizontal: wp(5) }}
                  />
                )
              }
            />
          )}
        </View>
      </View>
    </Screen>
  )
}

const $root: ViewStyle = {
  flex: 1,
}
