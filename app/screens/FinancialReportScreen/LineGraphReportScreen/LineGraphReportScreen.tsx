import React, { useEffect, useState } from "react"
import { FlatList, TouchableOpacity, View } from "react-native"
import { hp } from "app/utils/responsive"
import { ScreensEnum } from "app/enums"
import { RootState, useAppDispatch, useAppSelector } from "app/store/store"
import { getSpendFrequencyService } from "app/store/slices/analytics/analyticsService"
import { AppHeader, MyLineChart, Text, TransactionCard } from "app/components"
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from "./styles"

interface LineGraphReportScreenI {
  navigation: any
}

export const LineGraphReportScreen = ({ navigation }: LineGraphReportScreenI) => {
  const dispatch = useAppDispatch()
  const { monthlyTransactions } = useAppSelector((state: RootState) => state.transaction)
  const { spendFrequency } = useAppSelector((state: RootState) => state.spendFrequency)
  const [transactionType, setTransactionType] = useState<"expense" | "income" | string>("expense")

  const getFilteredTransactionsByType = (type: "expense" | "income" | string) => {
    return monthlyTransactions.data.filter(
      (transaction: { type: string }) =>
        (type === "expense" && transaction.type.toLowerCase() === "expense") ||
        (type === "income" && transaction.type.toLowerCase() === "income"),
    )
  }

  const getTotalAmount = (type: "expense" | "income" | string) => {
    const filteredTransactions = getFilteredTransactionsByType(type)
    const totalAmount = filteredTransactions.reduce(
      (total, transaction) => total + transaction.amount,
      0,
    )
    return totalAmount
  }

  const onToggleBtnPress = (toggle: "expense" | "income" | string) => {
    setTransactionType(toggle)
  }

  useEffect(() => {
    dispatch(getSpendFrequencyService({ orderBy: "MONTH" }))
  }, [])

  useEffect(() => {
    setTransactionType("expense")
  }, [])

  return (
    <View style={styles.mainContainer}>
      <Text text={`$${getTotalAmount(transactionType)}`} preset="heading" style={styles.amount} />

      <MyLineChart data={spendFrequency.data} labels={spendFrequency.label} />

      <View style={styles.btnContainer}>
        {["expense", "income"].map((type) => (
          <TouchableOpacity
            key={type}
            style={[styles.btn, transactionType === type && styles.activeBtn]}
            onPress={() => onToggleBtnPress(type)}
          >
            <Text
              preset="subheading"
              text={type === "expense" ? "Expense" : "Income"}
              style={transactionType === type && styles.activeBtnTxt}
            />
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.transactionHeader}>
        <AppHeader text="Transaction" />
        {/* <TouchableOpacity>
          <Ionicons
            name="filter-outline"
            size={25}
            color={colors.palette.neutral900}
            style={{ padding: 5 }}
          />
        </TouchableOpacity> */}
      </View>

      <FlatList
        data={getFilteredTransactionsByType(transactionType)}
        keyExtractor={(item) => String(item._id)}
        renderItem={({ item }) => (
          <TransactionCard
            {...item}
            onPress={() => navigation.navigate(ScreensEnum.DETAIL_TRANSACTION, { item })}
          />
        )}
        ListEmptyComponent={() => (
          <Text
            text="You don't have any transaction!"
            preset="subheading"
            style={{ marginVertical: hp(1) }}
          />
        )}
      />
    </View>
  )
}
