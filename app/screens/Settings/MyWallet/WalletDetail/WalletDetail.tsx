import React, { FC, useEffect, useState } from "react"
import { FlatList, View } from "react-native"
import { ScreensEnum } from "app/enums"
import { AppStackScreenProps } from "app/navigators"
import { RootState, useAppSelector } from "app/store/store"
import { AppHeader, Header, Screen, Text, TransactionCard } from "app/components"
import styles from "./styles"

export const WalletDetailScreen: FC<AppStackScreenProps<ScreensEnum.WALLET_DETAIL>> = ({
  navigation,
  route,
}) => {
  const { item } = route.params
  const { transactions } = useAppSelector((state: RootState) => state.transaction)
  const [transactionsByWallet, setTransactionsByWallet] = useState<any>(null)

  const getTransactionsByWalletName = () => {
    const transactionss = transactions.data.filter((el) => el.wallet.name == item.name)
    setTransactionsByWallet(transactionss)
  }

  useEffect(() => {
    getTransactionsByWalletName()
  }, [])

  return (
    <>
      <Header
        title="Wallet Detail"
        leftIcon="back"
        onLeftPress={() => navigation.goBack()}
        rightIcon="edit"
        onRightPress={() => {}}
      />

      <Screen
        preset="scroll"
        style={styles.mainContainer}
        safeAreaEdges={["bottom"]}
        ScrollViewProps={{ showsVerticalScrollIndicator: false }}
      >
        <View style={styles.detailWalletContainer}>
          <View style={styles.iconContainer}>
            {/* <Icon icon={filteredWalletData[0].icon} size={22} /> */}
          </View>
          <Text text={item.name} preset="largeHeading" />
          <Text text={`$${item.amount.toString()}`} preset="heading" />
        </View>

        <AppHeader text="Today" />

        <View style={{ flex: 1 }}>
          {transactionsByWallet != null && transactionsByWallet.length != 0 ? (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={transactionsByWallet}
              keyExtractor={(item) => String(item._id)}
              renderItem={({ item }) => (
                <TransactionCard
                  {...item}
                  onPress={() =>
                    navigation.navigate(ScreensEnum.DETAIL_TRANSACTION as any, { item })
                  }
                />
              )}
            />
          ) : (
            <Text preset="subheading" text="There is no Transaction!" />
          )}
        </View>
      </Screen>
    </>
  )
}
