import React, { FC } from "react"
import { Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import { Screen, Text } from "../../components"
import { DemoTabScreenProps } from "../../navigators/DemoNavigator"
import { spacing } from "../../theme"
import { openLinkInBrowser } from "../../utils/openLinkInBrowser"
import { isRTL } from "../../i18n"

const chainReactLogo = require("../../../assets/images/cr-logo.png")
const reactNativeLiveLogo = require("../../../assets/images/rnl-logo.png")
const reactNativeRadioLogo = require("../../../assets/images/rnr-logo.png")
const reactNativeNewsletterLogo = require("../../../assets/images/rnn-logo.png")

export const DemoCommunityScreen: FC<DemoTabScreenProps<"DemoCommunity">> =
  function DemoCommunityScreen(_props) {
    return (
      <Screen preset="scroll" contentContainerStyle={$container} safeAreaEdges={["top"]}>
        <Text preset="heading" tx="demoCommunityScreen.title" style={$title} />
        <Text tx="demoCommunityScreen.tagLine" style={$tagline} />

        <Text preset="subheading" tx="demoCommunityScreen.joinUsOnSlackTitle" />
        <Text tx="demoCommunityScreen.joinUsOnSlack" style={$description} />

        <Text
          preset="subheading"
          tx="demoCommunityScreen.makeIgniteEvenBetterTitle"
          style={$sectionTitle}
        />
        <Text tx="demoCommunityScreen.makeIgniteEvenBetter" style={$description} />

        <Text
          preset="subheading"
          tx="demoCommunityScreen.theLatestInReactNativeTitle"
          style={$sectionTitle}
        />
        <Text tx="demoCommunityScreen.theLatestInReactNative" style={$description} />
        <Text preset="subheading" tx="demoCommunityScreen.hireUsTitle" style={$sectionTitle} />
        <Text tx="demoCommunityScreen.hireUs" style={$description} />
      </Screen>
    )
  }

const $container: ViewStyle = {
  paddingTop: spacing.lg + spacing.xl,
  paddingHorizontal: spacing.lg,
}

const $title: TextStyle = {
  marginBottom: spacing.sm,
}

const $tagline: TextStyle = {
  marginBottom: spacing.xxl,
}

const $description: TextStyle = {
  marginBottom: spacing.lg,
}

const $sectionTitle: TextStyle = {
  marginTop: spacing.xxl,
}

const $logoContainer: ViewStyle = {
  marginEnd: spacing.md,
  flexDirection: "row",
  flexWrap: "wrap",
  alignContent: "center",
}

const $logo: ImageStyle = {
  height: 38,
  width: 38,
}

// @demo remove-file
