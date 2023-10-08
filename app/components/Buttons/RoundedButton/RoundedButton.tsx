import React from "react"
import { StyleProp, TextStyle, TouchableOpacity, ViewStyle } from "react-native"
import { Text } from "app/components/Text/Text"
import styles from "./styles"

interface RoundedButtonI {
  id?: string
  name: string
  isSelected?: boolean
  onPress: () => void
  containerStyle?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
}

const RoundedButton = ({
  id,
  name,
  onPress,
  isSelected,
  containerStyle,
  textStyle,
}: RoundedButtonI) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      key={id}
      style={[styles.btnStyle, isSelected && styles.selectedBtnStyle, containerStyle]}
    >
      <Text
        text={name}
        preset="bold"
        style={[styles.textStyle, isSelected && styles.selectedTextStyle, textStyle]}
      />
    </TouchableOpacity>
  )
}

export { RoundedButton }
