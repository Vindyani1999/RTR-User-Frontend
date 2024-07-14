import { SxProps } from "@mui/material";
import theme from "../../../theme/theme";
import RobotoRegular from "../../../assets/fonts/Roboto-Regular.ttf";
import RobotoBold from "../../../assets/fonts/Roboto-Bold.ttf";

const secondaryColor = theme.palette.secondary.main;
const lightColor = theme.palette.primary.light;
const primaryColor = theme.palette.primary.main;

export const footerContainer : SxProps ={
    backgroundColor: secondaryColor,
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    mb: 0,
    pt:5,
    pb:5,
};

export const logoStyles: SxProps = {
    height: {xs:50, md:75,lg:110},
    width: "auto",
    cursor: "pointer",
    mt:1,
  };

  export const footerTopic: SxProps = {
    color:`${lightColor}95`,
    fontFamily:RobotoBold,
    fontSize:{xs:20, sm:20, md:20, lg:22},
    fontWeight:700,
    mb:1,
  };

  export const footerContent: SxProps = {
    color:`${lightColor}85`,
    fontFamily:RobotoRegular,
    fontSize:{xs:14, sm:14, md:14, lg:16},
    textDecoration: "none",
    transition: "color 0.3s ease-in-out, transform 0.2s ease-in-out",
    "&:hover": {
      color: primaryColor,
      fontFamily: RobotoBold,
    },
  };

  export const socialMediaIcon: SxProps = {
    height:50,
    width:"auto",
    color:`${lightColor}85`,
    transition: "color 0.3s ease-in-out, transform 0.2s ease-in-out",
    "&:hover": {
      color: primaryColor,
      transform: "scale(1.05)",
    },
  };