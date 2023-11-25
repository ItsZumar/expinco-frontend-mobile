import React, { FC, useState } from "react"
import { TextInput, TouchableOpacity, View } from "react-native"
import { hp } from "app/utils/responsive"
import { colors } from "app/theme"
import { EditWalletI, WalletI } from "app/store/slices/wallet/types"
import { ScreensEnum } from "app/enums"
import { updateWallet } from "app/store/slices/wallet/walletService"
import { useAppDispatch } from "app/store/store"
import { AppStackScreenProps } from "app/navigators"
import { Button, Header, Screen, Text, WalletModal } from "app/components"
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from "./styles"

export const EditWallet: FC<AppStackScreenProps<ScreensEnum.EDIT_WALLET>> = ({
  navigation,
  route,
}) => {
  const { item } = route.params
  const dispatch = useAppDispatch()
  const [showCategoryModal, setShowCategoryModal] = useState<boolean>(false)
  const [selectedCategory, setSelectedCategory] = useState<(WalletI & { selected: boolean }) | any>(
    {
      name: item?.name,
    },
  )
  const [state, setState] = useState<EditWalletI>({
    name: item?.name,
    amount: String(item?.amount),
  })

  const submitBtn = async () => {
    try {
      await dispatch(
        updateWallet({
          id: item?._id,
          name: selectedCategory?.name,
          amount: parseInt(state.amount),
        }),
      )

      navigation.navigate(ScreensEnum.MY_WALLETS)
      setState({ name: "", amount: "" })
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
          titleTx="walletScreen.editWallet"
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
              disabled={true}
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

      {/* <AlertBox
        checkIcon={true}
        open={alertModalVisible}
        type="success"
        description="Wallet Successfully Created"
        onClose={onCloseAlertBoxPress}
        title={""}
      /> */}

      <WalletModal
        isVisible={showCategoryModal}
        selectedItem={selectedCategory}
        title="Choose Wallet Type"
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
