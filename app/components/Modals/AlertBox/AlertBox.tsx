import React from "react"
import { Text } from "app/components/Text/Text"
import { typography } from "app/theme"
import { hp, wp } from "app/utils/responsive"
import { Modal, View, Pressable, GestureResponderEvent, Button } from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from "./styles"

interface PropsI {
  open: boolean
  onClose: () => void
  autoClose?: boolean
  type: "error" | "success"
  title: string
  description: string
  hideButtons?: boolean
  buttonJSX?: any
  primaryButtonText?: string
  secondaryButtonText?: string
  primaryButtonPreset?: any
  secondaryButtonPreset?: any
  primaryOnClick?: () => void
  secondaryOnClick?: () => void
  checkIcon?: boolean
}

const AlertBox = ({
  open = false,
  onClose,
  type,
  description,
  primaryButtonText,
  secondaryButtonText,
  primaryButtonPreset,
  secondaryButtonPreset,
  primaryOnClick,
  secondaryOnClick,
  checkIcon,
}: PropsI) => {
  if (!open) {
    return null
  }

  let onBackDropPress = (event: GestureResponderEvent) => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  return (
    <View style={styles.centeredView}>
      <Modal animationType="fade" transparent={true} visible={open} onRequestClose={() => {}}>
        <Pressable style={styles.centeredView} onPress={onBackDropPress}>
          <View style={styles.modalView}>
            {checkIcon && (
              <View
                style={[
                  styles.typeBlock,
                  type.match("error") ? styles.typeErrorBlock : styles.typeSuccessBlock,
                ]}
              >
                <Ionicons
                  name="checkmark-outline"
                  size={22}
                  color={type.match("error") ? "red" : "white"}
                />
              </View>
            )}

            <Text
              text={description}
              style={{ textAlign: "center", fontSize: 14, fontFamily: typography.primary.semiBold }}
            />

            {/* changes */}
            <View style={{ flexDirection: "row", paddingHorizontal: wp(17), marginTop: hp(1) }}>
              {primaryButtonPreset && (
                <Button
                  text={primaryButtonText}
                  preset="filled"
                  onPress={primaryOnClick}
                  style={{ width: wp(43) }}
                />
              )}
              {secondaryButtonPreset && (
                <Button
                  text={secondaryButtonText}
                  preset="filled"
                  onPress={secondaryOnClick}
                  style={{ width: wp(43) }}
                />
              )}
            </View>
          </View>
        </Pressable>
      </Modal>
    </View>
  )
}

export { AlertBox }
