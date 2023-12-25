import React, { FC, useState } from "react"
import { View } from "react-native"
import { hp, wp } from "app/utils/responsive"
import { ScreensEnum } from "app/enums"
import { colors } from "app/theme"
import { AppStackScreenProps } from "app/navigators"
import { getFormattedDate } from "app/utils/formatDate"
import { Button, Header, Text, AlertBox, AlertBottomModal, Screen, AutoImage } from "app/components"
import { deleteTransaction } from "app/store/slices/transaction/transactionService"
import { useAppDispatch } from "app/store/store"
import styles from "./styles"

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
      <View style={{ flex: 1 }}>
        <Header
          titleTx="transactionScreen.detailTransaction"
          leftIcon="back"
          onLeftPress={() => navigation.goBack()}
          rightIcon="delete"
          rightIconColor={colors.palette.neutral800}
          onRightPress={openModal}
        />
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

          <Text text="Attachment" preset="pageHeading" />

          <View style={styles.attachmentsContainer}>
            {item.attachments.map((transactionAttach: any) => (
              <View key={transactionAttach._id}>
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
        </View>
      </View>

      <View style={{ paddingHorizontal: wp(2), marginBottom: hp(3.5) }}>
        <Button
          text="Edit"
          preset="filled"
          onPress={() => navigation.navigate(ScreensEnum.EDIT_TRANSACTION as any, { item })}
          style={{ marginTop: 0, padding: 0 }}
        />
      </View>

      {/* MODALS */}
      <AlertBottomModal
        title="Remove this transaction?"
        message="Are you sure do you wanna remove this transaction?"
        isVisible={modalVisible}
        onModalClose={closeModal}
        primaryBtnText="Yes"
        secondaryBtnText="No"
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
