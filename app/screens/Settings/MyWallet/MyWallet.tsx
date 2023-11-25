import React, { FC, useEffect, useState } from "react"
import { ActivityIndicator, FlatList, View } from "react-native"
import { colors } from "app/theme"
import { ScreensEnum } from "app/enums"
import { Header, AutoImage, Button, Text, WalletListCard } from "app/components"
import { AppStackScreenProps } from "app/navigators"
import { RootState, useAppDispatch, useAppSelector } from "app/store/store"
import { getAllWallets } from "app/store/slices/wallet/walletService"
import { RefreshControl } from "react-native"
import styles from "./styles"

export const MyWalletScreen: FC<AppStackScreenProps<ScreensEnum.MY_WALLETS>> = ({ navigation }) => {
  const dispatch = useAppDispatch()

  const { wallets, loading } = useAppSelector((state: RootState) => state.wallet)
  const [availableBalance, setAvailableBalance] = useState<Number>(0)
  const [refreshing, setRefreshing] = useState<boolean>(false)

  const getTotalAvailableBalance = () => {
    const totalAmount = wallets.data.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.amount
    }, 0)
    setAvailableBalance(totalAmount)
  }

  useEffect(() => {
    getTotalAvailableBalance()
  }, [wallets])

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      dispatch(getAllWallets())
    })
    return unsubscribe
  }, [navigation])

  return (
    <>
      <Header title="My Wallets" leftIcon="back" onLeftPress={() => navigation.goBack()} />

      {loading ? (
        <View style={{ marginTop: 20 }}>
          <ActivityIndicator color="red" />
        </View>
      ) : (
        <View style={styles.root}>
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
                onPress={() => navigation.navigate("WalletDetail", { item })}
              />
            )}
            refreshControl={
              <RefreshControl
                colors={[colors.palette.accent500]}
                refreshing={refreshing}
                onRefresh={() => {
                  setRefreshing(true)
                  dispatch(getAllWallets())
                  setRefreshing(false)
                }}
              />
            }
          />
        </View>
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
