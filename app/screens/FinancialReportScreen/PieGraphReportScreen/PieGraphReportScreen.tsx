import React, { useState } from "react"
import { FlatList, TouchableOpacity, View } from "react-native"
import { colors } from "app/theme"
import { TransactionI } from "app/interfaces"
import { AppHeader, MyPieChart, ReportCards, Text } from "app/components"
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from "./styles"

interface PieGraphReportScreenI {
  totalAmount: string | number
  transactions: TransactionI[]
}

export const PieGraphReportScreen = ({ totalAmount, transactions }: PieGraphReportScreenI) => {
  const [activeToggle, setActiveToggle] = useState<"expense" | "income">("expense")

  const onToggleBtnPress = (toggle: "expense" | "income") => {
    setActiveToggle(toggle)
  }

  return (
    <View style={styles.mainContainer}>
      <Text text={`$${totalAmount}`} preset="heading" style={styles.amount} />

      <MyPieChart />

      {/* Income Expense Toggle Button */}
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={[styles.btn, activeToggle === "expense" && styles.activeBtn]}
          onPress={() => onToggleBtnPress("expense")}
        >
          <Text
            preset="subheading"
            text="Expense"
            style={activeToggle === "expense" && styles.activeBtnTxt}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, activeToggle === "income" && styles.activeBtn]}
          onPress={() => onToggleBtnPress("income")}
        >
          <Text
            preset="subheading"
            text="Income"
            style={activeToggle === "income" && styles.activeBtnTxt}
          />
        </TouchableOpacity>
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
        data={transactions}
        keyExtractor={(item) => String(item._id)}
        renderItem={({ item }) => <ReportCards {...item} />}
      />
    </View>
  )
}
