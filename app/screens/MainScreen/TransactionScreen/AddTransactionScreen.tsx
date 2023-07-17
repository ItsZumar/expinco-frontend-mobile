import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { TextInput, TouchableOpacity, View } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Button, Header, Screen, Text, CategoryModal, WalletModal } from "app/components"
import { ScreensEnum } from "app/enums"
import { TransactionType } from "app/enums/transactions.enum"
import { colors } from "app/theme"
import { hp } from "app/utils/responsive"
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from "./styles"

export const AddTransactionScreen: FC<AppStackScreenProps<ScreensEnum.ADD_TRANSACTION>> = observer(
  ({ navigation, route }) => {
    const { type } = route.params

    const [showCategoryModal, setShowCategoryModal] = useState<boolean>(false)
    const [showWalletModal, setShowWalletModal] = useState<boolean>(false)

    return (
      <Screen>
        <View
          style={{
            height: hp(100),
            backgroundColor:
              type === TransactionType.INCOME ? colors.palette.income : colors.palette.expense,
          }}
        >
          <Header titleTx="common.income" leftIcon="back" onLeftPress={() => navigation.goBack()} />

          <View
            style={{
              flex: 1,
              justifyContent: "space-between",
            }}
          >
            <View style={{ marginHorizontal: 20, marginTop: hp(16) }}>
              <Text style={styles.subTitleText}>How much?</Text>
              <View style={styles.rowFlexStartCenter}>
                <Text style={styles.amountText}>$</Text>
                <TextInput
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
                <Text style={styles.itemTextHeading}>Select Category</Text>
                <Ionicons name="chevron-down" size={25} color="gray" />
              </TouchableOpacity>
              <View style={styles.itemContainer}>
                <TextInput
                  placeholder="Description"
                  autoCorrect={false}
                  style={styles.inputFieldStyle}
                />
              </View>
              <TouchableOpacity
                onPress={() => setShowWalletModal(true)}
                style={styles.itemContainer}
              >
                <Text style={styles.itemTextHeading}>Select Wallet</Text>
                <Ionicons name="chevron-down" size={25} color="gray" />
              </TouchableOpacity>

              <TouchableOpacity style={styles.attachmentBtn}>
                <Ionicons name="attach" size={25} color="gray" style={{ marginRight: 10 }} />
                <Text style={styles.itemTextHeading}>Add attachment</Text>
              </TouchableOpacity>

              <Button
                text={type === TransactionType.INCOME ? "Add Income" : "Add Expense"}
                onPress={() => {}}
                preset={type === TransactionType.INCOME ? "income" : "expense"}
                style={[{ marginTop: 40 }]}
              />
            </View>
          </View>
        </View>

        <CategoryModal
          isVisible={showCategoryModal}
          title="Choose Category"
          subTitle="Select the category of your transaction"
          onPressClose={() => setShowCategoryModal(false)}
          onPressDone={(data) => {
            setShowCategoryModal(false)
          }}
        />

        <WalletModal
          isVisible={showWalletModal}
          title="Choose Wallet"
          subTitle="Select the wallet for your transaction"
          onPressClose={() => setShowWalletModal(false)}
          onPressDone={(data) => {
            setShowWalletModal(false)
          }}
        />
      </Screen>
    )
  },
)
