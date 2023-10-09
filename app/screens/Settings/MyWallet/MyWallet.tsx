import React, { FC, useState } from "react"
import { FlatList, View } from "react-native"
import { colors } from "app/theme"
import { ScreensEnum } from "app/enums"
import { observer } from "mobx-react-lite"
import { Header, AutoImage, Button, Text, WalletListCard, Screen } from "app/components"
import { AppStackScreenProps } from "app/navigators"
import { myWalletsData } from "app/constants"
import { WalletI } from "app/interfaces"
import styles from "./styles"

export const MyWalletScreen: FC<AppStackScreenProps<ScreensEnum.MY_WALLETS>> = observer(
  ({ navigation }) => {
    const [state] = useState<WalletI[]>(myWalletsData)

    return (
      <>
        <Header title="My Wallets" leftIcon="back" onLeftPress={() => navigation.goBack()} />
        <Screen
          // preset="scroll"
          safeAreaEdges={["bottom"]}
          ScrollViewProps={{ showsVerticalScrollIndicator: false }}
          style={styles.root}
        >
          <View style={styles.totalBalanceContainer}>
            <AutoImage
              source={require("../../../../assets/images/wallets-bg.png")}
              style={styles.totalBalanceImage}
            />
            <Text text="Available Balance" style={{ color: colors.textDim }} />
            <Text text="$21,350" preset="heading" />
          </View>

          <FlatList
            data={[...state]}
            keyExtractor={(item) => item.id}
            renderItem={({ item }: any) => (
              <WalletListCard
                walletData={item}
                onPress={(id) => navigation.navigate("WalletDetail", { id })}
              />
            )}
          />

          <View style={styles.addWalletBtnContainer}>
            <Button
              text="Add Wallet"
              preset="filled"
              onPress={() => navigation.navigate(ScreensEnum.CREATE_WALLET as any)}
            />
          </View>
        </Screen>
      </>
    )
  },
)
