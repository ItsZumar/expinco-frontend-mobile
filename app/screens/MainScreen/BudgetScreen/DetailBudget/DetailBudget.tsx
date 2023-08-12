import React, { FC, useEffect, useState } from "react"
import { FlatList, View } from "react-native"
import { ScreensEnum } from "app/enums"
import { wp } from "app/utils/responsive"
import { observer } from "mobx-react-lite"
import { AppHeader, Button, Header, Icon, Text, TransactionCard } from "app/components"
import { AppStackScreenProps } from "app/navigators"
import { colors } from "app/theme"
import { cardsDummyData } from "../BudgetScreen"
import styles from "./styles"
import { TransactionData } from "../../TransactionScreen/data"

export const BudgetDetailScreen: FC<AppStackScreenProps<ScreensEnum.BUDGET_DETAIL>> = observer(
  ({ navigation, route }) => {
    const { id } = route.params
    const [state, setState] = useState([])

    const filteredBudgetData = cardsDummyData.filter((obj) => obj.id === id)

    useEffect(() => {
      setState(TransactionData)
    }, [])

    return (
      <View style={styles.detailBudgetContainer}>
        <Header
          title="Detail Budget"
          leftIcon="back"
          onLeftPress={() => navigation.goBack()}
          RightActionComponent={
            <View style={styles.headerIcons}>
              <Icon icon="edit" size={22} style={{ marginRight: 5 }} />
              <Icon icon="delete" size={22} />
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
            <Text text={`Remaining `} style={styles.remainingAmount} />
            <Text
              text={`$${filteredBudgetData[0].remainingAmount}`}
              style={styles.remainingAmount}
            />
          </View>
        </View>

        <View style={{ paddingHorizontal: wp(5) }}>
          <AppHeader text="Transactions" />
        </View>
        <FlatList
          data={state}
          keyExtractor={(item) => String(item._id)}
          style={styles.listStyle}
          renderItem={({ item }) => <TransactionCard {...item} onPress={() => {}} />}
        />
        <View style={styles.createBudgetBtn}>
          <Button
            tx="budgetScreen.editBudget"
            preset="filled"
            onPress={() => navigation.navigate(ScreensEnum.EDIT_BUDGET as any)}
          />
        </View>
      </View>
    )
  },
)
