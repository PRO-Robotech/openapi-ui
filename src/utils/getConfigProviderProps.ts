import { ThemeConfig, theme as antdtheme } from 'antd'
import { colorsLight, colorsDark, sizes as sizesDefault } from 'constants/colors'
import {
  THEME_TOKENS_COLORS_LIGHT,
  THEME_TOKENS_COLORS_DARK,
  THEME_TOKENS_SIZES,
  THEME_TOKENS_COMPONENTS_DARK,
  THEME_TOKENS_COMPONENTS_LIGHT,
  THEME_TOKENS_USE_MERGE_STRATEGY,
} from 'constants/customizationApiGroupAndVersion'

const isMerge = THEME_TOKENS_USE_MERGE_STRATEGY === 'true'

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
    trackBg: colors?.colorBgLayout,
    itemColor: colors?.colorText,
    itemHoverColor: colors?.colorText,
    itemSelectedBg: colors?.colorText,
    itemSelectedColor: colors?.colorInfoBg,
    motionDurationSlow: '0.1s',
  },
})

export const getColors = ({
  colorsEnv,
  colorsDefault,
}: {
  colorsEnv: ThemeConfig['token']
  colorsDefault: ThemeConfig['token']
}): ThemeConfig['token'] => {
  if (colorsEnv && Object.keys(colorsEnv).length > 0) {
    if (isMerge) {
      return { ...colorsDefault, ...colorsEnv }
    }
    return colorsEnv
  }
  return colorsDefault
}

export const getSizes = ({
  sizesEnv,
  sizesDefault,
}: {
  sizesEnv: ThemeConfig['token']
  sizesDefault: ThemeConfig['token']
}): ThemeConfig['token'] => {
  if (sizesEnv && Object.keys(sizesEnv).length > 0) {
    if (isMerge) {
      return { ...sizesDefault, ...sizesEnv }
    }
    return sizesEnv
  }
  return sizesDefault
}

export const getConfigProviderProps = ({ theme }: { theme?: 'light' | 'dark' }): ThemeConfig => {
  const lightColors = getColors({ colorsEnv: THEME_TOKENS_COLORS_LIGHT, colorsDefault: colorsLight })
  const darkColors = getColors({ colorsEnv: THEME_TOKENS_COLORS_DARK, colorsDefault: colorsDark })
  const colors = theme === 'dark' ? darkColors : lightColors

  const sizes = getSizes({ sizesEnv: THEME_TOKENS_SIZES, sizesDefault })

  const components = getDefaultComponentsSettings({ theme, colors })

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
      ...colors,
      ...sizes,
    },
    components: {
      ...componentsFromEnvOrDefault,
    },
  }
}
