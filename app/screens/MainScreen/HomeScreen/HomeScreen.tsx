import React, { FC, useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { TouchableOpacity, View, ViewStyle } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { AppStackScreenProps } from "app/navigators"
import { Screen, AutoImage, Text, AppHeader, TransactionCard, MyLineChart } from "app/components"
import { ScreensEnum } from "app/enums"
import { colors } from "app/theme"
import { TransactionData } from "./data"
import { TransactionType } from "app/enums/transactions.enum"
import Ionicons from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"
import styles from "./styles"

interface HomeScreenProps extends NativeStackScreenProps<AppStackScreenProps<ScreensEnum.HOME>> {}

export const HomeScreen: FC<HomeScreenProps> = observer(({ navigation }) => {
  return (
    <Screen
      style={$root}
      preset="auto"
      ScrollViewProps={{ showsVerticalScrollIndicator: false }}
      StatusBarProps={{ backgroundColor: colors.palette.neutral100 }}
    >
      <View style={styles.mainHeader}>
        <AutoImage source={{ uri: "https://picsum.photos/200" }} style={styles.profileImage} />

        <TouchableOpacity style={styles.monthContainer}>
          <Ionicons name="chevron-down" size={25} color={colors.palette.primary500} />
          <Text style={styles.monthText}>July</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bellContainer}
          onPress={() => navigation.navigate(ScreensEnum.NOTIFICATION_SCREEN as any)}
        >
          <Ionicons name="md-notifications-outline" size={25} color={colors.palette.primary500} />
        </TouchableOpacity>
      </View>

      {/* Balance */}
      <View style={styles.topBlock}>
        <Text text="Account Balance" style={styles.accountBalanceText} />
        <Text text="$9140" style={styles.amountText} />
      </View>

      <View style={styles.transBtnBlock}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(ScreensEnum.ADD_TRANSACTION as any, {
              type: String(TransactionType.INCOME),
            })
          }
          style={[styles.incBtnBlock, styles.incBg]}
        >
          <View style={styles.arrowBlock}>
            <Feather name="arrow-down" size={25} color={colors.palette.income} />
          </View>

          <View>
            <Text text="Income" style={styles.topLightText} />
            <Text text="$3020" style={styles.actualAmountText} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate(ScreensEnum.ADD_TRANSACTION as any, {
              type: String(TransactionType.EXPENSE),
            })
          }
          style={[styles.incBtnBlock, styles.expBg]}
        >
          <View style={styles.arrowBlock}>
            <Feather name="arrow-up" size={25} color={colors.palette.expense} />
          </View>
          <View>
            <Text text="Expense" style={styles.topLightText} />
            <Text text="$1205" style={styles.actualAmountText} />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomBlock}>
        <AppHeader text="Spend Frequency" />
        {/* <View style={{ marginTop: 20, width: "100%", height: 170, backgroundColor: "purple" }} /> */}

        <View>
          <MyLineChart />
        </View>

        <View style={styles.graphSortBlock}>
          {["Today", "Week", "Month", "Year"].map((el) => (
            <TouchableOpacity style={styles.timeStampBtn} key={el}>
              <Text text={el} style={styles.timeStampText} />
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.spacingTop}>
          <AppHeader
            text="Recent Transactions"
            rightComponent={() => (
              <TouchableOpacity style={styles.seeAllbtnBlock}>
                <Text text="See All" style={styles.seeAllText} />
              </TouchableOpacity>
            )}
          />

          {TransactionData.map((item) => (
            <TransactionCard
              {...item}
              onPress={() => {
                navigation.navigate(ScreensEnum.DETAIL_TRANSACTION)
              }}
              key={item._id}
            />
          ))}
        </View>
      </View>
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
