import theme from "../../../theme/theme";
import { SxProps, Theme } from "@mui/material";

export const tableMainContainer: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  position: "relative",
  height: "80vh",
  justifyContent: "flex-end",
  alignItems: "center",
  mb: 5,
  mt: -4,

  [theme.breakpoints.up("lg")]: {
    transform: "scale(0.8)",
  },
  [theme.breakpoints.between("md", "lg")]: {
    transform: "scale(0.7)",
  },
  [theme.breakpoints.between("sm", "md")]: {
    transform: "scale(0.55)",
  },
  [theme.breakpoints.down("sm")]: {
    transform: "scale(0.44)",
  },
};

export const homePageContainer: SxProps = {
  position: "relative",
  flexDirection: "column",
};
