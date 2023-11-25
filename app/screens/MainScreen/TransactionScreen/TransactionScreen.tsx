import React, { FC, useEffect, useState } from "react"
import { ActivityIndicator, TouchableOpacity, View } from "react-native"
import { colors } from "app/theme"
import { ScreensEnum } from "app/enums"
import { AppStackScreenProps } from "app/navigators"
import { FilterModal, Text, TransactionList } from "app/components"
import { FilterByItems, SortByItems } from "app/constants"
import { RootState, useAppDispatch, useAppSelector } from "app/store/store"
import { getAllTransactions } from "app/store/slices/transaction/transactionService"
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from "./styles"

export const TransactionScreen: FC<AppStackScreenProps<ScreensEnum.TRANSACTION>> = ({
  navigation,
}) => {
  const dispatch = useAppDispatch()

  const { transactions, loading } = useAppSelector((state: RootState) => state.transaction)
  const [filterModal, setFilterModal] = useState<boolean>(false)
  const [refreshing, setRefresing] = useState<boolean>(false)

  const openFilterModal = () => {
    setFilterModal((prev) => !prev)
  }

  const closeFilterModal = () => {
    setFilterModal(false)
  }

  const onPressApply = async (data: {
    selectedFilterItems: { name: string }[]
    selectedSortItems: { name: string }[]
    selectedCategory: { _id: any }
  }) => {
    setFilterModal(false)
    setRefresing(true)

    if (data.selectedFilterItems.length > 0) {
      await dispatch(
        getAllTransactions({
          type: data.selectedFilterItems[0].name.toUpperCase(),
          sortTransactionBy: data.selectedSortItems[0].name.toUpperCase(),
          category: data.selectedCategory._id,
        }),
      )
    } else {
      await dispatch(getAllTransactions())
    }

    setRefresing(false)
  }

  const handleOnRefresh = async () => {
    setRefresing(true)
    await dispatch(getAllTransactions())
    setRefresing(false)
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      handleOnRefresh()
    })
    return unsubscribe
  }, [navigation])

  return (
    <View style={styles.root}>
      <View style={styles.headerContainer}>
        <Text text="Transactions" preset="bold" style={styles.heading} />

        <TouchableOpacity onPress={openFilterModal}>
          <Ionicons
            name="filter-outline"
            size={25}
            color={colors.palette.neutral900}
            style={{ padding: 5 }}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.topBanner}
        onPress={() => navigation.navigate(ScreensEnum.FINANCIAL_REPORT)}
      >
        <Text style={styles.topBannerText} text="See your financial report" />
        <Ionicons name="chevron-forward" size={22} color={colors.palette.primary500} />
      </TouchableOpacity>

      {loading ? (
        <View style={{ marginTop: 20 }}>
          <ActivityIndicator color="red" />
        </View>
      ) : (
        <TransactionList
          transactions={transactions.data}
          refreshing={refreshing}
          navigation={navigation}
        />
      )}

      <FilterModal
        isVisible={filterModal}
        title="Filter Transaction"
        sortByItems={SortByItems}
        filterByItems={FilterByItems}
        onModalClose={closeFilterModal}
        onPressApply={(data) => onPressApply(data)}
      />
    </View>
  )
}
