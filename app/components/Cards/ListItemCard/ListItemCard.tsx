import React from "react"
import { colors } from "app/theme"
import { Text } from "app/components/Text/Text"
import { TouchableOpacity, View } from "react-native"
import { AutoImage } from "app/components/AutoImage/AutoImage"
import { TransactionCategoryI } from "app/interfaces"
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from "./styles"

interface ListItemCardI {
  item: TransactionCategoryI & { _id: string; selected: boolean }
  onPress: (_id: string) => void
}

const ListItemCard = ({ item, onPress }: ListItemCardI) => {
  return (
    <TouchableOpacity
      key={item._id}
      onPress={() => onPress(item._id)}
      style={[styles.renderCardBlock, item.selected && { borderColor: colors.palette.neutral600 }]}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {/* <AutoImage source={{ uri: item.icon }} style={styles.renderCardImage} /> */}
        <Text text={item.name} style={styles.renderCardText} />
      </View>

      {item.selected && <Ionicons name="checkmark-outline" size={22} color={colors.text} />}
    </TouchableOpacity>
  )
}

export { ListItemCard }
