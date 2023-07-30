import React from "react"
import { colors } from "app/theme"
import { Text } from "app/components/Text/Text"
import { View } from "react-native"
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
}

const BudgetCard = ({ cardData }: BudgetCardI) => {
  return (
    <View style={styles.cardContainer} key={cardData.id}>
      <View style={styles.cardHeader}>
        <View style={styles.budgetType}>
          <View style={[styles.budgetCircle, { backgroundColor: cardData.color }]}></View>
          <Text text={cardData.bugetType} style={{ textTransform: "capitalize" }} />
        </View>
        {cardData.expenseAmount > cardData.totalAmount && (
          <Icon icon="alert" size={22} color={colors.error} />
        )}
      </View>

      <View>
        <Text text={`Remaining $${cardData.remainingAmount}`} style={styles.remainingAmount} />
      </View>
      <View style={[styles.progressLine, { backgroundColor: cardData.color }]}></View>

      <Text text={`$${cardData.expenseAmount} of $${cardData.totalAmount}`} style={styles.amount} />
      <View style={{}}>
        {cardData.expenseAmount > cardData.totalAmount ? (
          <View>
            <Text text="You have exceed the limit!" style={styles.alertText} />
          </View>
        ) : (
          <Text text="" />
        )}
      </View>
    </View>
  )
}

export { BudgetCard }
