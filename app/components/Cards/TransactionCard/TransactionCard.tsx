import React from "react"
import { TouchableOpacity, View } from "react-native"
import { getTimeFromDateString } from "app/utils/formatDate"
import { TransactionType } from "app/enums/transactions.enum"
import { AutoImage } from "app/components/AutoImage/AutoImage"
import { Text } from "app/components/Text/Text"
import { TransactionI } from "app/store/slices/transaction/types"
import { colors } from "app/theme"
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
    <View style={styles.card}>
      <TouchableOpacity onPress={() => onPress(_id)} style={styles.container}>
        <View style={styles.imageBlock}>
          <AutoImage
            source={
              category?.icon?.secureURL
                ? { uri: category?.icon?.secureURL }
                : { uri: "https://picsum.photos/302" }
            }
            style={styles.categoryImage}
          />
        </View>

        <View style={styles.textBlock}>
          <View>
            <Text text={category.name} preset="subheading" />
            <Text text={description} numberOfLines={1} style={styles.descText} />
          </View>
          <View style={styles.lastTextBlock}>
            <Text
              text={(type === TransactionType.EXPENSE ? "- " : "+ ") + "$" + amount.toString()}
              preset="subheading"
              style={[
                styles.amountText,
                type === TransactionType.EXPENSE
                  ? { color: colors.palette.expense }
                  : { color: colors.palette.income },
              ]}
            />
            <Text text={getTimeFromDateString(createdAt)} style={styles.timeText} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}
