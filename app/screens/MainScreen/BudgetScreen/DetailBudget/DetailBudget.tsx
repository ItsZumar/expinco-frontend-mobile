import React, { FC, useState } from "react"
import { FlatList, View, TouchableOpacity } from "react-native"
import { colors } from "app/theme"
import { observer } from "mobx-react-lite"
import { ScreensEnum } from "app/enums"
import { cardsDummyData } from "../BudgetScreen"
import { TransactionData } from "app/constants"
import { AppStackScreenProps } from "app/navigators"
import { AppHeader, Header, Icon, Text, TransactionCard, Screen } from "app/components"
import styles from "./styles"

export const BudgetDetailScreen: FC<AppStackScreenProps<ScreensEnum.BUDGET_DETAIL>> = observer(
  ({ navigation, route }) => {
    const { id } = route.params
    const [state] = useState(TransactionData)

    const budgetData = cardsDummyData.filter((obj) => obj.id === id)

    return (
      <View style={styles.mainContainer}>
        <Header
          title="Detail Budget"
          leftIcon="back"
          onLeftPress={() => navigation.goBack()}
          RightActionComponent={
            <View style={styles.headerIcons}>
              <TouchableOpacity onPress={() => navigation.navigate(ScreensEnum.EDIT_BUDGET as any)}>
                <Icon icon="edit" size={22} style={{ marginRight: 5 }} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon icon="delete" size={22} />
              </TouchableOpacity>
            </View>
          }
        />

        {budgetData[0].expenseAmount > budgetData[0].totalAmount && (
          <View style={styles.alertHeading}>
            <Icon icon="alert" size={22} color={colors.palette.neutral100} />
            <Text text="You have Exceeded the Limit!" style={styles.alertHeadingText} />
          </View>
        )}

        <View style={styles.middleContainer}>
          <View style={styles.budgetType}>
            <View style={[styles.budgetCircle, { backgroundColor: budgetData[0].color }]}></View>
            <Text text={budgetData[0].bugetType} preset="default" />
          </View>

          <View style={styles.centerDivider}></View>

          <View style={styles.amountContainer}>
            <Text text={`Remaining `} preset="title" />
            <Text text={`$${budgetData[0].remainingAmount}`} preset="heading" />
          </View>
        </View>

        <View style={styles.headingContainer}>
          <AppHeader text="Transactions" />
        </View>

        <FlatList
          data={[...state, ...state, ...state]}
          keyExtractor={(item, index) => String(item._id + index)}
          style={styles.listStyle}
          renderItem={({ item }) => (
            <TransactionCard
              {...item}
              onPress={() => navigation.navigate(ScreensEnum.DETAIL_TRANSACTION)}
            />
          )}
        />
      </View>
    )
  },
)
