import React, { FC } from "react"
import { FlatList, View } from "react-native"
import { colors } from "app/theme"
import { ScreensEnum } from "app/enums"
import { observer } from "mobx-react-lite"
import { BudgetCard, Button, Text } from "app/components"
import { AppStackScreenProps } from "app/navigators"
import { cardsDummyData } from "./data"
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from "./styles"

export const BudgetScreen: FC<AppStackScreenProps<ScreensEnum.BUDGET>> = observer(
  ({ navigation }) => {
    return (
      <View style={styles.root}>
        <View style={styles.headerBlock}>
          <Text text="Budgets" preset="headerText" />

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
          <FlatList
            showsVerticalScrollIndicator={false}
            data={cardsDummyData}
            renderItem={({ item }) => (
              <BudgetCard
                cardData={item}
                onPress={(id) => navigation.navigate("BudgetDetail", { id })}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
            ListFooterComponent={
              <Button
                tx="budgetScreen.createBudget"
                preset="filled"
                onPress={() => navigation.navigate(ScreensEnum.CREATE_BUDGET as any)}
              />
            }
          />
        </View>
      </View>
    )
  },
)
export { cardsDummyData }
