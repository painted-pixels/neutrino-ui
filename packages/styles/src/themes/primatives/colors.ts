export type ColorHues = {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  1000: string;
}

export type BaseColorsType = {
  white: string;
  gray: ColorHues;
  black: string;
  red: ColorHues;
  orange: ColorHues;
  yellow: ColorHues;
  green: ColorHues;
  blue: ColorHues;
  purple: ColorHues;
  magenta: ColorHues;
}

const BaseColors: BaseColorsType = {
  white: "#FFFFFF",
  black: "#000000",
  gray: {
    100: "#fafbfc",
    200: "#f6f8fa",
    300: "#e1e4e8",
    400: "#d1d5da",
    500: "#959da5",
    600: "#6a737d",
    700: "#586069",
    800: "#444d56",
    900: "#2f363d",
    1000: "#24292e"
  },
  red: {
    100: "#ffeef0",
    200: "#ffdce0",
    300: "#fdaeb7",
    400: "#f97583",
    500: "#ea4a5a",
    600: "#d73a49",
    700: "#cb2431",
    800: "#b31d28",
    900: "#9e1c23",
    1000: "#86181d"
  },
  orange: {
    100: "#fff8f2",
    200: "#ffebda",
    300: "#ffd1ac",
    400: "#ffab70",
    500: "#fb8532",
    600: "#f66a0a",
    700: "#e36209",
    800: "#d15704",
    900: "#c24e00",
    1000: "#a04100"
  },
  yellow: {
    100: "#fffdef",
    200: "#fffbdd",
    300: "#fff5b1",
    400: "#ffea7f",
    500: "#ffdf5d",
    600: "#ffd33d",
    700: "#f9c513",
    800: "#dbab09",
    900: "#b08800",
    1000: "#735c0f"
  },
  green: {
    100: "#f0fff4",
    200: "#dcffe4",
    300: "#bef5cb",
    400: "#85e89d",
    500: "#34d058",
    600: "#28a745",
    700: "#22863a",
    800: "#176f2c",
    900: "#165c26",
    1000: "#144620"
  },
  blue: {
    100: "#f1f8ff",
    200: "#dbedff",
    300: "#c8e1ff",
    400: "#79b8ff",
    500: "#2188ff",
    600: "#0366d6",
    700: "#005cc5",
    800: "#044289",
    900: "#032f62",
    1000: "#05264c"
  },
  purple: {
    100: "#f5f0ff",
    200: "#e6dcfd",
    300: "#d1bcf9",
    400: "#b392f0",
    500: "#8a63d2",
    600: "#6f42c1",
    700: "#5a32a3",
    800: "#4c2888",
    900: "#3a1d6e",
    1000: "#29134e"
  },
  magenta: {
    100: "#ffeef8",
    200: "#fedbf0",
    300: "#f9b3dd",
    400: "#f692ce",
    500: "#ec6cb9",
    600: "#ea4aaa",
    700: "#d03592",
    800: "#b93a86",
    900: "#99306f",
    1000: "#6d224f"
  }
}

export default BaseColors;