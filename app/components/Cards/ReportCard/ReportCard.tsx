import { useState } from "react"
import { View } from "react-native"
import { Text } from "app/components/Text/Text"
import { colors } from "app/theme"
import { TransactionI } from "app/interfaces"
import { TouchableOpacity } from "react-native"
import styles from "./styles"

export const ReportCards = ({ ...item }: TransactionI) => {
  const [categoryColor] = useState<string>(
    item.category.name === "Shopping"
      ? colors.palette.accent400
      : item.category.name === "Gaming"
      ? colors.palette.income
      : colors.palette.primary600,
  )
  return (
    <TouchableOpacity>
      <View style={styles.topPortion}>
        <View style={styles.budgetType}>
          <View style={[styles.budgetCircle, { backgroundColor: categoryColor }]}></View>
          <Text text={item.category.name} preset="default" />
        </View>
        <Text text={`-$${item.amount}`} preset="largeHeading" style={{ color: colors.error }} />
      </View>
      <View style={[styles.progressLine, { backgroundColor: colors.palette.primary500 }]}></View>
    </TouchableOpacity>
  )
}
