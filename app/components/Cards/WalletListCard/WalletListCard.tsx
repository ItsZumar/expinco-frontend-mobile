import React from "react"
import { Text } from "app/components/Text/Text"
import { TouchableOpacity, View } from "react-native"
import { Icon } from "app/components/Icon/Icon"
import { WalletI } from "app/interfaces"
import styles from "./styles"

interface WalletListCardI {
  walletData: WalletI
  onPress?: (id: string) => void
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
          <Icon icon={walletData?.icon ? walletData?.icon : "heart"} size={25} />
        </View>
        <Text text={walletData.name} preset="subheading" />
      </View>
      <Text text={`$${walletData.amount.toLocaleString()}`} preset="subheading" />
    </TouchableOpacity>
  )
}

export { WalletListCard }
