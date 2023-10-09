import React, { ReactNode } from "react"
import { TouchableOpacity, View, Modal } from "react-native"
import { TxKeyPath } from "app/i18n"
import { Text } from "app/components/Text/Text"
import { colors } from "app/theme"
import { hp } from "app/utils/responsive"
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from "./styles"

interface Props {
  children: ReactNode
  isVisible: boolean
  title: string
  titleTx?: TxKeyPath
  onPressClose?: (value: boolean) => void
}

export const ModalHoc = ({ children, isVisible = false, title, titleTx, onPressClose }: Props) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => onPressClose(false)}
      >
        <View style={styles.modalView}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: hp(2),
            }}
          >
            <Text style={styles.TITLE} text={title} tx={titleTx} preset="bold" />
            <TouchableOpacity
              style={{
                padding: 5,
                backgroundColor: colors.palette.neutral200,
                justifyContent: "center",
                alignItems: "center",
                width: 32,
                height: 32,
                borderRadius: 16,
              }}
              onPress={() => onPressClose(false)}
            >
              <Ionicons name="close" size={22} />
            </TouchableOpacity>
          </View>
          {children}
        </View>
      </Modal>
    </View>
  )
}
