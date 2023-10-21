import React, { useState } from "react"
import { FlatList, TouchableOpacity, View } from "react-native"
import { colors } from "app/theme"
import { AppHeader, MyPieChart, ReportCards, Text } from "app/components"
import { GetTransactionListI } from "app/store/slices/transaction/types"
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from "./styles"

interface PieGraphReportScreenI {
  transactions: GetTransactionListI["result"]
}

const PieGraphReportScreen: React.FC<PieGraphReportScreenI> = ({ transactions }) => {
  const [activeToggle, setActiveToggle] = useState<"expense" | "income" | string>("expense")

  const onToggleBtnPress = (toggle: "expense" | "income" | string) => {
    setActiveToggle(toggle)
  }

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

  const filteredTransactions = getFilteredTransactions(activeToggle)

  return (
    <View style={styles.mainContainer}>
      <Text text={`$${getTotalAmount(activeToggle)}`} preset="heading" style={styles.amount} />
      <MyPieChart transactions={transactions} />

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
        data={filteredTransactions}
        keyExtractor={(item) => String(item._id)}
        renderItem={({ item }) => <ReportCards {...item} />}
      />
    </View>
  )
}

export { PieGraphReportScreen }
