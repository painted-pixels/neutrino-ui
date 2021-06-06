import { BaseColorsType } from './primatives/colors';

// import lightColors from './light';

// Default Theme Config (Full)
// Theme (Partial/Full Overlay)

type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
};

export type ThemedComponentStyle = {
  backgroundColor?: string;
  borderColor?: string;
  color?: string;
}

export type ThemedComponent = {
  primary: ThemedComponentStyle;
  secondary?:  ThemedComponentStyle;
  success?: ThemedComponentStyle;
  warning?: ThemedComponentStyle;
  danger?: ThemedComponentStyle;
  info?: ThemedComponentStyle;
}

export type ThemeColors = {
  text: string;
  background: string;
  primary: string;
  secondary: string;
  success: string;
  warning: string;
  danger: string;
  info: string;
  button: ThemedComponent;
} & BaseColorsType;

export type ThemeMode = 'light' | 'dark';

interface BaseThemeConfig {
  fonts: {
    families: {
      body: string;
    },
    sizes: {
      tiny: string;
    }
  };
  buttons: any;
  colors: any;
  secondary: any;
}

export interface DefaultThemeConfig extends BaseThemeConfig {
  themeModes?: {
    [key: string]: {colors: DeepPartial<ThemeColors>;} & DeepPartial<BaseThemeConfig>;
  };
}

const defaultTheme: DefaultThemeConfig = {
  fonts: {
    families: {
      body: "Open Sans",
    },
    sizes: {
      tiny: '0.75rem',
    }
  },
  buttons: {
    primary: {
      color: 'white',
      bg: 'red',
    },
    secondary: {
      color: 'white',
      bg: 'tomato',
    },
  },
  colors: {
  text: '#000',
  background: '#fff',
  primary: '#0f0',
  secondary: '#00a',
  gray: '#eee',
  blue: '#0f0',
  lightgray: '#fafafa',
  modes: {
    dark: {
      text: '#fff',
      background: '#000',
      primary: '#0cf',
      secondary: '#f0e',
      gray: '#222',
      lightgray: '#111',
    },
    // other color modes...
  },
},
  secondary: '#00f',
}

export type ThemeConfig = DeepPartial<DefaultThemeConfig>;
export default defaultTheme;