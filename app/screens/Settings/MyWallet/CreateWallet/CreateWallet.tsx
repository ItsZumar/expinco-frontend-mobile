import React, { FC, useState } from "react"
import { colors } from "app/theme"
import { ScreensEnum } from "app/enums"
import { hp } from "app/utils/responsive"
import { AppStackScreenProps } from "app/navigators"
import { TransactionCategoryI } from "app/interfaces"
import { TextInput, TouchableOpacity, View } from "react-native"
import { Button, Header, Screen, Text, WalletModal } from "app/components"
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from "./styles"
import { useAppDispatch } from "app/store/store"
import { createWallet } from "app/store/slices/wallet/walletService"

export const CreateWallet: FC<AppStackScreenProps<ScreensEnum.CREATE_WALLET>> = ({
  navigation,
}) => {
  const dispatch = useAppDispatch()
  const [showCategoryModal, setShowCategoryModal] = useState<boolean>(false)
  const [selectedCategory, setSelectedCategory] = useState<
    TransactionCategoryI & { selected: boolean }
  >()

  const [state, setState] = useState<{ name: string; amount: string }>({
    name: "",
    amount: "",
  })

  const [isEnabled, setIsEnabled] = useState(false)

  const submitBtn = async () => {
    try {
      await dispatch(
        createWallet({
          name: state.name,
          amount: parseInt(state.amount),
        }),
      )

      navigation.goBack()
    } catch (error) {
      console.error("Error creating wallet:", error)
    }
  }

  return (
    <Screen>
      <View
        style={{
          height: hp(100),
          backgroundColor: colors.palette.primary500,
        }}
      >
        <Header
          titleTx="walletScreen.createWallet"
          leftIcon="back"
          onLeftPress={() => navigation.goBack()}
        />

        <View style={styles.underHeaderBlock}>
          <View style={styles.amountBlock}>
            <Text style={styles.subTitleText}>Balance</Text>
            <View style={styles.rowFlexStartCenter}>
              <Text style={styles.amountText}>$</Text>
              <TextInput
                value={state.amount}
                onChangeText={(text) => setState({ ...state, amount: text })}
                style={[styles.amountText, { flex: 1 }]}
                placeholder="0"
                placeholderTextColor={colors.palette.neutral100}
                keyboardType="number-pad"
              />
            </View>
          </View>

          <View style={styles.secondHalfContainer}>
            <TouchableOpacity
              style={styles.itemContainer}
              onPress={() => setShowCategoryModal(true)}
            >
              <Text style={styles.itemTextHeading}>
                {selectedCategory?.name ? selectedCategory.name : `Select Wallet Type`}
              </Text>
              <Ionicons name="chevron-down" size={25} color="gray" />
            </TouchableOpacity>

            <Button
              text="Continue"
              preset="filled"
              onPress={submitBtn}
              style={[styles.spacingTop, styles.spacingBottom]}
            />
          </View>
        </View>
      </View>

      <WalletModal
        isVisible={showCategoryModal}
        selectedItem={selectedCategory}
        title="Choose Wallet Type"
        subTitle="Select the Wallet"
        onPressClose={() => setShowCategoryModal(false)}
        onPressDone={(data) => {
          setSelectedCategory(data[0])
          setState({ ...state, name: data[0].name })
          setShowCategoryModal(false)
        }}
      />
    </Screen>
  )
}
