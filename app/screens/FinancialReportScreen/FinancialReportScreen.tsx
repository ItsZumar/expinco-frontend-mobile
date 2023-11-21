import React, { FC, useEffect, useState } from "react"
import { View } from "react-native"
import { ScreensEnum } from "app/enums"
import { AppStackScreenProps } from "app/navigators"
import { PieGraphReportScreen } from "./PieGraphReportScreen/PieGraphReportScreen"
import { LineGraphReportScreen } from "./LineGraphReportScreen/LineGraphReportScreen"
import { ArrowRoundButton, Header, Screen, ToggleButton } from "app/components"
import { RootState, useAppDispatch, useAppSelector } from "app/store/store"
import styles from "./styles"
import { MonthSelector } from "app/components/MonthSelector/MonthSelector"
import { getTransactionsByMonth } from "app/store/slices/transaction/transactionService"

const FinancialReportScreen: FC<AppStackScreenProps<ScreensEnum.FINANCIAL_REPORT>> = ({
  navigation,
  route,
}) => {
  const dispatch = useAppDispatch()
  const [activeToggle, setActiveToggle] = useState<"left" | "right">("left")

  const onToggleBtnPress = (toggle: "left" | "right") => {
    setActiveToggle(toggle)
  }

  const [monthSelectorVisible, setMonthSelectorVisible] = useState(false)
  const [selectedMonth, setSelectedMonth] = useState(null)

  const handleMonthPress = () => {
    setMonthSelectorVisible(true)
  }

  const handleMonthSelect = async (month: any) => {
    setSelectedMonth(month)
    await dispatch(getTransactionsByMonth({ month: month }))
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

  useEffect(() => {
    dispatch(getTransactionsByMonth({ month: selectedMonth }))
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
          <LineGraphReportScreen navigation={navigation} />
        ) : (
          <PieGraphReportScreen navigation={navigation} />
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
