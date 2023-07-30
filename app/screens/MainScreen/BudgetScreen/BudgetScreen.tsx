import React, { FC } from "react"
import { View } from "react-native"
import { colors } from "app/theme"
import { ScreensEnum } from "app/enums"
import { observer } from "mobx-react-lite"
import { Button, Text } from "app/components"
import { AppStackScreenProps } from "app/navigators"
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from "./styles"
import { hp, wp } from "app/utils/responsive"
import { BudgetCard } from "app/components/Cards/BudgetCard/BudgetCard"

export const BudgetScreen: FC<AppStackScreenProps<ScreensEnum.BUDGET>> = observer(
  ({ navigation }) => {
    const cardsDummyData = [
      {
        id: 1,
        bugetType: "Shopping",
        remainingAmount: 0,
        totalAmount: 1000,
        expenseAmount: 1200,
        color: colors.palette.accent500,
      },
      {
        id: 2,
        bugetType: "Transportation",
        remainingAmount: 350,
        totalAmount: 700,
        expenseAmount: 350,
        color: colors.palette.secondary500,
      },
    ]

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

        <View style={styles.innerContainer}>
          {cardsDummyData.map((cardData) => (
            <BudgetCard cardData={cardData} />
          ))}
        </View>

        <View style={styles.createBudgetBtn}>
          <Button
            tx="budgetScreen.createBudget"
            preset="filled"
            onPress={() => navigation.navigate(ScreensEnum.CREATE_BUDGET as any)}
          />
        </View>
      </View>
    )
  },
)
