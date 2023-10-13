import React, { FC, useEffect, useState } from "react"
import { TextInput, TouchableOpacity, View } from "react-native"
import { hp } from "app/utils/responsive"
import { colors } from "app/theme"
import { ScreensEnum } from "app/enums"
import { TransactionType } from "app/enums/transactions.enum"
import { AppStackScreenProps } from "app/navigators"
import { TransactionCategoryI } from "app/interfaces"
import { Button, Header, Screen, Text, CategoryModal, WalletModal } from "app/components"
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from "./styles"
import { RootState, useAppDispatch, useAppSelector } from "app/store/store"
import { getAllWallets } from "app/store/slices/wallet/walletService"
import { WalletI } from "app/store/slices/wallet/types"
import { createTransaction } from "app/store/slices/transaction/transactionService"

export const AddTransactionScreen: FC<AppStackScreenProps<ScreensEnum.ADD_TRANSACTION>> = ({
  navigation,
  route,
}) => {
  const dispatch = useAppDispatch()
  const { type } = route.params
  const {
    wallets: { data: walletData },
  } = useAppSelector((state: RootState) => state.wallet)

  const [showCategoryModal, setShowCategoryModal] = useState<boolean>(false)
  const [showWalletModal, setShowWalletModal] = useState<boolean>(false)
  const [selectedCategory, setSelectedCategory] = useState<
    TransactionCategoryI & { selected: boolean }
  >()
  const [selectedWallet, setSelectedWallet] = useState<WalletI & { selected: boolean }>()
  const [amount, setAmount] = useState<string>("")
  const [description, setDescription] = useState<string>("")
  const [attachments, setAttachments] = useState<string[]>([])

  const onAddTransactionPress = async () => {
    await dispatch(
      createTransaction({
        type: type,
        amount: amount,
        category: selectedCategory._id,
        wallet: selectedWallet._id,
        description: description,
        attachments: attachments,
      }),
    )

    navigation.goBack()
  }

  useEffect(() => {
    dispatch(getAllWallets())
  }, [])

  return (
    <Screen>
      <View
        style={{
          height: hp(100),
          backgroundColor: type.match(TransactionType.INCOME)
            ? colors.palette.income
            : colors.palette.expense,
        }}
      >
        {/* type === TransactionType.INCOME ? "Add Income" : "Add Expense" */}
        <Header
          titleTx={type === TransactionType.INCOME ? "common.income" : "common.expense"}
          leftIcon="back"
          onLeftPress={() => navigation.goBack()}
        />

        <View style={styles.underHeaderBlock}>
          <View style={styles.amountBlock}>
            <Text style={styles.subTitleText}>How much?</Text>
            <View style={styles.rowFlexStartCenter}>
              <Text style={styles.amountText}>$</Text>
              <TextInput
                value={amount}
                onChangeText={setAmount}
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
                {selectedCategory?.name ? selectedCategory.name : `Select Category`}
              </Text>
              <Ionicons name="chevron-down" size={25} color="gray" />
            </TouchableOpacity>
            <View style={styles.itemContainer}>
              <TextInput
                value={description}
                placeholder="Description"
                autoCorrect={false}
                style={styles.inputFieldStyle}
                onChangeText={setDescription}
              />
            </View>

            <TouchableOpacity onPress={() => setShowWalletModal(true)} style={styles.itemContainer}>
              <Text style={styles.itemTextHeading}>
                {selectedWallet?.name ? selectedWallet.name : `Select Wallet`}
              </Text>
              <Ionicons name="chevron-down" size={25} color="gray" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.attachmentBtn}>
              <Ionicons name="attach" size={25} color="gray" style={styles.spacingRight} />
              <Text style={styles.itemTextHeading}>Add attachment</Text>
            </TouchableOpacity>

            <Button
              text={type === TransactionType.INCOME ? "Add Income" : "Add Expense"}
              onPress={onAddTransactionPress}
              preset={type === TransactionType.INCOME ? "income" : "expense"}
              style={styles.spacingTop}
            />
          </View>
        </View>
      </View>

      <CategoryModal
        isVisible={showCategoryModal}
        selectedItem={selectedCategory}
        title="Choose Category"
        subTitle="Select the category of your transaction"
        onPressClose={() => setShowCategoryModal(false)}
        onPressDone={(data) => {
          setSelectedCategory(data[0])
          setShowCategoryModal(false)
        }}
      />

      <WalletModal
        isVisible={showWalletModal}
        title="Choose Wallet"
        subTitle="Select the wallet for your transaction"
        onPressClose={() => setShowWalletModal(false)}
        onPressDone={(data) => {
          setSelectedWallet(data[0])
          setShowWalletModal(false)
        }}
        ownerWallets={walletData}
      />
    </Screen>
  )
}
