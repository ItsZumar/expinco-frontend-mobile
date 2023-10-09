import React, { FC, useState } from "react"
import { FlatList, View } from "react-native"
import { observer } from "mobx-react-lite"
import { ScreensEnum } from "app/enums"
import { TransactionData, myWalletsData } from "app/constants"
import { AppStackScreenProps } from "app/navigators"
import { AppHeader, Header, Icon, Screen, Text, TransactionCard } from "app/components"
import styles from "./styles"

export const WalletDetailScreen: FC<AppStackScreenProps<ScreensEnum.WALLET_DETAIL>> = observer(
  ({ navigation, route }) => {
    const { id } = route.params
    const [state] = useState(TransactionData)

    const filteredWalletData = myWalletsData.filter((obj) => obj.id === id)

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
              <Icon icon={filteredWalletData[0].icon} size={22} />
            </View>
            <Text text={filteredWalletData[0].name} preset="largeHeading" />
            <Text text={`$${filteredWalletData[0].amount.toString()}`} preset="heading" />
          </View>

          <AppHeader text="Today" />

          <View style={{ flex: 1 }}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={state}
              keyExtractor={(item) => String(item._id)}
              renderItem={({ item }) => <TransactionCard {...item} onPress={() => {}} />}
            />
          </View>
        </Screen>
      </>
    )
  },
)
