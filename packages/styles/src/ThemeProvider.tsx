import React, { useState } from 'react';
import defaultTheme, { DefaultThemeConfig, ThemeConfig } from './themes'

import { ThemeProvider as SCThemeProvider } from 'styled-components';
import merge from 'lodash.merge';

// merge the color mode with the base theme
// to create a new theme object
function getTheme<T = "light">(mode: T, customTheme?: ThemeConfig): ThemeConfig {
  const theme = customTheme ?? defaultTheme;
  let colors = theme.themeModes?.['light']?.colors;
  if(theme?.themeModes) {
    colors = merge({}, theme?.themeModes?.[mode as unknown as string], theme.themeModes?.['light']?.colors)
  }
  return merge({}, theme, {
    colors,
  })
}

// Be able to provide theme object
// Be able to set the active theme
// Set types (generics?)

export interface ThemeProviderProps<ThemeObject = ThemeConfig> {
  children: React.ReactChild;
  theme?: ThemeObject;
}

function ThemeProvider<T extends ThemeConfig = DefaultThemeConfig>({ theme, children }: ThemeProviderProps<T>) {
  type ThemeModes = "light" | [keyof T["themeModes"]]
  // state for changing modes dynamically
  const [mode, _] = useState<ThemeModes>('light')
  const selectedTheme = getTheme<ThemeModes>(mode, theme)
  console.log('hey', selectedTheme)
  console.log('hey default', defaultTheme)
  return (
    <SCThemeProvider theme={defaultTheme}>
      { children }
    </SCThemeProvider>
  )
}

// function blah() {
//   const testTheme: ThemeConfig = {
//     colors: {
//       black: "#000"
//     }
//   }

//   return (
//     <ThemeProvider theme={testTheme}><div/></ThemeProvider>
//   )
// }

export default ThemeProvider;