import React from "react"
import { TouchableOpacity } from "react-native"
import { Text } from "app/components/Text/Text"
import Ionicons from "react-native-vector-icons/Ionicons"
import { styles } from "./styles"
import { colors } from "app/theme"

interface ArrowRoundButtonI {
  title: string
  onPress: () => void
}

const ArrowRoundButton = ({ title, onPress }: ArrowRoundButtonI) => {
  return (
    <TouchableOpacity style={styles.monthContainer} onPress={onPress}>
      <Ionicons name="chevron-down" size={25} color={colors.palette.primary500} />
      <Text text={title} preset="bold" style={styles.monthText} />
    </TouchableOpacity>
  )
}

export { ArrowRoundButton }
