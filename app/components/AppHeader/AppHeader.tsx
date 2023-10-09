import React, { ReactNode } from "react"
import { TextStyle, View, TouchableOpacity } from "react-native"
import { TxKeyPath } from "app/i18n"
import { Text } from "../Text/Text"
import styles from "./styles"

interface Props {
  text?: string
  tx?: TxKeyPath
  textStyle?: TextStyle
  rightComponent?: () => ReactNode
  onRightPress?: () => void
}

const AppHeader = ({ text, tx, textStyle = {}, rightComponent, onRightPress }: Props) => {
  return (
    <View style={styles.opportunitiesBlock}>
      <View style={styles.headerContainer}>
        <View style={styles.lineBlock} />
        <Text text={text} tx={tx} preset="subheading" style={textStyle} />
      </View>

      {rightComponent && (
        <TouchableOpacity style={styles.rightBlock} onPress={onRightPress}>
          {rightComponent()}
        </TouchableOpacity>
      )}
    </View>
  )
}

export { AppHeader }
