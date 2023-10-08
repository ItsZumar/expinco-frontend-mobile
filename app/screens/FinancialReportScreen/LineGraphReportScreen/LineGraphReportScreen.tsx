import React, { useState } from "react"
import { FlatList, TouchableOpacity, View } from "react-native"
import { colors } from "app/theme"
import { ScreensEnum } from "app/enums"
import { TransactionI } from "app/interfaces"
import { AppHeader, MyLineChart, Text, TransactionCard } from "app/components"
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from "./styles"

interface LineGraphReportScreenI {
  totalAmount: string | number
  transactions: TransactionI[]
  navigation: any
}

export const LineGraphReportScreen = ({
  totalAmount,
  transactions,
  navigation,
}: LineGraphReportScreenI) => {
  const [activeToggle, setActiveToggle] = useState<"expense" | "income">("expense")

  const onToggleBtnPress = (toggle: "expense" | "income") => {
    setActiveToggle(toggle)
  }

  return (
    <View style={styles.mainContainer}>
      {/* Amount */}
      <Text text={`$${totalAmount}`} preset="heading" style={styles.amount} />

      {/* Line Chart */}
      <MyLineChart />

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
        data={transactions}
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
