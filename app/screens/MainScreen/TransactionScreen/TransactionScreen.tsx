import React, { FC, useEffect, useState } from "react"
import { colors } from "app/theme"
import { ScreensEnum } from "app/enums"
import { observer } from "mobx-react-lite"
import { AppStackScreenProps } from "app/navigators"
import { FlatList, TouchableOpacity, View } from "react-native"
import { Screen, Text, TransactionCard } from "app/components"
import { hp, wp } from "app/utils/responsive"
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from "./styles"
import { TransactionData } from "./data"

export const TransactionScreen: FC<AppStackScreenProps<ScreensEnum.TRANSACTION>> = observer(
  ({ navigation }) => {
    const [state, setState] = useState([])

    useEffect(() => {
      setState(TransactionData)
    }, [])

    return (
      <Screen style={styles.root} safeAreaEdges={["top"]}>
        <View
          style={{
            marginVertical: 15,
            paddingHorizontal: wp(5),
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            text="Transactions"
            preset="bold"
            style={{ fontSize: hp(3), lineHeight: hp(3.5) }}
          />

          <TouchableOpacity style={{ paddingVertical: 4 }}>
            <Ionicons name="filter-outline" size={25} color="#262626" style={{ padding: 5 }} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.topBanner}>
          <Text style={styles.topBannerText} text="See your financial report" />
          <Ionicons name="chevron-forward" size={22} color={colors.palette.primary500} />
        </TouchableOpacity>
        <FlatList
          data={state}
          keyExtractor={(item) => String(item._id)}
          style={styles.listStyle}
          renderItem={({ item }) => <TransactionCard {...item} onPress={() => {}} />}
        />
      </Screen>
    )
  },
)
