import React, { FC, useEffect, useState } from "react"
import { FlatList, View } from "react-native"
import { ScreensEnum } from "app/enums"
import { observer } from "mobx-react-lite"
import { Header, Icon, Text, TransactionCard } from "app/components"
import { AppStackScreenProps } from "app/navigators"
import styles from "./styles"
import { myWalletsData } from "../MyWallet"
import { TransactionData } from "app/screens/MainScreen/TransactionScreen/data"

export const WalletDetailScreen: FC<AppStackScreenProps<ScreensEnum.WALLET_DETAIL>> = observer(
  ({ navigation, route }) => {
    const { id } = route.params
    const [state, setState] = useState([])
    const filteredWalletData = myWalletsData.filter((obj) => obj.id === id)

    useEffect(() => {
      setState(TransactionData)
    }, [])

    return (
      <View style={styles.rootContainer}>
        <Header
          title="Wallet Detail"
          leftIcon="back"
          onLeftPress={() => navigation.goBack()}
          rightIcon="edit"
        />

        <View style={styles.detailWalletContainer}>
          <View style={styles.iconContainer}>
            <Icon icon={filteredWalletData[0].icon} size={22} />
          </View>
          <Text text={filteredWalletData[0].walletTitle} style={styles.walletTitle} />
          <Text text={`$${filteredWalletData[0].amount.toString()}`} style={styles.walletAmount} />
        </View>

        <Text text="Today" style={styles.primaryHeading} />
        <FlatList
          data={state}
          keyExtractor={(item) => String(item._id)}
          style={styles.listStyle}
          renderItem={({ item }) => <TransactionCard {...item} onPress={() => {}} />}
        />
      </View>
    )
  },
)
