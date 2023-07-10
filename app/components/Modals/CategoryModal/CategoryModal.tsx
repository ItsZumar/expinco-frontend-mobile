import React, { useEffect, useState } from "react"
import { TouchableOpacity, View, FlatList, ActivityIndicator } from "react-native"
import { ModalHoc } from "../../HOC/ModalScreen/ModalScreen"
import { AutoImage, Text, Button } from "../.."
import { observer } from "mobx-react-lite"
// import { CategoryModel } from "../../../models/categories/categories"
import { TxKeyPath } from "../../../i18n"
import { useStores } from "../../../models"
import { colors } from "../../../theme"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import styles from "./styles"

interface Props {
  selectedList: string[]
  isVisible: boolean
  title: string
  titleTx?: TxKeyPath
  subTitle: string
  subTitleTx?: TxKeyPath
  onPressClose?: (value: boolean) => void
  onPressDone?: (data: any) => void
}

export const InterestModal = observer(
  ({
    selectedList = [],
    isVisible = false,
    title,
    titleTx,
    subTitle,
    subTitleTx,
    onPressClose,
    onPressDone,
  }: Props) => {
    const {
      transactionStore: { isLoading },
    } = useStores()

    const [data, setData] = useState([])
    const [showDoneBtn, setShowDoneBtn] = useState<boolean>(false)

    // Function that selects/unselects a category
    const toggleSelected = (id: string) => {
      // let newItems = data.map((el) => {
      //   if (el.id === id) {
      //     let item: ICardItem = el
      //     item.selected = !item.selected
      //     return item
      //   } else {
      //     return el
      //   }
      // })
      // setData(newItems)
      // // Checking if 3 or more items have selected = true, then set showDoneBtn = true
      // let shouldShowDone = newItems.filter((el) => el.selected)
      // if (shouldShowDone.length > 2) {
      //   setShowDoneBtn(true)
      // } else {
      //   setShowDoneBtn(false)
      // }
    }

    const _doneHandler = () => {
      let selectedItems = data.filter((el) => {
        if (el.selected) {
          return el
        }
      })
      onPressDone(selectedItems)
    }

    const renderItem = (item: any) => {
      return (
        <TouchableOpacity onPress={() => toggleSelected(item.id)} style={styles.renderCardBlock}>
          <View style={styles.shadowLayer}>
            <AutoImage
              source={{ uri: "https://picsum.photos/200" }}
              style={styles.renderCardImage}
            />
            {item.selected && (
              <View style={styles.cardSelectionOverlay}>
                <MaterialIcons name="done" size={30} color="#fff" />
              </View>
            )}
          </View>
          <Text text={item.name} style={styles.renderCardText} />
        </TouchableOpacity>
      )
    }

    const getCategoriesFromServer = async () => {}

    useEffect(() => {
      /**
       * If modal is visible, then only we will call api and load data
       */
      if (isVisible) {
        getCategoriesFromServer()

        /**
         * This will show the done button if user selects more than 2 categories
         */
        if (selectedList.length) {
          setShowDoneBtn(true)
        } else {
          setShowDoneBtn(false)
        }
      }

      return () => {
        setData([])
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
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => renderItem(item)}
          numColumns={3}
          keyExtractor={({ id }) => id}
          contentContainerStyle={styles.flatlistContentStyles}
          columnWrapperStyle={styles.columnStyles}
          style={styles.flatlistStyles}
          ListFooterComponent={FooterComponent}
          ListEmptyComponent={() => !isLoading && <Text text="No categories found!" />}
        />
        {showDoneBtn && <Button tx="common.ok" style={styles.doneBtn} onPress={_doneHandler} />}
      </ModalHoc>
    )
  },
)
