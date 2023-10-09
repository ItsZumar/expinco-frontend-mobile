import React from "react"
import { View } from "react-native"
import { observer } from "mobx-react-lite"
import { Text, Button, StickyBottomModalHoc } from "app/components"
import styles from "./styles"

interface PropsI {
  isVisible: boolean
  title: string
  message: string
  primaryBtnText: string
  secondaryBtnText: string
  onModalClose: () => void
  onBtnPress: () => void
  onBackdropPress: () => void
}

export const AlertBottomModal = observer(
  ({
    isVisible = false,
    title,
    primaryBtnText,
    secondaryBtnText,
    message,
    onModalClose,
    onBtnPress,
    onBackdropPress,
  }: PropsI) => {
    return (
      <StickyBottomModalHoc
        isVisible={isVisible}
        onPressClose={onModalClose}
        onBackdropPress={onBackdropPress}
      >
        <View>
          <Text text={title} preset="subheading" style={styles.spacing} />
          {message && <Text preset="description" text={message} style={styles.spacing} />}
          <View style={styles.btnContainer}>
            {secondaryBtnText && (
              <View style={styles.btnStyles}>
                <Button text={secondaryBtnText} preset="default" onPress={onModalClose} />
              </View>
            )}
            {primaryBtnText && (
              <View style={styles.btnStyles}>
                <Button text={primaryBtnText} preset="filled" onPress={() => onBtnPress()} />
              </View>
            )}
          </View>
        </View>
      </StickyBottomModalHoc>
    )
  },
)
