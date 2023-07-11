import React, { useEffect, useState } from "react"
import { TouchableOpacity, View, FlatList, ActivityIndicator } from "react-native"
import { ModalHoc } from "../../HOC/ModalScreen/ModalScreen"
import { AutoImage, Text, Button } from "../.."
import { observer } from "mobx-react-lite"
// import { CategoryModel } from "../../../models/categories/categories"
import { TxKeyPath } from "../../../i18n"
import { useStores } from "../../../models"
import { colors, typography } from "../../../theme"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import styles from "./styles"
import { TransactionCategoryI } from "app/interfaces"

interface Props {
  selectedItem?: TransactionCategoryI
  isVisible: boolean
  title: string
  titleTx?: TxKeyPath
  subTitle: string
  subTitleTx?: TxKeyPath
  onPressClose?: () => void
  onPressDone?: (data: any) => void
}

export const CategoryModal = observer(
  ({
    selectedItem = null,
    isVisible = false,
    title,
    titleTx,
    subTitle,
    subTitleTx,
    onPressClose,
    onPressDone,
  }: Props) => {
    const { transactionStore } = useStores()
    const { isLoading } = transactionStore

    const [showDoneBtn, setShowDoneBtn] = useState<boolean>(false)

    const [state, setState] = useState({
      list: [],
      page: 1,
      hasNext: false,
      listRefreshing: false,
    })

    // Function that selects/unselects a category
    const toggleSelected = (id: string) => {
      let newItems = state.list.map((el) => {
        if (el._id === id) {
          el.selected = !el.selected
          return el
        } else {
          el.selected = false
          return el
        }
      })
      setState((prev) => ({
        ...prev,
        list: newItems,
      }))

      // Checking if 3 or more items have selected = true, then set showDoneBtn = true
      let shouldShowDone = newItems.filter((el) => el.selected)
      if (shouldShowDone.length) {
        setShowDoneBtn(true)
      } else {
        setShowDoneBtn(false)
      }
    }

    const _doneHandler = () => {
      let itemSelected = state.list.filter((el) => el.selected)
      onPressDone(itemSelected)
    }

    const renderItem = (item: TransactionCategoryI & { _id: string; selected: boolean }) => {
      return (
        <TouchableOpacity onPress={() => toggleSelected(item._id)} style={styles.renderCardBlock}>
          <AutoImage source={{ uri: item.icon }} style={styles.renderCardImage} />
          {item.selected ? (
            <Text
              text={item.name}
              style={[styles.renderCardText, { fontFamily: typography.fonts.inter.bold }]}
            />
          ) : (
            <Text text={item.name} style={styles.renderCardText} />
          )}
        </TouchableOpacity>
      )
    }

    const getCategoriesFromServer = async () => {
      let response = await transactionStore.getCategories(state.page, 10)

      if (response?.data) {
        let nList = response?.data.map((el) => {
          if (el._id === selectedItem?._id) {
            return {
              ...el,
              selected: true,
            }
          } else {
            return {
              ...el,
              selected: false,
            }
          }
        })

        setState((prev) => ({
          ...prev,
          list: nList,
          page: 1 + state.page,
          hasNext: false,
        }))
      }
    }

    useEffect(() => {
      /**
       * If modal is visible, then only we will call api and load data
       */
      if (isVisible) {
        getCategoriesFromServer()

        /**
         * This will show the done button if user selects more than 2 categories
         */
        if (selectedItem?._id) {
          setShowDoneBtn(true)
        } else {
          setShowDoneBtn(false)
        }
      }

      return () => {
        setState((prev) => ({
          ...prev,
          list: [],
          page: 1,
          hasNext: false,
          listRefreshing: false,
        }))
      }
    }, [isVisible])

    const FooterComponent = () => {
      if (!isLoading) {
        return null
      }

      return (
        <View style={{ paddingVertical: 20 }}>
          <ActivityIndicator animating size="small" color={colors.palette.primary500} />
        </View>
      )
    }

    return (
      <ModalHoc title={title} titleTx={titleTx} isVisible={isVisible} onPressClose={onPressClose}>
        <Text text={subTitle} tx={subTitleTx} style={styles.subTitleText} />
        <FlatList
          data={state.list}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => renderItem(item)}
          keyExtractor={({ _id }) => _id}
          style={styles.flatlistStyles}
          ListFooterComponent={FooterComponent}
          ListEmptyComponent={() => !isLoading && <Text text="No categories found!" />}
        />
        {showDoneBtn && (
          <Button
            tx="common.ok"
            preset="reversed"
            onPress={_doneHandler}
            style={{ marginBottom: 20 }}
          />
        )}
      </ModalHoc>
    )
  },
)
