import React, { FC, useEffect, useState } from "react"
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  ScrollView,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AutoImage, Text, AppHeader, TransactionCard, MyLineChart } from "app/components"
import { colors } from "app/theme"
import { hp, wp } from "app/utils/responsive"
import { ScreensEnum } from "app/enums"
import { getAllWallets } from "app/store/slices/wallet/walletService"
import { TransactionType } from "app/enums/transactions.enum"
import { AppStackScreenProps } from "app/navigators"
import { getSpendFrequencyService } from "app/store/slices/analytics/analyticsService"
import { getAllRecentTransactions } from "app/store/slices/transaction/transactionService"
import { RootState, useAppDispatch, useAppSelector } from "app/store/store"
import imagePrev from "../../../../images/no-image.jpg"
import Ionicons from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"
import styles from "./styles"
import { TransactionI } from "app/store/slices/transaction/types"

interface HomeScreenProps extends NativeStackScreenProps<AppStackScreenProps<ScreensEnum.HOME>> {}

export const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
  const dispatch = useAppDispatch()
  const { user } = useAppSelector((state: RootState) => state.auth)
  const { loading, recentTransactions } = useAppSelector((state: RootState) => state.transaction)
  const { wallets, loading: walletsLoading } = useAppSelector((state: RootState) => state.wallet)
  const { spendFrequency, loading: spendFrequencyLoading } = useAppSelector(
    (state: RootState) => state.spendFrequency,
  )

  const [refreshing, setRefresing] = useState<boolean>(false)
  // const [fullScreenRefreshing, setFullScreenRefreshing] = useState<boolean>(false)
  const [availableBalance, setAvailableBalance] = useState<Number>(0)
  const [totalIncome, setTotalIncome] = useState<Number>(0)
  const [totalExpense, setTotalExpense] = useState<Number>(0)
  const [transactionsByMonth, setTransactionsByMonth] = useState<any[]>([])

  const handleButtonClick = async (buttonTitle: string) => {
    await dispatch(getSpendFrequencyService({ orderBy: buttonTitle.toUpperCase() }))
  }

  const getTotalIncome = () => {
    if (transactionsByMonth != null && loading !== true) {
      const income = transactionsByMonth.reduce(
        (total: number, transaction: { type: TransactionType; amount: number }) => {
          if (transaction.type === TransactionType.INCOME) {
            return total + transaction.amount
          }
          return total
        },
        0,
      )
      setTotalIncome(income)
    }
  }

  const getTotalExpense = () => {
    if (transactionsByMonth != null && loading !== true) {
      const expense = transactionsByMonth.reduce(
        (total: number, transaction: { type: TransactionType; amount: number }) => {
          if (transaction.type === TransactionType.EXPENSE) {
            return total + transaction.amount
          }
          return total
        },
        0,
      )
      setTotalExpense(expense)
    }
  }

  const getTotalAvailableBalance = () => {
    const totalAmount = wallets?.data.reduce((total, transaction) => {
      return total + transaction.amount
    }, 0)
    setAvailableBalance(totalAmount)
  }

  const getCurrentMonth = () => {
    const currentDate = new Date()
    const currentMonth = currentDate.toLocaleString("en-US", { month: "long" })
    return currentMonth
  }

  const filterTransactionByCurrentMonth = async () => {
    const currentMonth = getCurrentMonth()
    const filteredTransactions = recentTransactions?.data.filter((transaction) => {
      const createdDate = new Date(transaction.createdAt)
      const transactionMonth = createdDate.toLocaleString("en-US", { month: "long" })
      return transactionMonth === currentMonth
    })

    await setTransactionsByMonth(filteredTransactions)
  }

  // const handleFullScreenRefresh = async () => {
  //   setFullScreenRefreshing(true)
  //   await dispatch(getAllWallets())
  //   await dispatch(getAllRecentTransactions())
  //   await dispatch(getSpendFrequencyService({ orderBy: "YEAR" }))
  //   setFullScreenRefreshing(false)
  // }

  useEffect(() => {
    getTotalAvailableBalance()
  }, [])

  useEffect(() => {
    dispatch(getAllWallets())
  }, [])

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      dispatch(getAllRecentTransactions())
    })
    return unsubscribe
  }, [navigation])

  useEffect(() => {
    dispatch(getSpendFrequencyService({ orderBy: "YEAR" }))
  }, [])

  useEffect(() => {
    filterTransactionByCurrentMonth()
  }, [recentTransactions, loading])

  useEffect(() => {
    getTotalIncome()
    getTotalExpense()
    getTotalAvailableBalance()
  }, [transactionsByMonth])

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: colors.palette.neutral100 }}
      // refreshControl={
      //   <RefreshControl
      //     colors={[colors.palette.accent500]}
      //     refreshing={fullScreenRefreshing}
      //     onRefresh={handleFullScreenRefresh}
      //   />
      // }
    >
      <View style={styles.mainHeader}>
        <AutoImage
          source={user?.user?.displayPicture ? { uri: user?.user?.displayPicture } : imagePrev}
          style={styles.profileImage}
        />

        <TouchableOpacity
          style={styles.bellContainer}
          onPress={() => navigation.navigate(ScreensEnum.NOTIFICATION_SCREEN as any)}
        >
          <Ionicons name="md-notifications-outline" size={25} color={colors.palette.primary500} />
        </TouchableOpacity>
      </View>

      {loading && spendFrequencyLoading ? (
        <View style={{ marginTop: 20 }}>
          <ActivityIndicator color="red" />
        </View>
      ) : (
        <View>
          {/* Balance */}

          <View style={styles.topBlock}>
            <Text text="Account Balance" preset="default" style={styles.accountBalanceText} />
            <Text text={`$${availableBalance}`} preset="heading" style={styles.amountText} />
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

            {spendFrequency.data && spendFrequency.label && (
              <MyLineChart data={spendFrequency.data} labels={spendFrequency.label} />
            )}

            {/* <MyLineChart data={spendFrequency.data} labels={spendFrequency.label} /> */}

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
                  <TouchableOpacity
                    style={styles.seeAllbtnBlock}
                    onPress={() => navigation.navigate(ScreensEnum.TRANSACTION as any)}
                  >
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
                  data={
                    transactionsByMonth.length > 4
                      ? transactionsByMonth.slice(0, 4)
                      : transactionsByMonth
                  }
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
        </View>
      )}
    </ScrollView>
  )
}

const $root: ViewStyle = {
  flex: 1,
}
