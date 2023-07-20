import React, { FC } from "react"
import { ScrollView, TouchableOpacity, View } from "react-native"
import { colors } from "app/theme"
import { ScreensEnum } from "app/enums"
import { hp, wp } from "app/utils/responsive"
import { observer } from "mobx-react-lite"
import { Header, TextField, AutoImage, Button, Text } from "app/components"
import { AppStackScreenProps } from "app/navigators"
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from "./styles"

export const MyWalletScreen: FC<AppStackScreenProps<ScreensEnum.MY_WALLETS>> = observer(
  ({ navigation }) => {
    return (
      <View style={styles.root}>
        <Header title="My Wallets" leftIcon="back" onLeftPress={() => navigation.goBack()} />

        <View style={{height: hp(20), justifyContent: 'center', alignItems: 'center'}}>
          <AutoImage
            source={require("../../../../assets/images/wallets-bg.png")}
            style={{ width: "100%", height: hp(20), position: "absolute" }}
          />

          <Text text="Available Balance" style={{ color: colors.textDim }} />
          <Text text="$21,350" preset="heading" />
        </View>

        <ScrollView style={{ paddingHorizontal: wp(5), paddingTop: 20 }}></ScrollView>

        <View style={{ paddingHorizontal: wp(5) }}>
          <Button text="Add Wallet" preset="filled" style={{ position: "absolute", bottom: 20 }} />
        </View>
      </View>
    )
  },
)
