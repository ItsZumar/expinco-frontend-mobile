import { colors } from "app/theme"
import { FC } from "react"
import { TouchableOpacity } from "react-native"
import Entypo from "react-native-vector-icons/Entypo"
import styles from "./styles"

interface ToggleBtnProps {
  icon: string
  isActive: boolean
  onPress: () => void
}

const ToggleButton: FC<ToggleBtnProps> = ({ icon, isActive, onPress }) => (
  <TouchableOpacity
    style={[styles.toggleBtn, isActive && styles.activeToggleBtn]}
    onPress={onPress}
  >
    <Entypo
      name={icon}
      size={25}
      style={isActive ? styles.activeToggleBtnIcon : styles.toggleBtnIcon}
    />
  </TouchableOpacity>
)

export { ToggleButton }
