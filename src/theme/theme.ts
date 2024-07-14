import { createTheme } from "@mui/material/styles";
export enum SCREENS {
  XS = 0,
  SM = 640,
  MD = 768,
  LG = 1024,
  PP = 1100,
  XL = 1280,
  XL2 = 1536,
  XL3 = 2000,
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#DC5F00",
      light:"#ffffff"
    },
    secondary: {
      main: "#373A40",
    },
  },

  breakpoints: {
    values: {
      xs: SCREENS.XS,
      sm: SCREENS.SM,
      md: SCREENS.MD,
      lg: SCREENS.LG,
      xl: SCREENS.XL,
    },
  },
});

export default theme;

