/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

const grays = {
  gray950: "#1A1A1A",
  gray900: "#272727",
  gray800: "#595959",
  gray500: "#A0A0A0",
  gray400: "#C3C3C3",
  gray300: "#E2E2E2",
  gray200: "#D5D5D5",
  gray100: "#F9F9F9",
};
const primaries = {
  primary900: "#0E4461",
  primary: "#489ECD",
};
const dangers = {
  danger: "#CD5E48",
  danger900: "#F07157",
  danger800: "#FF8972",
};
const warnings = {
  warning: "#DE8E24",
};

export const Colors = {
  light: {
    dark: "#2C2C2C",
    white: "#FFFFFF",
    ...grays,
    ...primaries,
    ...dangers,
    ...warnings,

    text: {
      primary: primaries.primary,
      danger: dangers.danger800,
      warning: warnings.warning,
    },
    background: {
      primary: `${primaries.primary}`,
      primary10: `${primaries.primary}10`,
      danger: `${dangers.danger900}`,
      danger10: `${dangers.danger900}10`,
    },
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
};
