import React, { FC } from "react"
import { ScreensEnum } from "app/enums"
import { observer } from "mobx-react-lite"
import { AppStackScreenProps } from "app/navigators"
import { View } from "react-native"
import { Button, Text } from "app/components"
import { hp, wp } from "app/utils/responsive"
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from "./styles"

export const BudgetScreen: FC<AppStackScreenProps<ScreensEnum.TRANSACTION>> = observer(
  ({ navigation }) => {
    return (
      <View style={styles.root}>
        <View style={styles.headerBlock}>
          <Text text="Budgets" preset="bold" style={styles.headerText} />

          <View style={{ opacity: 0 }}>
            <Ionicons name="filter-outline" size={25} color="#262626" style={{ padding: 5 }} />
          </View>
        </View>

        <View style={styles.createBudgetBtn}>
          <Button tx="budgetScreen.createBudget" preset="filled" />
        </View>
      </View>
    )
  },
)
