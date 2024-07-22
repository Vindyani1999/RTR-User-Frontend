import { SxProps, Theme } from "@mui/system";
import theme from "../../../theme/theme";

const primaryColor = theme.palette.primary.main;
const lightColor = theme.palette.primary.light;

export const overlayContainer: SxProps<Theme> = {
  position: "absolute",
  top: { xs: "35%", sm: "45%", md: "45%", lg: "45%", xl: "45%" },
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  zIndex: 1,
  color: "#fff",
};

export const overlayTextStyle: SxProps<Theme> = {
  fontFamily: 'Raleway, sans-serif',
  fontSize: { xs: 24, sm: 28, md: 40, lg: 55, xl: 60 },
  fontWeight: "bold",
};

export const overlayDescriptionStyle: SxProps<Theme> = {
  fontFamily: 'Raleway, sans-serif',
  fontSize: { xs: 12, sm: 18, md: 20, lg: 25, xl: 22 },
  mb: 5,
};

export const overlayButton: SxProps<Theme> = {
    fontFamily: 'Raleway, sans-serif',
    fontSize:{xs:12, sm:14, md:14, lg:16, xl:16},
    color: lightColor,
    textDecoration:"none",
    "&:hover": {
        backgroundColor: "transparent",
        color: `${lightColor}90`,
  },
};

export const overlayButtonContainer: SxProps<Theme> = {
fontFamily: 'Raleway, sans-serif',
  width: 130,
  padding: 1,
  borderRadius: 2,
  backgroundColor: primaryColor,
  color: `${lightColor}90`,
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  transition: "box-shadow 0.5s ease",
  cursor: "pointer",
  "&:hover": {
    boxShadow: "0px 0px 20px 0px rgba(255, 255, 255, 0.8)",
    background: "transparent",
    color: `${lightColor}90`,
  },
};

export const imageOverlayStyle: SxProps<Theme> = {
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    zIndex: 1,
  },
};


