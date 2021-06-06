import BaseColors from '../primatives/colors';
import { ThemeColors } from "..";

const colors: Partial<ThemeColors> = {
  ...BaseColors,
  text: BaseColors.gray[900],
  background: BaseColors.white,
  primary: BaseColors.blue[500],
  secondary: BaseColors.gray[500],
  success: BaseColors.green[500],
  warning: BaseColors.yellow[500],
  danger: BaseColors.red[500],
  info: BaseColors.purple[500],
  button: {
    primary: {
      backgroundColor: BaseColors.blue[500],
      color: BaseColors.white,
    }
  }
}

export default colors;