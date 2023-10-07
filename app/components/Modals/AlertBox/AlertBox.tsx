import React from "react"
import { Text } from "app/components/Text/Text"
import { colors, typography } from "app/theme"
import { hp, wp } from "app/utils/responsive"
import { Modal, View, Pressable, GestureResponderEvent, StyleSheet, Button } from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"

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
  autoClose = false,
  type,
  title,
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

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.1)",
    zIndex: 1,
  },
  modalView: {
    width: wp(80),
    alignItems: "center",
    borderRadius: wp(3),
    backgroundColor: colors.palette.neutral100,
    padding: 20,
  },
  typeBlock: {
    width: hp(6),
    height: hp(6),
    borderRadius: hp(4),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  typeSuccessBlock: {
    backgroundColor: colors.palette.primary500,
    color: "white",
  },
  typeErrorBlock: {
    backgroundColor: "#FFDBDB",
    color: "red",
  },
  title: {
    textAlign: "center",
    marginBottom: 13,
    fontWeight: "bold",
  },
  description: { textAlign: "center" },

  primaryButton: { width: wp(70), paddingVertical: hp(1), marginTop: 20 },
  secondaryButton: { width: wp(70), paddingVertical: hp(1), marginTop: 12 },
})
