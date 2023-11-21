import React, { FC, useEffect, useState } from "react"
import { ActivityIndicator, FlatList, View } from "react-native"
import { colors } from "app/theme"
import { ScreensEnum } from "app/enums"
import { Header, AutoImage, Button, Text, WalletListCard, Screen } from "app/components"
import { AppStackScreenProps } from "app/navigators"
import { RootState, useAppSelector } from "app/store/store"
import styles from "./styles"

export const MyWalletScreen: FC<AppStackScreenProps<ScreensEnum.MY_WALLETS>> = ({ navigation }) => {
  const { wallets, loading } = useAppSelector((state: RootState) => state.wallet)
  const [availableBalance, setAvailableBalance] = useState<Number>(0)

  const getTotalAvailableBalance = () => {
    const totalAmount = wallets.data.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.amount
    }, 0)
    setAvailableBalance(totalAmount)
  }

  useEffect(() => {
    getTotalAvailableBalance()
  }, [wallets])

  return (
    <>
      <Header title="My Wallets" leftIcon="back" onLeftPress={() => navigation.goBack()} />

      {loading ? (
        <View style={{ marginTop: 20 }}>
          <ActivityIndicator color="red" />
        </View>
      ) : (
        <Screen
          preset="scroll"
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

            <Text text={`$${availableBalance.toLocaleString()}`} preset="heading" />
          </View>
          <FlatList
            data={wallets.data}
            keyExtractor={(item) => item._id}
            renderItem={({ item }: any) => (
              <WalletListCard
                walletData={item}
                onPress={(id) => navigation.navigate("WalletDetail", { item })}
              />
            )}
          />
        </Screen>
      )}
      <View style={styles.btnContainer}>
        <Button
          text="Add Wallet"
          preset="filled"
          onPress={() => navigation.navigate(ScreensEnum.CREATE_WALLET as any)}
        />
      </View>
    </>
  )
}
