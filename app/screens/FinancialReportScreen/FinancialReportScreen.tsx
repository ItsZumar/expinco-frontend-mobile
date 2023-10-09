import React, { FC, useState } from "react"
import { TouchableOpacity, View } from "react-native"
import { colors } from "app/theme"
import { observer } from "mobx-react-lite"
import { ScreensEnum } from "app/enums"
import { AppStackScreenProps } from "app/navigators"
import { TransactionData } from "app/constants"
import { PieGraphReportScreen } from "./PieGraphReportScreen/PieGraphReportScreen"
import { LineGraphReportScreen } from "./LineGraphReportScreen/LineGraphReportScreen"
import { Header, Screen, Text, ToggleButton } from "app/components"
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from "./styles"

const FinancialReportScreen: FC<AppStackScreenProps<ScreensEnum.FINANCIAL_REPORT>> = observer(
  ({ navigation, route }) => {
    const [transactions] = useState<any>(TransactionData)
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
            <TouchableOpacity style={styles.monthContainer}>
              <Ionicons name="chevron-down" size={25} color={colors.palette.primary500} />
              <Text text="July" preset="bold" />
            </TouchableOpacity>

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
            <LineGraphReportScreen
              totalAmount={"332"}
              transactions={transactions}
              navigation={navigation}
            />
          ) : (
            <PieGraphReportScreen totalAmount={"6000"} transactions={transactions} />
          )}
        </Screen>
      </>
    )
  },
)

export { FinancialReportScreen }
