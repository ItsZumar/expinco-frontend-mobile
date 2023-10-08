import React from "react"
import { Text } from "app/components/Text/Text"
import { TouchableOpacity, View } from "react-native"
import { Icon } from "app/components/Icon/Icon"
import styles from "./styles"

interface WalletListCardI {
  walletData: {
    id: number
    icon: string | any
    walletTitle: string
    amount: number
  }
  onPress: (id: number) => void
}

const WalletListCard = ({ walletData, onPress }: WalletListCardI) => {
  return (
    <TouchableOpacity
      key={walletData.id}
      style={styles.walletCardContainer}
      onPress={() => onPress(walletData.id)}
    >
      <View style={styles.innerLeftContainer}>
        <View style={styles.iconContainer}>
          <Icon icon={walletData.icon} size={25} />
        </View>
        <Text text={walletData.walletTitle} preset="subheading" />
      </View>
      <Text text={`$${walletData.amount}`} preset="subheading" />
    </TouchableOpacity>
  )
}

export { WalletListCard }
