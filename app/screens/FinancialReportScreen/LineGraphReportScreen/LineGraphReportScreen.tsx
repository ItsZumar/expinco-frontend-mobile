import React, { useEffect, useState } from "react"
import { ActivityIndicator, FlatList, TouchableOpacity, View } from "react-native"
import { colors } from "app/theme"
import { ScreensEnum } from "app/enums"
import { AppHeader, MyLineChart, Text, TransactionCard } from "app/components"
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from "./styles"
import { GetTransactionListI } from "app/store/slices/transaction/types"
import { RootState, useAppDispatch, useAppSelector } from "app/store/store"
import { getSpendFrequencyService } from "app/store/slices/analytics/analyticsService"

interface LineGraphReportScreenI {
  transactions: GetTransactionListI["result"]
  navigation: any
}

export const LineGraphReportScreen = ({ transactions, navigation }: LineGraphReportScreenI) => {
  const dispatch = useAppDispatch()
  const { spendFrequency, loading: spendFrequencyLoading } = useAppSelector(
    (state: RootState) => state.spendFrequency,
  )
  const [activeToggle, setActiveToggle] = useState<"expense" | "income" | string>("expense")

  const getFilteredTransactions = (toggle: "expense" | "income" | string) => {
    return transactions.data.filter(
      (transaction: { type: string }) =>
        (toggle === "expense" && transaction.type.toLowerCase() === "expense") ||
        (toggle === "income" && transaction.type.toLowerCase() === "income"),
    )
  }

  const getTotalAmount = (toggle: "expense" | "income" | string) => {
    const filteredTransactions = getFilteredTransactions(toggle)
    const totalAmount = filteredTransactions.reduce(
      (total, transaction) => total + transaction.amount,
      0,
    )
    return totalAmount
  }

  const onToggleBtnPress = (toggle: "expense" | "income" | string) => {
    setActiveToggle(toggle)
  }

  useEffect(() => {
    dispatch(getSpendFrequencyService({ orderBy: "MONTH" }))
  }, [])

  return (
    <View style={styles.mainContainer}>
      <Text text={`$${getTotalAmount(activeToggle)}`} preset="heading" style={styles.amount} />

      {spendFrequencyLoading ? (
        <View style={{ marginTop: 20 }}>
          <ActivityIndicator color="red" />
        </View>
      ) : (
        <MyLineChart data={spendFrequency.data} labels={spendFrequency.label} />
      )}

      <View style={styles.btnContainer}>
        {["expense", "income"].map((type) => (
          <TouchableOpacity
            key={type}
            style={[styles.btn, activeToggle === type && styles.activeBtn]}
            onPress={() => onToggleBtnPress(type)}
          >
            <Text
              preset="subheading"
              text={type === "expense" ? "Expense" : "Income"}
              style={activeToggle === type && styles.activeBtnTxt}
            />
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.transactionHeader}>
        <AppHeader text="Transaction" />
        <TouchableOpacity>
          <Ionicons
            name="filter-outline"
            size={25}
            color={colors.palette.neutral900}
            style={{ padding: 5 }}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={getFilteredTransactions(activeToggle)}
        keyExtractor={(item) => String(item._id)}
        renderItem={({ item }) => (
          <TransactionCard
            {...item}
            onPress={() => navigation.navigate(ScreensEnum.DETAIL_TRANSACTION)}
          />
        )}
      />
    </View>
  )
}
