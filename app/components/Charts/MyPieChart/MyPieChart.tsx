import { colors } from "app/theme"
import React from "react"
import { View } from "react-native"
import { PieChart } from "react-native-chart-kit"

const MyPieChart = () => {
  const data = [
    {
      name: "Shopping",
      population: 300,
      color: colors.palette.accent500,
      legendFontColor: colors.palette.neutral900,
      legendFontSize: 15,
    },
    {
      name: "Gaming",
      population: 200,
      color: colors.palette.income,
      legendFontColor: colors.palette.neutral900,
      legendFontSize: 15,
    },
    {
      name: "Transportation",
      population: 100,
      color: colors.palette.secondary600,
      legendFontColor: colors.palette.neutral900,
      legendFontSize: 15,
    },
  ]

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientTo: "#08130D",
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  }

  return (
    <View>
      <PieChart
        data={data}
        width={300}
        height={200}
        chartConfig={chartConfig}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
      />
    </View>
  )
}

export { MyPieChart }
