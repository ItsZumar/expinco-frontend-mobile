import React, { FC, useEffect, useState } from "react"
import { TouchableOpacity, View } from "react-native"
import { hp, wp } from "app/utils/responsive"
import { ScreensEnum } from "app/enums"
import { colors } from "app/theme"
import { AppStackScreenProps } from "app/navigators"
import { getFormattedDate } from "app/utils/formatDate"
import { Button, Header, Text, AlertBox, AlertBottomModal, Screen, AutoImage } from "app/components"
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from "./styles"
import { useAppDispatch } from "app/store/store"
import { deleteTransaction } from "app/store/slices/transaction/transactionService"

export const DetailTransactionScreen: FC<AppStackScreenProps<ScreensEnum.DETAIL_TRANSACTION>> = ({
  navigation,
  route,
}) => {
  const { item } = route.params
  const dispatch = useAppDispatch()
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [alertModalVisible, setAlertModalVisible] = useState<boolean>(false)

  const openModal = () => {
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
  }

  const handleBackdropPress = () => {
    closeModal()
  }

  const removeTransaction = async () => {
    setModalVisible((prev) => !prev)
    await dispatch(deleteTransaction({ transactionId: item._id }))
    setAlertModalVisible((prev) => !prev)
  }

  const onCloseAlertBoxPress = () => {
    setAlertModalVisible((prev) => !prev)
    navigation.goBack()
  }

  return (
    <View style={styles.mainContainer}>
      <Header
        titleTx="transactionScreen.detailTransaction"
        leftIcon="back"
        onLeftPress={() => navigation.goBack()}
        rightIcon="delete"
        onRightPress={openModal}
      />
      <Screen
        preset="scroll"
        safeAreaEdges={["bottom"]}
        ScrollViewProps={{ showsVerticalScrollIndicator: false }}
      >
        <View
          style={[
            styles.topContainer,
            item.type === "EXPENSE"
              ? { backgroundColor: colors.palette.expense }
              : { backgroundColor: colors.palette.income },
          ]}
        >
          <Text text={`$${item?.amount}`} preset="heading" style={styles.amount} />
          <Text
            text={`${item?.category?.name}`}
            preset="pageHeading"
            style={styles.transactionName}
          />
          <Text text={getFormattedDate(item?.createdAt)} preset="default" style={styles.date} />
        </View>

        <View style={styles.bottomContainer}>
          <View style={styles.detailCard}>
            <View style={{ alignItems: "center" }}>
              <Text text={"Type"} preset="subheading" style={styles.upperText} />
              <Text text={item?.type} preset="subheading" style={styles.lowerText} />
            </View>
            <View style={{ alignItems: "center" }}>
              <Text text={"Category"} preset="subheading" style={styles.upperText} />
              <Text text={item?.category?.name} preset="subheading" style={styles.lowerText} />
            </View>
            <View style={{ alignItems: "center" }}>
              <Text text={"Wallet"} preset="subheading" style={styles.upperText} />
              <Text text={item?.wallet?.name} preset="subheading" style={styles.lowerText} />
            </View>
          </View>

          {/* divider */}

          <View style={styles.divider} />

          {/* descriptions */}

          <Text text="Description" preset="pageHeading" />
          <Text text={item?.description} preset="default" style={styles.description} />

          {/* attachments */}

          <View
            style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}
          >
            <Text text="Attachment" preset="pageHeading" />
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              onPress={() => {}}
            >
              <Text text="Add" />
              <Ionicons name="add" size={21} color={colors.palette.neutral900} />
            </TouchableOpacity>
          </View>

          <View style={styles.attachmentsContainer}>
            {item.attachments.map((transactionAttach: any) => (
              <View key={transactionAttach.id}>
                <AutoImage
                  source={{ uri: transactionAttach.secureURL }}
                  style={{
                    width: wp(20.6),
                    backgroundColor: "red",
                    height: hp(10),
                    borderRadius: 8,
                  }}
                />
              </View>
            ))}
          </View>
          <Button
            text="Edit"
            preset="filled"
            onPress={() => navigation.navigate(ScreensEnum.EDIT_BUDGET as any)}
            style={{ marginTop: hp(2) }}
          />
        </View>
      </Screen>

      {/* MODALS */}
      <AlertBottomModal
        title="Remove this transaction?"
        message="Are you sure do you wanna remove this transaction?"
        isVisible={modalVisible}
        onModalClose={closeModal}
        primaryBtnText="Done"
        secondaryBtnText="Cancel"
        onBtnPress={removeTransaction}
        onBackdropPress={handleBackdropPress}
      />

      <AlertBox
        checkIcon={true}
        open={alertModalVisible}
        type="success"
        description="Transaction has been successfully removed"
        onClose={onCloseAlertBoxPress}
      />
    </View>
  )
}
