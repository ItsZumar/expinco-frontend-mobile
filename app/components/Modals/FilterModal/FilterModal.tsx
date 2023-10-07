import React, { useState } from "react"
import { TouchableOpacity, View } from "react-native"
import { Text } from "app/components/Text/Text"
import { CategoryModal } from "../CategoryModal/CategoryModal"
import { FilterByItemsI, SortByItemsI, TransactionCategoryI } from "app/interfaces"
import { Button, RoundedButton, StickyBottomModalHoc } from "app/components"
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from "./styles"

interface PropsI {
  isVisible: boolean
  title: string
  filterByItems: any
  sortByItems: any
  onModalClose: () => void
  primaryBtnText?: string
  onPressFilterByItems?: (data: any) => void
  onPressSortByItems?: (data: any) => void
  onPressApply?: (data: any) => void
}

const FilterModal = ({
  isVisible = false,
  title = "Title Here",
  onModalClose,
  filterByItems,
  sortByItems,
  onPressApply,
}: PropsI) => {
  const [showCategoryModal, setShowCategoryModal] = useState<boolean>(false)
  const [selectedCategory, setSelectedCategory] = useState<
    TransactionCategoryI & { selected: boolean }
  >()
  const [filterItemsBy, setFilterItemsBy] = useState<FilterByItemsI[]>(filterByItems)
  const [sortItemsBy, setSortItemsBy] = useState<SortByItemsI[]>(sortByItems)

  const onFilterRoundedButtonPress = (id: string) => {
    const updatedFilterItemsBy = filterItemsBy.map((item: FilterByItemsI) => ({
      ...item,
      isSelected: item.id === id,
    }))
    setFilterItemsBy(updatedFilterItemsBy)
  }

  const onSortRoundedButtonPress = (id: string) => {
    const updatedSortItemsBy = sortItemsBy.map((item: SortByItemsI) => ({
      ...item,
      isSelected: item.id === id,
    }))

    setSortItemsBy(updatedSortItemsBy)
  }

  const onResetPress = () => {
    const updatedFilterItemsBy = filterItemsBy.map((item) => ({
      ...item,
      isSelected: false,
    }))

    const updatedSortItemsBy = sortItemsBy.map((item) => ({
      ...item,
      isSelected: false,
    }))

    setFilterItemsBy(updatedFilterItemsBy)
    setSortItemsBy(updatedSortItemsBy)
    setSelectedCategory(null)
  }

  const selectedSortItems = sortItemsBy.filter((item: SortByItemsI) => item.isSelected)

  const selectedFilterItems = filterItemsBy.filter((item: FilterByItemsI) => item.isSelected)

  return (
    <StickyBottomModalHoc
      isVisible={isVisible}
      onPressClose={onModalClose}
      onBackdropPress={onModalClose}
    >
      <View style={styles.titleContainer}>
        <Text text={title} preset="subheading" style={styles.flexSpace} />
        <RoundedButton
          name="Reset"
          onPress={onResetPress}
          containerStyle={styles.resetBtnStyle}
          textStyle={styles.resetBtnText}
        />
      </View>

      {filterItemsBy && filterItemsBy.length != 0 && (
        <>
          <Text text={"Filter By"} preset="subheading" style={styles.headingStyle} />
          <View style={styles.roundedBtnsContainer}>
            {filterItemsBy.map((item: any) => (
              <RoundedButton
                id={item.id}
                name={item.name}
                isSelected={item.isSelected}
                onPress={() => onFilterRoundedButtonPress(item.id)}
              />
            ))}
          </View>
        </>
      )}

      {sortItemsBy && sortItemsBy.length != 0 && (
        <>
          <Text text={"Sort By"} preset="subheading" style={styles.headingStyle} />
          <View style={styles.roundedBtnsContainer}>
            {sortItemsBy.map((item: any) => (
              <RoundedButton
                id={item.id}
                name={item.name}
                isSelected={item.isSelected}
                onPress={() => onSortRoundedButtonPress(item.id)}
              />
            ))}
          </View>
        </>
      )}

      <Text text={"Category"} preset="subheading" style={styles.headingStyle} />

      <TouchableOpacity style={styles.itemContainer} onPress={() => setShowCategoryModal(true)}>
        <Text style={styles.itemTextHeading}>
          {selectedCategory?.name ? selectedCategory.name : `Select Category`}
        </Text>
        <Ionicons name="chevron-down" size={25} color="gray" />
      </TouchableOpacity>

      <Button
        text="Apply"
        preset="filled"
        onPress={() => {
          onPressApply({ selectedCategory, selectedSortItems, selectedFilterItems })
        }}
        style={styles.btnStyle}
      />

      <CategoryModal
        isVisible={showCategoryModal}
        selectedItem={selectedCategory}
        title="Choose Category"
        subTitle="Select the category of your transaction"
        onPressClose={() => setShowCategoryModal(false)}
        onPressDone={(data) => {
          setSelectedCategory(data[0])
          setShowCategoryModal(false)
        }}
      />
    </StickyBottomModalHoc>
  )
}

export { FilterModal }
