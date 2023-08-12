import React, { FC } from "react"
import { ScrollView, View } from "react-native"
import { colors } from "app/theme"
import { ScreensEnum } from "app/enums"
import { observer } from "mobx-react-lite"
import { Header, AutoImage, Button, Text } from "app/components"
import { AppStackScreenProps } from "app/navigators"
import styles from "./styles"
import { WalletListCard } from "app/components/Cards/WalletListCard/WalletListCard"

export const myWalletsData = [
  {
    id: 1,
    icon: "chase",
    walletTitle: "Chase",
    amount: 400,
  },
  {
    id: 2,
    icon: "citi",
    walletTitle: "Citi",
    amount: 9000,
  },
  {
    id: 3,
    icon: "paypal",
    walletTitle: "Paypal",
    amount: 10000,
  },
  {
    id: 4,
    icon: "wallet",
    walletTitle: "Wallet",
    amount: 10000,
  },
]

export const MyWalletScreen: FC<AppStackScreenProps<ScreensEnum.MY_WALLETS>> = observer(
  ({ navigation }) => {
    return (
      <View style={styles.root}>
        <Header title="My Wallets" leftIcon="back" onLeftPress={() => navigation.goBack()} />

        <View style={styles.totalBalanceContainer}>
          <AutoImage
            source={require("../../../../assets/images/wallets-bg.png")}
            style={styles.totalBalanceImage}
          />

          <Text text="Available Balance" style={{ color: colors.textDim }} />
          <Text text="$21,350" preset="heading" />
        </View>

        <ScrollView style={styles.walletList}>
          {myWalletsData.map((walletData) => (
            <WalletListCard
              walletData={walletData}
              onPress={(id) => navigation.navigate("WalletDetail", { id })}
            />
          ))}
        </ScrollView>

        <View style={styles.addWalletBtnContainer}>
          <Button
            text="Add Wallet"
            preset="filled"
            style={styles.addWalletBtn}
            onPress={() => navigation.navigate(ScreensEnum.CREATE_WALLET as any)}
          />
        </View>
      </View>
    )
  },
)
