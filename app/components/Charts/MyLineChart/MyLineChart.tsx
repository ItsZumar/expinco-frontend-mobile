import { colors } from "app/theme"
import { wp } from "app/utils/responsive"
import { LineChart } from "react-native-chart-kit"

interface ChartData {
  data: number[]
  labels: string[]
}

const truncateLabelsToThreeLetters = (labels: string[]) => {
  return labels.map((label) => label.substring(0, 3))
}

const MyLineChart = ({ data, labels }: ChartData) => {
  const truncatedLabels = truncateLabelsToThreeLetters(labels)

  return (
    <LineChart
      data={{
        labels: truncatedLabels,
        datasets: [
          {
            data: data,
          },
        ],
      }}
      width={wp(90)}
      height={220}
      yAxisLabel="$"
      // yAxisSuffix="k"
      yAxisInterval={1}
      chartConfig={{
        backgroundGradientFrom: colors.background,
        backgroundGradientTo: colors.background,
        decimalPlaces: 2,
        color: () => colors.palette.primary600,
        labelColor: () => colors.textDim,
        style: {
          // borderRadius: 16,
        },
        propsForDots: {
          r: "4",
          strokeWidth: "2",
          stroke: colors.palette.accent500,
        },
        fillShadowGradientFrom: colors.palette.primary600,
        fillShadowGradientOpacity: 0.4,
        fillShadowGradientTo: colors.palette.primary300,
        propsForBackgroundLines: {
          strokeWidth: 0.1,
        },
      }}
      bezier
      style={{
        marginVertical: 8,
        borderRadius: 16,
      }}
    />
  )
}

export { MyLineChart }
