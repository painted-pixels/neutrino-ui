import BaseColors, { BaseColorsType } from './primatives/colors';

// Default Theme Config (Full)
// Theme (Partial/Full Overlay)

type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
};

export type ThemeColors = {
  text: string;
  background: string;
  primary: string;
  secondary: string;
  success: string;
  warning: string;
  danger: string;
  info: string;
} & BaseColorsType;

export type ThemeMode = 'light' | 'dark';

interface BaseThemeConfig {
  colors: ThemeColors;
  fonts: {
    families: {
      body: string;
    },
    sizes: {
      tiny: string;
    }
  };
}

export interface DefaultThemeConfig extends BaseThemeConfig {
  themeModes: {
    [key: string]: Partial<BaseThemeConfig>;
  };
}



const defaultTheme: DefaultThemeConfig = {
  colors: {
    ...BaseColors,
    text: BaseColors.red[200],
    background: BaseColors.gray[100],
    primary: BaseColors.blue[500],
    secondary: BaseColors.gray[500],
    success: BaseColors.green[500],
    warning: BaseColors.yellow[500],
    danger: BaseColors.red[500],
    info: BaseColors.purple[500],
  },
  fonts: {
    families: {
      body: "Open Sans",
    },
    sizes: {
      tiny: '0.75rem',
    }
  },
  themeModes: {
    dark: {}
  }
}

export type ThemeConfig = DeepPartial<DefaultThemeConfig>;
export default defaultTheme;