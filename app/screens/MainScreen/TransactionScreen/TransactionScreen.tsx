import React, { FC, useEffect, useState } from "react"
import { ActivityIndicator, FlatList, SectionList, TouchableOpacity, View } from "react-native"
import { colors } from "app/theme"
import { ScreensEnum } from "app/enums"
import { AppStackScreenProps } from "app/navigators"
import { FilterModal, Text, TransactionCard } from "app/components"
import { FilterByItems, SortByItems, TransactionData } from "app/constants"
import { RootState, useAppDispatch, useAppSelector } from "app/store/store"
import { hp, wp } from "app/utils/responsive"
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
    handleOnRefresh()
  }, [])

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
        <FlatList
          style={{ marginHorizontal: wp(5), marginTop: hp(1.5) }}
          data={transactions.data}
          keyExtractor={(item) => String(item._id)}
          renderItem={({ item }) => (
            <TransactionCard
              {...item}
              onPress={() => navigation.navigate(ScreensEnum.DETAIL_TRANSACTION as any, { item })}
            />
          )}
          ListEmptyComponent={() =>
            !refreshing && (
              <Text
                text="You don't have any transactions yet!"
                preset="subheading"
                style={{ marginVertical: hp(2), marginHorizontal: wp(5) }}
              />
            )
          }
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
