import { SxProps } from "@mui/material";
import theme from "../../../theme/theme";
import RobotoRegular from "../../../assets/fonts/Roboto-Regular.ttf";
import RobotoBold from "../../../assets/fonts/Roboto-Bold.ttf";

const secondaryColor = theme.palette.secondary.main;
const lightColor = theme.palette.primary.light;
const primaryColor = theme.palette.primary.main;

export const footerContainer : SxProps ={
    backgroundColor: secondaryColor,
    position: "relative",
    pt:5,
    pb:5,
    mt:"auto"
};

export const logoStyles: SxProps = {
    height: {xs:50, md:55,lg:90, xl:110},
    width: "auto",
    cursor: "pointer",
    mt:1,
  };

  export const footerTopic: SxProps = {
    textTransform:"uppercase",
    color:`${lightColor}95`,
    fontFamily:RobotoBold,
    fontSize:{xs:20, sm:20, md:20,lg:20, xl:22},
    fontWeight:700,
    mb:2,
  };

  export const footerContent: SxProps = {
    color:`${lightColor}85`,
    fontFamily:RobotoRegular,
    fontSize:{xs:14, sm:14, md:14, lg:16, xl:18},
    textDecoration: "none",
    mb:0.5,
    transition: "color 0.3s ease-in-out, transform 0.2s ease-in-out",
    "&:hover": {
      color: primaryColor,
      fontFamily: RobotoBold,
    },
  };

  export const socialMediaIcon: SxProps = {
    height:{xs:35, lg:45,xl:50},
    width:"auto",
    color:`${lightColor}85`,
    transition: "color 0.3s ease-in-out, transform 0.2s ease-in-out",
    "&:hover": {
      color: primaryColor,
      transform: "scale(1.05)",
    },
  };

  export const socialMediaIconContainer: SxProps = {
   justifyContent:"center",
   alignItems:"center",
   mr:3
  };