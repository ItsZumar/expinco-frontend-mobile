import React, { FC, useState } from "react"
import { View } from "react-native"
import { hp, wp } from "app/utils/responsive"
import { observer } from "mobx-react-lite"
import { ScreensEnum } from "app/enums"
import { colors } from "app/theme"
import { AppStackScreenProps } from "app/navigators"
import { TransactionData } from "app/constants"
import { getFormattedDate } from "app/utils/formatDate"
import { transactionAttachments, transactionTypes } from "app/constants"
import { Button, Header, Text, AlertBox, AlertBottomModal, Screen } from "app/components"
import { TransactionAttachmentTypesI, TransactionI, transactionTypesI } from "app/interfaces"
import styles from "./styles"

export const DetailTransactionScreen: FC<AppStackScreenProps<ScreensEnum.DETAIL_TRANSACTION>> =
  observer(({ navigation, route }) => {
    // const { id }: any = route.params
    const [transaction] = useState<TransactionI>(TransactionData[0])
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

    const removeTransaction = () => {
      setModalVisible((prev) => !prev)
      setAlertModalVisible((prev) => !prev)
    }

    const onCloseAlertBoxPress = () => {
      setAlertModalVisible((prev) => !prev)
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
              transaction.type === "EXPENSE"
                ? { backgroundColor: colors.palette.expense }
                : { backgroundColor: colors.palette.income },
            ]}
          >
            <Text text={`$${transaction.amount}`} preset="heading" style={styles.amount} />
            <Text
              text={`${transaction.name}`}
              preset="pageHeading"
              style={styles.transactionName}
            />
            <Text
              text={getFormattedDate(transaction.createdAt)}
              preset="default"
              style={styles.date}
            />
          </View>

          <View style={styles.bottomContainer}>
            <View style={styles.detailCard}>
              {transactionTypes.map((transType: transactionTypesI) => (
                <View style={{ alignItems: "center" }}>
                  <Text text={transType.type} style={styles.upperText} />
                  <Text text={transType.title} style={styles.lowerText} />
                </View>
              ))}
            </View>

            {/* divider */}

            <View style={styles.divider} />

            {/* descriptions */}

            <Text text="Description" preset="pageHeading" />
            <Text text={transaction.description} preset="default" style={styles.description} />

            {/* attachments */}

            <Text text="Attachment" preset="pageHeading" />
            <View style={styles.attachmentsContainer}>
              {transactionAttachments.map((transactionAttach: TransactionAttachmentTypesI) => (
                <View
                  key={transactionAttach.id}
                  style={{
                    width: wp(20.6),
                    backgroundColor: "red",
                    height: hp(10),
                    borderRadius: 10,
                  }}
                ></View>
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
          title={""}
        />
      </View>
    )
  })
