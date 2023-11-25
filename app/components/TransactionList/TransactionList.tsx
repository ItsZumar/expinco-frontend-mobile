import React, { useState } from "react"
import { View, SectionList, StyleSheet } from "react-native"
import { Text } from "../Text/Text"
import { hp, wp } from "app/utils/responsive"
import { TransactionCard } from "../Cards/TransactionCard/TransactionCard"
import { TransactionI } from "app/store/slices/transaction/types"
import { ScreensEnum } from "app/enums"
import { colors } from "app/theme"
import { RefreshControl } from "react-native"

const groupTransactionsByDay = (transactions: TransactionI[]) => {
  const groupedData: { [day: string]: { date: string; data: TransactionI[] }[] } = {}

  transactions.forEach((transaction) => {
    const createdAt = new Date(transaction.createdAt)
    const day = createdAt.toLocaleDateString("en-US", { weekday: "long" })
    const date = createdAt.toLocaleDateString("en-US", { month: "short", day: "numeric" })

    if (!groupedData[day]) {
      groupedData[day] = []
    }

    let section = groupedData[day].find((group) => group.date === date)
    if (!section) {
      section = { date, data: [] }
      groupedData[day].push(section)
    }

    section.data.push(transaction)
  })

  return groupedData
}

const TransactionList: React.FC<{
  transactions: TransactionI[]
  refreshing: boolean
  navigation: any
}> = ({ transactions, refreshing, navigation }) => {
  const groupedData = groupTransactionsByDay(transactions)
  const sections: { title: string; data: TransactionI[] }[] = []

  for (const day in groupedData) {
    groupedData[day].forEach((group) => {
      sections.push({ title: `${day}, ${group.date}`, data: group.data })
    })
  }

  const renderSectionHeader = ({
    section,
  }: {
    section: { title: string; data: TransactionI[] }
  }) => (
    <View style={styles.sectionHeader}>
      <Text text={section.title.split(", ")[1]} preset="subheading" />
    </View>
  )

  return (
    <SectionList
      showsVerticalScrollIndicator={false}
      style={styles.listStyle}
      sections={sections}
      renderItem={({ item }) => (
        <TransactionCard
          {...item}
          onPress={() => navigation.navigate(ScreensEnum.DETAIL_TRANSACTION as any, { item })}
        />
      )}
      renderSectionHeader={renderSectionHeader}
      stickySectionHeadersEnabled
      // StickyHeaderComponent={renderSectionHeader}
      keyExtractor={(item) => item._id}
      ListEmptyComponent={() =>
        !refreshing && (
          <Text
            text="You don't have any transactions yet!"
            preset="subheading"
            style={styles.emptyText}
          />
        )
      }
    />
  )
}

const styles = StyleSheet.create({
  sectionHeader: {
    paddingVertical: hp(1),
    backgroundColor: colors.palette.neutral100,
  },
  listStyle: {
    paddingHorizontal: wp(5),
    marginTop: hp(1),
  },
  emptyText: {
    marginVertical: hp(2),
    marginHorizontal: wp(5),
  },
})

export { TransactionList }
