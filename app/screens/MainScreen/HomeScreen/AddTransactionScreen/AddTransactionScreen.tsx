import React, { FC, useEffect, useState } from "react"
import { Image, TextInput, TouchableOpacity, View } from "react-native"
import { hp, wp } from "app/utils/responsive"
import { colors } from "app/theme"
import { ScreensEnum } from "app/enums"
import { TransactionType } from "app/enums/transactions.enum"
import { AppStackScreenProps } from "app/navigators"
import { TransactionCategoryI } from "app/interfaces"
import { Button, Header, Text, CategoryModal, WalletModal } from "app/components"
import { RootState, useAppDispatch, useAppSelector } from "app/store/store"
import { getAllWallets } from "app/store/slices/wallet/walletService"
import { WalletI } from "app/store/slices/wallet/types"
import { createTransaction } from "app/store/slices/transaction/transactionService"
import { launchImageLibrary } from "react-native-image-picker"
import { uploadImageToCloudinary } from "app/utils/uploadImage"
import { showMessage } from "react-native-flash-message"
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from "./styles"

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
  const [selectedAttachment, setSelectedAttachment] = useState(null)
  const [attachmentUpload, setAttachmentUpload] = useState<boolean>(false)
  const [attachments, setAttachments] = useState<any>(null)

  const onAddTransactionPress = async () => {
    if (attachmentUpload) {
      await uploadImageToCloudinary(selectedAttachment)
      const file = await uploadImageToCloudinary(selectedAttachment)

      await dispatch(
        createTransaction({
          type: type,
          amount: amount,
          category: selectedCategory._id,
          wallet: selectedWallet._id,
          description: description,
          attachments: [file._id],
        }),
      )

      navigation.goBack()
    } else {
      showMessage({
        type: "danger",
        message: "Error: Something is missing!",
      })
    }
  }

  const uploadAttachment = async () => {
    let result = await launchImageLibrary({
      mediaType: "photo",
    })

    if (result?.assets) {
      const selectedImageUri = result.assets[0].uri
      setSelectedAttachment(result.assets[0])
      setAttachmentUpload(true)
      setAttachments({ ...attachments, uri: selectedImageUri })
    }
  }

  useEffect(() => {
    dispatch(getAllWallets())
  }, [])

  return (
    <View>
      <Header
        titleTx={type === TransactionType.INCOME ? "common.income" : "common.expense"}
        leftIcon="back"
        onLeftPress={() => navigation.goBack()}
      />
      <View
        style={{
          // flex: 1,
          height: hp(100),
          backgroundColor: type.match(TransactionType.INCOME)
            ? colors.palette.income
            : colors.palette.expense,
        }}
      >
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

            <TouchableOpacity style={styles.attachmentBtn} onPress={uploadAttachment}>
              {attachments ? (
                <>
                  <Image
                    source={attachments}
                    style={{ width: wp(13), height: hp(6), borderRadius: hp(1) }}
                  />
                </>
              ) : (
                <>
                  <Ionicons name="attach" size={25} color="gray" style={styles.spacingRight} />
                  <Text style={styles.itemTextHeading}>Add attachment</Text>
                </>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.spacingTop}>
        <Button
          text={type === TransactionType.INCOME ? "Add Income" : "Add Expense"}
          onPress={onAddTransactionPress}
          preset={type === TransactionType.INCOME ? "income" : "expense"}
        />
      </View>

      <CategoryModal
        isVisible={showCategoryModal}
        selectedItem={selectedCategory}
        title="Choose Category"
        onPressClose={() => setShowCategoryModal(false)}
        onPressDone={(data) => {
          setSelectedCategory(data[0])
          setShowCategoryModal(false)
        }}
      />

      <WalletModal
        isVisible={showWalletModal}
        title="Choose Wallet"
        onPressClose={() => setShowWalletModal(false)}
        onPressDone={(data) => {
          setSelectedWallet(data[0])
          setShowWalletModal(false)
        }}
        navigation={navigation}
      />
    </View>
  )
}
