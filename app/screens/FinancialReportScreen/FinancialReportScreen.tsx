import React, { FC, useState } from "react"
import { View } from "react-native"
import { ScreensEnum } from "app/enums"
import { AppStackScreenProps } from "app/navigators"
import { PieGraphReportScreen } from "./PieGraphReportScreen/PieGraphReportScreen"
import { LineGraphReportScreen } from "./LineGraphReportScreen/LineGraphReportScreen"
import { ArrowRoundButton, Header, Screen, ToggleButton } from "app/components"
import { RootState, useAppSelector } from "app/store/store"
import styles from "./styles"

const FinancialReportScreen: FC<AppStackScreenProps<ScreensEnum.FINANCIAL_REPORT>> = ({
  navigation,
  route,
}) => {
  const { transactions, loading } = useAppSelector((state: RootState) => state.transaction)
  const [activeToggle, setActiveToggle] = useState<"left" | "right">("left")

  const onToggleBtnPress = (toggle: "left" | "right") => {
    setActiveToggle(toggle)
  }

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
          <ArrowRoundButton title="July" onPress={() => {}} />

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
    </>
  )
}

export { FinancialReportScreen }
