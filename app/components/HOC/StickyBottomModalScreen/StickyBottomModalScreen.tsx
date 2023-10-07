import React, { ReactNode } from "react"
import { View, Modal, TouchableWithoutFeedback } from "react-native"
import styles from "./styles"

interface Props {
  children: ReactNode
  isVisible: boolean
  onPressClose?: () => void
  onBackdropPress: () => void
}

const StickyBottomModalHoc = ({
  children,
  isVisible = false,
  onPressClose,
  onBackdropPress,
}: Props) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onPressClose}
      //   {...rest}
    >
      <TouchableWithoutFeedback onPress={onBackdropPress}>
        <View style={styles.backdrop}>
          <View style={styles.modalBg}>{children}</View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

export { StickyBottomModalHoc }
