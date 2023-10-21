import React from "react"
import { colors } from "app/theme"
import { View } from "react-native"
import { PieChart } from "react-native-chart-kit"
import { TransactionI } from "app/store/slices/transaction/types"

const calculateCategoryTotal = (transactions: { data: TransactionI[] }, type: string) => {
  const categoryTotals: Record<string, number> = {}
  transactions.data.forEach(
    (transaction: { type: any; category: { name: any }; amount: number }) => {
      if (transaction.type === type) {
        const categoryName = transaction.category.name
        categoryTotals[categoryName] = (categoryTotals[categoryName] || 0) + transaction.amount
      }
    },
  )

  return categoryTotals
}

const createPieChartData = (transactions: { data: TransactionI[] }) => {
  const totalExpenses = calculateCategoryTotal(transactions, "EXPENSE")
  const totalIncome = calculateCategoryTotal(transactions, "INCOME")

  const data = [
    {
      name: "Expenses",
      population: Object.values(totalExpenses).reduce((acc, val) => acc + val, 0),
      color: colors.palette.expense,
      legendFontColor: colors.palette.neutral900,
      legendFontSize: 15,
    },
    {
      name: "Income",
      population: Object.values(totalIncome).reduce((acc, val) => acc + val, 0),
      color: colors.palette.income,
      legendFontColor: colors.palette.neutral900,
      legendFontSize: 15,
    },
  ]

  return data
}

const MyPieChart = ({ transactions }: any) => {
  const data = createPieChartData(transactions)

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
