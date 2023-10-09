import { colors, typography } from "app/theme"
import { wp } from "app/utils/responsive"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  card: {
    flex: 1,
  },
  container: {
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingVertical: 10,
    borderRadius: 15,
  },
  imageBlock: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    backgroundColor: colors.palette.accent300,
    borderRadius: 15,
  },
  categoryImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  textBlock: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  descText: {
    maxWidth: wp(48),
    color: colors.textDim,
  },
  lastTextBlock: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  amountText: {
    marginBottom: 5,
  },
  timeText: {
    color: colors.textDim,
  },
})

export default styles
