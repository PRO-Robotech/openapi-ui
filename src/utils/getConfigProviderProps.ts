import { ThemeConfig, theme as antdtheme } from 'antd'
import { colorsLight, colorsDark, sizes } from 'constants/colors'
import {
  THEME_TOKENS_COLORS_LIGHT,
  THEME_TOKENS_COLORS_DARK,
  THEME_TOKENS_SIZES,
  THEME_TOKENS_COMPONENTS_DARK,
  THEME_TOKENS_COMPONENTS_LIGHT,
} from 'constants/customizationApiGroupAndVersion'

const getDefaultComponentsSettings = ({
  theme,
  colors,
}: {
  theme?: 'dark' | 'light'
  colors: ThemeConfig['token']
}): ThemeConfig['components'] => ({
  Layout: {
    ...colors,
  },
  Button: {
    colorPrimary: theme === 'dark' ? '#fff' : '#000',
    primaryColor: theme === 'dark' ? '#000' : '#fff',
  },
  Tooltip: {
    colorBgSpotlight: colors?.colorBgLayout,
    colorText: colors?.colorText,
    colorTextLightSolid: colors?.colorText,
  },
  Popover: {
    colorBgElevated: colors?.colorBgLayout,
  },
  Table: {
    headerBg: colors?.colorBgLayout,
  },
  Slider: {
    trackBg: colors?.colorText,
    trackHoverBg: colors?.colorText,
  },
  Menu: {
    itemBg: colors?.colorBgLayout,
    itemHoverBg: colors?.colorBgContainer,
    itemActiveBg: colors?.colorInfoBg,
    itemSelectedBg: colors?.colorInfoBg,
    subMenuItemBg: colors?.colorFillQuaternary,
    // itemColor: colors?.colorTextDescription,
    // itemHoverColor: colors?.colorTextDescription,
    itemColor: colors?.colorText,
    itemHoverColor: colors?.colorText,
    itemSelectedColor: colors?.colorText,
    itemBorderRadius: 0,
  },
  Tag: {
    defaultBg: colors?.colorPrimaryBg,
  },
  Segmented: {
    trackBg: colors?.colorText,
    itemColor: colors?.colorPrimaryBg,
    itemHoverColor: colors?.colorPrimaryBg,
    motionDurationSlow: '0.1s',
  },
})

export const getConfigProviderProps = ({ theme }: { theme?: 'light' | 'dark' }): ThemeConfig => {
  const lightColorsFromEnvOrDefault =
    Object.keys(THEME_TOKENS_COLORS_LIGHT).length > 0 ? THEME_TOKENS_COLORS_LIGHT : colorsLight
  const darkColorsFromEnvOrDefault =
    Object.keys(THEME_TOKENS_COLORS_DARK).length > 0 ? THEME_TOKENS_COLORS_DARK : colorsDark

  const sizesFromEnvOrDefault = Object.keys(THEME_TOKENS_SIZES).length > 0 ? THEME_TOKENS_SIZES : sizes

  const colorsFromEnvOrDefaultWithTheme = theme === 'dark' ? darkColorsFromEnvOrDefault : lightColorsFromEnvOrDefault

  const components = getDefaultComponentsSettings({ theme, colors: colorsFromEnvOrDefaultWithTheme })

  const lightComponentsFromEnv =
    Object.keys(THEME_TOKENS_COMPONENTS_LIGHT).length > 0 ? THEME_TOKENS_COMPONENTS_LIGHT : undefined
  const darkComponentsFromEnv =
    Object.keys(THEME_TOKENS_COMPONENTS_DARK).length > 0 ? THEME_TOKENS_COMPONENTS_DARK : undefined
  const componentsFromEnv = theme === 'dark' ? darkComponentsFromEnv : lightComponentsFromEnv

  const componentsFromEnvOrDefault = lightComponentsFromEnv && darkComponentsFromEnv ? componentsFromEnv : components

  return {
    algorithm: theme === 'dark' ? antdtheme.darkAlgorithm : undefined,
    token: {
      fontFamily: '"Roboto", sans-serif',
      ...colorsFromEnvOrDefaultWithTheme,
      ...sizesFromEnvOrDefault,
    },
    components: {
      ...componentsFromEnvOrDefault,
    },
  }
}
