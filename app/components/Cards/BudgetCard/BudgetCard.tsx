import React from "react"
import { colors } from "app/theme"
import { Text } from "app/components/Text/Text"
import { TouchableOpacity, View } from "react-native"
import styles from "./styles"
import { Icon } from "app/components/Icon/Icon"

interface BudgetCardI {
  cardData: {
    id: number
    bugetType: string
    remainingAmount: number
    totalAmount: number
    expenseAmount: number
    color: string
  }
  onPress: (id: number) => void
}

const BudgetCard = ({ cardData, onPress }: BudgetCardI) => {
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      key={cardData.id}
      onPress={() => onPress(cardData.id)}
    >
      <View style={styles.cardHeader}>
        <View style={styles.budgetType}>
          <View style={[styles.budgetCircle, { backgroundColor: cardData.color }]}></View>
          <Text text={cardData.bugetType} preset="default" />
        </View>
        {cardData.expenseAmount > cardData.totalAmount && (
          <Icon icon="alert" size={22} color={colors.error} />
        )}
      </View>

      <Text
        text={`Remaining $${cardData.remainingAmount}`}
        style={styles.remainingAmount}
        preset="largeHeading"
      />
      <View style={[styles.progressLine, { backgroundColor: cardData.color }]}></View>

      <Text text={`$${cardData.expenseAmount} of $${cardData.totalAmount}`} preset="default" />

      <View>
        {cardData.expenseAmount > cardData.totalAmount && (
          <Text text="You have exceed the limit!" preset="default" style={styles.alertText} />
        )}
      </View>
    </TouchableOpacity>
  )
}

export { BudgetCard }
