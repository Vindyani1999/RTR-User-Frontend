import { SxProps } from "@mui/system";
import theme from "../../../theme/theme";
import RobotoMedium from "../../../assets/fonts/Roboto-Medium.ttf";
import RobotoBold from "../../../assets/fonts/Roboto-Bold.ttf";

const secondaryColor = theme.palette.secondary.main;
const lightColor = theme.palette.primary.light;
const primaryColor = theme.palette.primary.main;

export const appBarStyles: SxProps = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: `${secondaryColor}90`,
  paddingX: 5,
};

export const logoStyles: SxProps = {
  height: 50,
  width: "auto",
  cursor: "pointer",
  opacity: 1,
};

export const linkStyles: SxProps = {
  px: 2,
  textDecoration: "none",
  color: lightColor,
  fontFamily: RobotoMedium,
  transition: "color 0.3s ease-in-out, transform 0.2s ease-in-out", 
  "&:hover": {
    color: primaryColor,
    transform: "scale(1.05)", 
    fontFamily:RobotoBold
  },
};
