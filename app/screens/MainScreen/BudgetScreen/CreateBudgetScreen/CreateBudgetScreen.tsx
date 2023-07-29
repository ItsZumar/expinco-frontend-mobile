import React, { FC, useState } from "react"
import { colors } from "app/theme"
import { ScreensEnum } from "app/enums"
import { hp } from "app/utils/responsive"
import { observer } from "mobx-react-lite"
import { AppStackScreenProps } from "app/navigators"
import { TransactionType } from "app/enums/transactions.enum"
import { TransactionCategoryI, WalletI } from "app/interfaces"
import { Switch, TextInput, TouchableOpacity, View } from "react-native"
import { Button, Header, Screen, Text, CategoryModal, WalletModal } from "app/components"
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from "./styles"

export const CreateBudgetScreen: FC<AppStackScreenProps<ScreensEnum.CREATE_BUDGET>> = observer(
  ({ navigation, route }) => {
    const [showCategoryModal, setShowCategoryModal] = useState<boolean>(false)
    const [selectedCategory, setSelectedCategory] = useState<
      TransactionCategoryI & { selected: boolean }
    >()

    const [isEnabled, setIsEnabled] = useState(false)
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState)

    return (
      <Screen>
        <View
          style={{
            height: hp(100),
            backgroundColor: colors.palette.primaryPurple,
          }}
        >
          <Header
            titleTx="budgetScreen.createBudget"
            leftIcon="back"
            onLeftPress={() => navigation.goBack()}
          />

          <View style={styles.underHeaderBlock}>
            <View style={styles.amountBlock}>
              <Text style={styles.subTitleText}>How much do you want to spend?</Text>
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
                <Text style={styles.itemTextHeading}>
                  {selectedCategory?.name ? selectedCategory.name : `Select Category`}
                </Text>
                <Ionicons name="chevron-down" size={25} color="gray" />
              </TouchableOpacity>

              <View style={styles.recieveAlertContainer}>
                <View style={styles.recieveAlertInnerContainer}>
                  <Text text="Recieve Alert" style={styles.recieveAlertHeading} />
                  <Text
                    text="Recieve Alert when reaches some point."
                    style={styles.recieveAlertText}
                  />
                </View>
                <Switch
                  trackColor={{ false: "#767577", true: colors.palette.primaryPurple }}
                  thumbColor={isEnabled ? colors.palette.neutral100 : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>

              <Button
                text="Continue"
                preset="filled"
                onPress={() => {}}
                style={[styles.spacingTop, styles.spacingBottom]}
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
      </Screen>
    )
  },
)
