import React from "react"
import { View, TouchableOpacity, Modal, FlatList } from "react-native"
import { Text } from "app/components/Text/Text"
import Icon from "react-native-vector-icons/Entypo"
import styles from "./styles"

interface MonthSelectorI {
  visible: boolean
  onClose: () => void
  onSelect: (item: any) => void
}

export const MonthSelector = ({ visible, onClose, onSelect }: MonthSelectorI) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  return (
    <Modal transparent visible={visible} onRequestClose={onClose}>
      <View style={styles.mainContainer}>
        <View style={styles.menu}>
          <FlatList
            data={months}
            showsVerticalScrollIndicator={false}
            keyExtractor={(index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => onSelect(item)} style={styles.menuOpts}>
                <Text text={item} preset="default" />
              </TouchableOpacity>
            )}
          />
          <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
            <Icon name="cross" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}
