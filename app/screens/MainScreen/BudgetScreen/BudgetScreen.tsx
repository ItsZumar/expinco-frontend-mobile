import React, { FC } from "react"
import { View } from "react-native"
import { colors } from "app/theme"
import { ScreensEnum } from "app/enums"
import { observer } from "mobx-react-lite"
import { Button, Text } from "app/components"
import { AppStackScreenProps } from "app/navigators"
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from "./styles"

export const BudgetScreen: FC<AppStackScreenProps<ScreensEnum.TRANSACTION>> = observer(
  ({ navigation }) => {
    return (
      <View style={styles.root}>
        <View style={styles.headerBlock}>
          <Text text="Budgets" preset="bold" style={styles.headerText} />

          <View style={styles.displayHidden}>
            <Ionicons
              name="filter-outline"
              size={25}
              color={colors.palette.neutral100}
              style={styles.p5}
            />
          </View>
        </View>

        <View style={styles.createBudgetBtn}>
          <Button tx="budgetScreen.createBudget" preset="filled" />
        </View>
      </View>
    )
  },
)
