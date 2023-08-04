import React, { FC, useState } from "react"
import { TouchableOpacity, View, FlatList } from "react-native"
import { colors, shadow } from "app/theme"
import { ScreensEnum } from "app/enums"
import { hp, wp } from "app/utils/responsive"
import { observer } from "mobx-react-lite"
import { Text, Header, Screen, CategoryModal, Button, Icon } from "app/components"
import { AppStackScreenProps } from "app/navigators"
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from "./styles"
import { TransactionCategoryI } from "app/interfaces"

export const ExportDataScreen: FC<AppStackScreenProps<ScreensEnum.EXPORT_DATA>> = observer(
  ({ navigation }) => {
    const [showCategoryModal, setShowCategoryModal] = useState<boolean>(false)
    const [selectedCategory, setSelectedCategory] = useState<
      TransactionCategoryI & { selected: boolean }
    >()

    return (
      <Screen>
        <View style={styles.root}>
          <Header title="Export Data" leftIcon="back" onLeftPress={() => navigation.goBack()} />
          <View style={styles.innerContainer}>
            <Text text="What do you want to export?" style={styles.text} />
            <TouchableOpacity
              style={styles.itemContainer}
              onPress={() => setShowCategoryModal(true)}
            >
              <Text style={styles.itemTextHeading}>
                {selectedCategory?.name ? selectedCategory.name : `Select Category`}
              </Text>
              <Ionicons name="chevron-down" size={25} color="gray" />
            </TouchableOpacity>
            <Text text="When date range?" style={styles.text} />
            <TouchableOpacity
              style={styles.itemContainer}
              onPress={() => setShowCategoryModal(true)}
            >
              <Text style={styles.itemTextHeading}>
                {selectedCategory?.name ? selectedCategory.name : `Select Category`}
              </Text>
              <Ionicons name="chevron-down" size={25} color="gray" />
            </TouchableOpacity>
            <Text text="What format do you want to export?" style={styles.text} />
            <TouchableOpacity
              style={styles.itemContainer}
              onPress={() => setShowCategoryModal(true)}
            >
              <Text style={styles.itemTextHeading}>
                {selectedCategory?.name ? selectedCategory.name : `Select Category`}
              </Text>
              <Ionicons name="chevron-down" size={25} color="gray" />
            </TouchableOpacity>
            <Button
              LeftAccessory={() => (
                <Icon
                  icon="export"
                  size={22}
                  color={colors.palette.neutral100}
                  style={styles.btnIcon}
                />
              )}
              text="Export"
              preset="filled"
              onPress={() => {}}
              style={[styles.spacingTop, styles.spacingBottom, { position: "absolute", top: 570 }]}
            />
          </View>
        </View>

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
      </Screen>
    )
  },
)
