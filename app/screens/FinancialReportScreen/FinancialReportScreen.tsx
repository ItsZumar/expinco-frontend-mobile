import React, { FC, useEffect, useState } from "react"
import { View } from "react-native"
import { ScreensEnum } from "app/enums"
import { AppStackScreenProps } from "app/navigators"
import { PieGraphReportScreen } from "./PieGraphReportScreen/PieGraphReportScreen"
import { LineGraphReportScreen } from "./LineGraphReportScreen/LineGraphReportScreen"
import { ArrowRoundButton, Header, Screen, ToggleButton } from "app/components"
import { RootState, useAppSelector } from "app/store/store"
import styles from "./styles"
import { MonthSelector } from "app/components/MonthSelector/MonthSelector"

const FinancialReportScreen: FC<AppStackScreenProps<ScreensEnum.FINANCIAL_REPORT>> = ({
  navigation,
  route,
}) => {
  const { transactions, loading } = useAppSelector((state: RootState) => state.transaction)
  const [activeToggle, setActiveToggle] = useState<"left" | "right">("left")
  const [transactionsByMonth, setTransactionsByMonth] = useState<any>([])

  const onToggleBtnPress = (toggle: "left" | "right") => {
    setActiveToggle(toggle)
  }

  const [monthSelectorVisible, setMonthSelectorVisible] = useState(false)
  const [selectedMonth, setSelectedMonth] = useState(null)

  const handleMonthPress = () => {
    setMonthSelectorVisible(true)
  }

  const filterTransactionByCurrentMonth = async () => {
    const filteredTransactions = transactions?.data.filter((transaction) => {
      const createdDate = new Date(transaction.createdAt)
      const transactionMonth = createdDate.toLocaleString("en-US", { month: "long" })
      return transactionMonth === selectedMonth
    })
    await setTransactionsByMonth(filteredTransactions)
  }

  const handleMonthSelect = (month: any) => {
    setSelectedMonth(month)
    filterTransactionByCurrentMonth()
    setMonthSelectorVisible(false)
  }

  const handleMonthSelectorClose = () => {
    setMonthSelectorVisible(false)
  }

  useEffect(() => {
    const currentDate = new Date()
    const currentMonth = currentDate.toLocaleString("en-US", { month: "long" })
    setSelectedMonth(currentMonth)
  }, [])

  return (
    <>
      <Header
        titleTx="transactionScreen.financialReport"
        leftIcon="back"
        onLeftPress={() => navigation.goBack()}
      />
      <Screen
        preset="scroll"
        safeAreaEdges={["bottom"]}
        ScrollViewProps={{ showsVerticalScrollIndicator: false }}
        style={styles.screenStyle}
      >
        <View style={styles.topContainer}>
          <ArrowRoundButton title={selectedMonth} onPress={handleMonthPress} />

          <View style={styles.toggleScreenBtns}>
            <ToggleButton
              icon="line-graph"
              isActive={activeToggle === "left"}
              onPress={() => onToggleBtnPress("left")}
            />
            <ToggleButton
              icon="pie-chart"
              isActive={activeToggle === "right"}
              onPress={() => onToggleBtnPress("right")}
            />
          </View>
        </View>

        {activeToggle === "left" ? (
          <LineGraphReportScreen transactions={transactions} navigation={navigation} />
        ) : (
          <PieGraphReportScreen transactions={transactions} />
        )}
      </Screen>

      <MonthSelector
        visible={monthSelectorVisible}
        onClose={handleMonthSelectorClose}
        onSelect={handleMonthSelect}
      />
    </>
  )
}

export { FinancialReportScreen }
