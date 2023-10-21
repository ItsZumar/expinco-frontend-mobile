export interface GetSpendFrequencyServiceI {
  result: {
    data: number[]
    label: string[]
  }
  error: string
  stack: string
}

export interface SpendFrequencyServiceI {
  loading: boolean
  spendFrequency: GetSpendFrequencyServiceI["result"]
  error: string
  stack?: string
}

export interface SpendFrequencyPayloadI {
  orderBy: string
}
