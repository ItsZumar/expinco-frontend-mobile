import React, { FC, useEffect, useState } from "react"
import { FlatList, TouchableOpacity, View } from "react-native"
import { ScreensEnum } from "app/enums"
import { AppStackScreenProps } from "app/navigators"
import { RootState, useAppDispatch, useAppSelector } from "app/store/store"
import { AppHeader, AutoImage, Header, Icon, Screen, Text, TransactionCard } from "app/components"
import styles from "./styles"
import { getAllTransactions } from "app/store/slices/transaction/transactionService"
import { deleteWallet } from "app/store/slices/wallet/walletService"

export const WalletDetailScreen: FC<AppStackScreenProps<ScreensEnum.WALLET_DETAIL>> = ({
  navigation,
  route,
}) => {
  const dispatch = useAppDispatch()

  const { item } = route.params
  const { transactions } = useAppSelector((state: RootState) => state.transaction)
  const [transactionsByWallet, setTransactionsByWallet] = useState<any>([])

  const getTransactionsByWalletName = async () => {
    const transactionss = transactions.data.filter((el) => el.wallet.name == item.name)
    setTransactionsByWallet(transactionss)
  }

  useEffect(() => {
    getTransactionsByWalletName()
  }, [])

  useEffect(() => {
    dispatch(getAllTransactions())
  }, [])

  const deleteWalletHandler = async () => {
    await dispatch(deleteWallet({ id: item._id }))
    navigation.goBack()
  }

  return (
    <>
      <Header
        title="Wallet Detail"
        leftIcon="back"
        onLeftPress={() => navigation.goBack()}
        RightActionComponent={
          <View style={styles.headerIcons}>
            <TouchableOpacity
              onPress={() => navigation.navigate(ScreensEnum.EDIT_WALLET as any, { item })}
            >
              <Icon icon="edit" size={22} style={{ marginRight: 5 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteWalletHandler()}>
              <Icon icon="delete" size={22} />
            </TouchableOpacity>
          </View>
        }
        rightIcon="edit"
        onRightPress={() => {
          navigation.navigate(ScreensEnum.EDIT_WALLET, { item })
        }}
      />

      <Screen
        preset="scroll"
        style={styles.mainContainer}
        safeAreaEdges={["bottom"]}
        ScrollViewProps={{ showsVerticalScrollIndicator: false }}
      >
        <View style={styles.detailWalletContainer}>
          <View style={styles.iconContainer}>
            <AutoImage
              source={item?.icon?.secureURL ? { uri: item?.icon?.secureURL } : null}
              style={styles.renderCardImage}
            />
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
