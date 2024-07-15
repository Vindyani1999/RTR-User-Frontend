import { SxProps } from "@mui/system";
import theme from "../../../theme/theme";

const secondaryColor = theme.palette.secondary.main;
const lightColor = theme.palette.primary.light;
const primaryColor = theme.palette.primary.main;

export const appBarStyles: SxProps = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: "transparent",
  paddingX: { md: 1, lg: 5 },
  transition: "background-color 0.3s ease-in-out",
};

export const appBarScrolledStyles: SxProps = {
  ...appBarStyles,
  backgroundColor: secondaryColor,
};

export const logoStyles: SxProps = {
  height: 50,
  width: "auto",
  cursor: "pointer",
  opacity: 1,
};

export const logoMiniStyles: SxProps = {
  height: 40,
  width: "auto",
  cursor: "pointer",
  opacity: 1,
};

export const linkStyles: SxProps = {
  textDecoration: "none",
  color: lightColor,
  fontFamily: 'Raleway, sans-serif',
  transition: "color 0.3s ease-in-out, transform 0.2s ease-in-out",
  "&:hover": {
    color: primaryColor,
    transform: "scale(1.05)",
    fontFamily: 'Roboto, sans-serif',
  },
};

export const linkTextStyles: SxProps = {
  fontFamily: 'Raleway, sans-serif',
  fontSize: { xs: "16px", sm: "16px", md: "20px", lg: "20px", xl: "22px" },
  px: { sm: 1, lg: 2 },
};

export const drawerStyles: SxProps = {
  width: 250,
  backgroundColor: `${secondaryColor}90`,
  height: "100%",
};

export const drawerItemStyles: SxProps = {
  textDecoration: "none",
  color: lightColor,
  fontFamily: 'Roboto, sans-serif',
  transition: "color 0.3s ease-in-out, transform 0.2s ease-in-out",
  "&:hover": {
    color: primaryColor,
    transform: "scale(1.05)",
    fontFamily: 'Roboto, sans-serif',
  },
};
