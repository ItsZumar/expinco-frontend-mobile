// TODO: write documentation for colors and palette in own markdown file and add links from here

const palette = {
  neutral100: "#FFFFFF",
  neutral200: "#F4F2F1",
  neutral300: "#D7CEC9",
  neutral400: "#B6ACA6",
  neutral500: "#978F8A",
  neutral600: "#564E4A",
  neutral700: "#3C3836",
  neutral800: "#191015",
  neutral900: "#000000",

  primary100: "#EEE5FF",
  primary200: "#b995ff",
  primary300: "#9d6aff",
  primary400: "#7F3DFF",
  primary500: "#6515ff",
  primary600: "#5000ea",

  secondary100: "#95c6ff",
  secondary200: "#6ab0ff",
  secondary300: "#4099ff",
  secondary400: "#1582ff",
  secondary500: "#006dea",
  secondary600: "#0059bf",

  accent100: "#FFEED4",
  accent200: "#FFE1B2",
  accent300: "#FDD495",
  accent400: "#FBC878",
  accent500: "#FFBB50",

  angry100: "#ffbfbf",
  angry500: "#ff4040",

  overlay20: "rgba(25, 16, 21, 0.2)",
  overlay50: "rgba(25, 16, 21, 0.5)",

  income: "#00A86B",
  expense: "#FD3C4A",
  primaryPurple: "#7F3DFF",

  orange: "orange",
} as const

export const colors = {
  /**
   * The palette is available to use, but prefer using the name.
   * This is only included for rare, one-off cases. Try to use
   * semantic names as much as possible.
   */
  palette,
  /**
   * A helper for making something see-thru.
   */
  transparent: "rgba(0, 0, 0, 0)",
  /**
   * The default text color in many components.
   */
  text: palette.neutral800,
  /**
   * Secondary text information.
   */
  textDim: palette.neutral600,
  /**
   * The default color of the screen background.
   */
  background: palette.neutral100,
  /**
   * The default border color.
   */
  border: palette.neutral400,
  /**
   * The main tinting color.
   */
  tint: palette.primary500,

  separator: palette.neutral300,
  error: palette.angry500,
  errorBackground: palette.angry100,
}
