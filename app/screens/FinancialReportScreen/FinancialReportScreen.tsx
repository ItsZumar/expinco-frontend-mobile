import React, { FC, useEffect, useState } from "react"
import { ActivityIndicator, ScrollView, View } from "react-native"
import { ScreensEnum } from "app/enums"
import { AppStackScreenProps } from "app/navigators"
import { useAppDispatch } from "app/store/store"
import { MonthSelector, Text } from "app/components"
import { PieGraphReportScreen } from "./PieGraphReportScreen/PieGraphReportScreen"
import { LineGraphReportScreen } from "./LineGraphReportScreen/LineGraphReportScreen"
import { ArrowRoundButton, Header, ToggleButton } from "app/components"
import { getTransactionsByMonth } from "app/store/slices/transaction/transactionService"
import { hp } from "app/utils/responsive"
import styles from "./styles"
import { colors } from "app/theme"

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
  const [refresh, setRefresh] = useState<boolean>(false)

  const handleMonthPress = () => {
    setMonthSelectorVisible(true)
  }

  const handleMonthSelect = async (month: any) => {
    setRefresh(true)
    setMonthSelectorVisible(false)
    setSelectedMonth(month)
    await dispatch(getTransactionsByMonth({ month: month }))
    setRefresh(false)
  }

  const handleMonthSelectorClose = () => {
    setMonthSelectorVisible(false)
  }

  useEffect(() => {
    setRefresh(true)
    const currentDate = new Date()
    const currentMonth = currentDate.toLocaleString("en-US", { month: "long" })
    dispatch(getTransactionsByMonth({ month: currentMonth }))
    setSelectedMonth(currentMonth)
    setRefresh(false)
  }, [])

  return (
    <>
      <Header
        titleTx="transactionScreen.financialReport"
        leftIcon="back"
        onLeftPress={() => navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.screenStyle}>
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

        {refresh ? (
          <View
            style={{
              marginTop: hp(10),
              alignItems: "center",
            }}
          >
            <ActivityIndicator color={colors.palette.primary500} size={25} />
            <Text text="Loading..." style={{ color: "black", marginTop: hp(1) }} />
          </View>
        ) : (
          <>
            {activeToggle === "left" ? (
              <LineGraphReportScreen navigation={navigation} />
            ) : (
              <PieGraphReportScreen navigation={navigation} />
            )}
          </>
        )}
      </ScrollView>

      <MonthSelector
        visible={monthSelectorVisible}
        onClose={handleMonthSelectorClose}
        onSelect={handleMonthSelect}
      />
    </>
  )
}

export { FinancialReportScreen }
