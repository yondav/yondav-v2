import type { themeColors } from "./theme.constants";

export type ColorTheme = keyof typeof themeColors

export enum CONTRASTTHEME {
  DARK = 'dark',
  LIGHT = 'light',
}

export interface ThemeState {
  contrast: CONTRASTTHEME;
  color: ColorTheme;
}

export interface ThemeContextState extends ThemeState {
  setter: (themeConfig: Partial<ThemeState>) => void;
}
