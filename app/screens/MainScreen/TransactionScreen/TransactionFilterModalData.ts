import { FilterByItemsI, SortByItemsI } from "app/interfaces"

export const FilterByItems: FilterByItemsI[] = [
  {
    id: "0",
    name: "Income",
    isSelected: false,
  },
  {
    id: "1",
    name: "Expense",
    isSelected: false,
  },
]

export const SortByItems: SortByItemsI[] = [
  {
    id: "0",
    name: "Highest",
    isSelected: false,
  },
  {
    id: "1",
    name: "Lowest",
    isSelected: false,
  },
  {
    id: "2",
    name: "Newest",
    isSelected: false,
  },
  {
    id: "3",
    name: "Oldest",
    isSelected: false,
  },
]
