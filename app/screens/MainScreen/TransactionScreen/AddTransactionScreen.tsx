import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { TextInput, TouchableOpacity, View } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Button, Header, Screen, Text, CategoryModal } from "app/components"
import { ScreensEnum } from "app/enums"
import { TransactionType } from "app/enums/transactions.enum"
import { colors } from "app/theme"
import { hp } from "app/utils/responsive"
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from "./styles"

export const AddTransactionScreen: FC<AppStackScreenProps<ScreensEnum.ADD_TRANSACTION>> = observer(
  ({ navigation, route }) => {
    const { type } = route.params

    const [showCategoryModal, setShowCategoryModal] = useState<boolean>(false);

    return (
      <Screen
        backgroundColor={
          type === TransactionType.INCOME ? colors.palette.income : colors.palette.expense
        }
      >
        <View
          style={{
            height: hp(100),
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
                  placeholderTextColor="#fff"
                  keyboardType="number-pad"
                />
              </View>
            </View>

            <View style={styles.secondHalfContainer}>
              <TouchableOpacity style={styles.itemContainer} onPress={() => setShowCategoryModal(true)}>
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
              <TouchableOpacity style={styles.itemContainer}>
                <Text style={styles.itemTextHeading}>Select Wallet</Text>
                <Ionicons name="chevron-down" size={25} color="gray" />
              </TouchableOpacity>
              <View style={styles.attachmentBtn}>
                <Ionicons name="attach" size={25} color="gray" style={{ marginRight: 10 }} />
                <Text style={styles.itemTextHeading}>Add attachment</Text>
              </View>

              <Button
                text={type === TransactionType.INCOME ? "Add Income" : "Add Expense"}
                onPress={() => {}}
                preset="filled"
                style={[
                  { marginTop: 40 },
                  type === TransactionType.INCOME
                    ? { backgroundColor: colors.palette.income }
                    : { backgroundColor: colors.palette.expense },
                ]}
              />
            </View>
          </View>
        </View>

        <CategoryModal
          isVisible={showCategoryModal}
          title="Select Category"
          subTitle="Select the category of your transaction"
          onPressClose={() => setShowCategoryModal(false)}
          onPressDone={(data) => {
            setShowCategoryModal(false)
          }}
        />
      </Screen>
    )
  },
)
