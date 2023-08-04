import React, { FC } from "react"
import { FlatList, View } from "react-native"
import { colors } from "app/theme"
import { ScreensEnum } from "app/enums"
import { observer } from "mobx-react-lite"
import { Button, Text } from "app/components"
import { AppStackScreenProps } from "app/navigators"
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from "./styles"
import { hp, wp } from "app/utils/responsive"
import { BudgetCard } from "app/components/Cards/BudgetCard/BudgetCard"
import { cardsDummyData } from "./data"

export const BudgetScreen: FC<AppStackScreenProps<ScreensEnum.BUDGET>> = observer(
  ({ navigation }) => {
    const renderBudgetCard = ({ item }: any) => (
      <BudgetCard cardData={item} onPress={(id) => navigation.navigate("BudgetDetail", { id })} />
    )

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
          <FlatList
            data={cardsDummyData}
            renderItem={renderBudgetCard}
            keyExtractor={(item) => item.id.toString()} // Assuming "id" is unique
          />
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
export { cardsDummyData }
