import React, { useEffect, useState } from "react"
import { FlatList, ActivityIndicator } from "react-native"
import { TxKeyPath } from "app/i18n"
import { TransactionCategoryI } from "app/interfaces"
import { Text, Button, ListItemCard, ModalHoc } from "app/components"
import { walletType } from "app/constants"
import styles from "./styles"

interface Props {
  selectedItem?: TransactionCategoryI
  isVisible: boolean
  title: string
  titleTx?: TxKeyPath
  onPressClose?: () => void
  onPressDone?: (data: any) => void
}

export const WalletTypeModal = ({
  selectedItem = null,
  isVisible = false,
  title,
  titleTx,
  onPressClose,
  onPressDone,
}: Props) => {
  const [showDoneBtn, setShowDoneBtn] = useState<boolean>(false)
  const [state, setState] = useState({
    list: [],
    page: 1,
    hasNext: false,
    listRefreshing: false,
  })

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

  const getWalletsFromServer = async () => {
    let nList = walletType?.map((el: any) => {
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

  useEffect(() => {
    if (isVisible) {
      getWalletsFromServer()

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
    // if (!isLoading) {
    //   return null
    // }
    // return (
    //   <View style={{ paddingVertical: 20 }}>
    //     <ActivityIndicator animating size="small" color={colors.palette.primary500} />
    //   </View>
    // )

    return <></>
  }

  return (
    <ModalHoc title={title} titleTx={titleTx} isVisible={isVisible} onPressClose={onPressClose}>
      <FlatList
        data={state.list}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <ListItemCard item={item} onPress={(_id) => toggleSelected(_id)} />
        )}
        keyExtractor={({ _id }) => _id}
        style={styles.flatlistStyles}
        contentContainerStyle={styles.containerStyle}
        ListFooterComponent={FooterComponent}
        ListEmptyComponent={() => <Text text="No wallets found!" />}
      />

      {showDoneBtn && (
        <Button
          tx="common.ok"
          preset="reversed"
          onPress={_doneHandler}
          style={styles.spacingBottom}
        />
      )}
    </ModalHoc>
  )
}
