import React, { useState } from "react"
import { FlatList, TouchableOpacity, View } from "react-native"
import { hp } from "app/utils/responsive"
import { ScreensEnum } from "app/enums"
import { RootState, useAppSelector } from "app/store/store"
import { AppHeader, MyPieChart, ReportCards, Text } from "app/components"
import styles from "./styles"

interface PieGraphReportScreenI {
  navigation: any
}

const PieGraphReportScreen: React.FC<PieGraphReportScreenI> = ({ navigation }) => {
  const { monthlyTransactions } = useAppSelector((state: RootState) => state.transaction)

  const [activeToggle, setActiveToggle] = useState<"expense" | "income" | string>("expense")

  const onToggleBtnPress = (toggle: "expense" | "income" | string) => {
    setActiveToggle(toggle)
  }

  const getFilteredTransactions = (toggle: "expense" | "income" | string) => {
    return monthlyTransactions.data.filter(
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

  const filteredTransactions = getFilteredTransactions(activeToggle)

  return (
    <View style={styles.mainContainer}>
      <Text text={`$${getTotalAmount(activeToggle)}`} preset="heading" style={styles.amount} />
      <MyPieChart transactions={monthlyTransactions} />

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
        <AppHeader text="Category" />
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
        data={filteredTransactions}
        keyExtractor={(item) => String(item._id)}
        renderItem={({ item }) => (
          <ReportCards
            item={item}
            onPress={() => navigation.navigate(ScreensEnum.DETAIL_TRANSACTION, { item })}
          />
        )}
        ListEmptyComponent={() => (
          <Text
            text="You don't have any transaction!"
            preset="subheading"
            style={{ marginVertical: hp(2) }}
          />
        )}
      />
    </View>
  )
}

export { PieGraphReportScreen }
