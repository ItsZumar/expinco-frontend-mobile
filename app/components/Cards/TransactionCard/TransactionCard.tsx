import React from "react"
import { TouchableOpacity, View } from "react-native"
import { AutoImage, Text } from "../../"
import { TransactionI } from "app/interfaces"
import { getTimeFromDateString } from "app/utils/formatDate"
import { TransactionType } from "app/enums/transactions.enum"
import styles from "./styles"

export type TransactionCardI = TransactionI & {
  onPress: (_id: string) => void
}

export const TransactionCard = ({
  _id,
  category,
  description,
  type,
  amount,
  createdAt,
  onPress,
}: TransactionCardI) => {
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity onPress={() => onPress(_id)} style={styles.container}>
        <View style={styles.imageBlock}>
          <AutoImage source={{ uri: category.icon }} style={styles.categoryImage} />
        </View>

        <View style={styles.textBlock}>
          <View>
            <Text text={category.name} style={styles.categoryText} />
            <Text text={description} numberOfLines={1} style={styles.descText} />
          </View>
          <View style={styles.lastTextBlock}>
            <Text
              text={`$` + type === TransactionType.EXPENSE ? "- " : "+ " + amount.toString()}
              style={[
                styles.amountText,
                type === TransactionType.EXPENSE ? { color: "#FD3C4A" } : { color: "#00A86B" },
              ]}
            />
            <Text text={getTimeFromDateString(createdAt)} style={styles.timeText} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}
