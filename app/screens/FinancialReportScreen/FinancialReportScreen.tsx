import React, { FC, useEffect, useState } from "react"
import { View } from "react-native"
import { ScreensEnum } from "app/enums"
import { AppStackScreenProps } from "app/navigators"
import { useAppDispatch } from "app/store/store"
import { MonthSelector } from "app/components"
import { PieGraphReportScreen } from "./PieGraphReportScreen/PieGraphReportScreen"
import { LineGraphReportScreen } from "./LineGraphReportScreen/LineGraphReportScreen"
import { ArrowRoundButton, Header, Screen, ToggleButton } from "app/components"
import { getTransactionsByMonth } from "app/store/slices/transaction/transactionService"
import styles from "./styles"

const FinancialReportScreen: FC<AppStackScreenProps<ScreensEnum.FINANCIAL_REPORT>> = ({
  navigation,
  route,
}) => {
  const dispatch = useAppDispatch()
  const [activeToggle, setActiveToggle] = useState<"left" | "right">("left")

  const onToggleBtnPress = (toggle: "left" | "right") => {
    setActiveToggle(toggle)
  }

  const [monthSelectorVisible, setMonthSelectorVisible] = useState<boolean>(false)
  const [selectedMonth, setSelectedMonth] = useState<string>("")

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
    dispatch(getTransactionsByMonth({ month: currentMonth }))
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
