import { colors } from "app/theme"
import { wp } from "app/utils/responsive"
import { LineChart } from "react-native-chart-kit"

const MyLineChart = () => {
  return (
    <LineChart
      data={{
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        datasets: [
          {
            data: [
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
            ],
          },
        ],
      }}
      width={wp(90)} // from react-native
      height={220}
      yAxisLabel="$"
      yAxisSuffix="k"
      yAxisInterval={1} // optional, defaults to 1
      chartConfig={{
        backgroundGradientFrom: colors.background,
        backgroundGradientTo: colors.background,
        decimalPlaces: 2, // optional, defaults to 2dp
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
