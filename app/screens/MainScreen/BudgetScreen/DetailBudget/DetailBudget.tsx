import React, { FC, useEffect, useState } from "react"
import { FlatList, View, TouchableOpacity } from "react-native"
import { colors } from "app/theme"
import { observer } from "mobx-react-lite"
import { ScreensEnum } from "app/enums"
import { cardsDummyData } from "../BudgetScreen"
import { TransactionData } from "../../TransactionScreen/data"
import { AppStackScreenProps } from "app/navigators"
import { AppHeader, Button, Header, Icon, Text, TransactionCard, Screen } from "app/components"
import styles from "./styles"

export const BudgetDetailScreen: FC<AppStackScreenProps<ScreensEnum.BUDGET_DETAIL>> = observer(
  ({ navigation, route }) => {
    const { id } = route.params
    const [state] = useState(TransactionData)

    const filteredBudgetData = cardsDummyData.filter((obj) => obj.id === id)

    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Header
          title="Detail Budget"
          leftIcon="back"
          onLeftPress={() => navigation.goBack()}
          RightActionComponent={
            <View style={styles.headerIcons}>
              <TouchableOpacity>
                <Icon icon="edit" size={22} style={{ marginRight: 5 }} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon icon="delete" size={22} />
              </TouchableOpacity>
            </View>
          }
        />
        {filteredBudgetData[0].expenseAmount > filteredBudgetData[0].totalAmount && (
          <View style={styles.alertHeading}>
            <Icon icon="alert" size={22} color={colors.palette.neutral100} />
            <Text text="You have Exceeded the Limit!" style={styles.alertHeadingText} />
          </View>
        )}
        <View style={styles.middleContainer}>
          <View style={styles.budgetType}>
            <View
              style={[styles.budgetCircle, { backgroundColor: filteredBudgetData[0].color }]}
            ></View>
            <Text text={filteredBudgetData[0].bugetType} style={{ textTransform: "capitalize" }} />
          </View>

          <View style={styles.centerDivider}></View>

          <View style={styles.amountContainer}>
            <Text text={`Remaining `} preset="title" />
            <Text text={`$${filteredBudgetData[0].remainingAmount}`} preset="heading" />
          </View>
        </View>
        
        {/* <View > */}
          <AppHeader text="Transactions" style={styles.headingContainer} />
        {/* </View> */}

        <Screen preset="auto" safeAreaEdges={["bottom"]}>
          <FlatList
            data={[...state, ...state, ...state, ...state]}
            keyExtractor={(item) => String(item._id)}
            style={styles.listStyle}
            renderItem={({ item }) => (
              <TransactionCard
                {...item}
                onPress={() => navigation.navigate(ScreensEnum.DETAIL_TRANSACTION)}
              />
            )}
          />
        </Screen>
        {/* </View> */}
        {/* <Button
          tx="budgetScreen.editBudget"
          preset="filled"
          onPress={() => navigation.navigate(ScreensEnum.EDIT_BUDGET as any)}
          style={styles.createBudgetBtn}
        /> */}
      </View>
    )
  },
)
