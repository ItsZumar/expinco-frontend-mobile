import React, { FC, useState } from "react"
import { FlatList, TouchableOpacity, View } from "react-native"
import { colors } from "app/theme"
import { observer } from "mobx-react-lite"
import { ScreensEnum } from "app/enums"
import { AppStackScreenProps } from "app/navigators"
import { FilterModal, Text, TransactionCard } from "app/components"
import { FilterByItems, SortByItems, TransactionData } from "app/constants"
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from "./styles"

export const TransactionScreen: FC<AppStackScreenProps<ScreensEnum.TRANSACTION>> = observer(
  ({ navigation }) => {
    const [state] = useState(TransactionData)
    const [filterModal, setFilterModal] = useState<boolean>(false)

    const openFilterModal = () => {
      setFilterModal((prev) => !prev)
    }

    const closeFilterModal = () => {
      setFilterModal(false)
    }

    const onPressSortByItems = () => {}

    const onPressFilterByItems = () => {}

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

        <FlatList
          data={state}
          keyExtractor={(item) => String(item._id)}
          style={styles.listStyle}
          renderItem={({ item }) => (
            <TransactionCard
              {...item}
              onPress={() => navigation.navigate(ScreensEnum.DETAIL_TRANSACTION)}
            />
          )}
        />

        <FilterModal
          isVisible={filterModal}
          title="Filter Transaction"
          sortByItems={SortByItems}
          onPressSortByItems={onPressSortByItems}
          filterByItems={FilterByItems}
          onPressFilterByItems={onPressFilterByItems}
          onModalClose={closeFilterModal}
          onPressApply={(data) => {
            console.log("apply", data)
            setFilterModal(false)
          }}
        />
      </View>
    )
  },
)
