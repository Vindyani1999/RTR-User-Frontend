import { Theme } from "@emotion/react";
import { SxProps } from "@mui/system";

export const datePickerContainer: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  pt: 15,
  minHeight: "10vh",
  borderRadius: "12px",
};

export const personalDetailsContainer: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  pt: 15,
  minHeight: "20vh",
  borderRadius: "12px",
};

export const tableDetailsContainer: SxProps<Theme> = {
  pt: 2,
  minHeight: "20vh",
  borderRadius: "12px",
};

export const homePageContainer: SxProps = {
  position: "relative",
  flexDirection: "column",
};

export const stepButtonContainer: SxProps<Theme> = {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  maxWidth: "500px",
  mt: 3,
};

export const stepButton: SxProps<Theme> = {
  width: "48%",
  backgroundColor: "#1976d2",
  "&:hover": {
    backgroundColor: "#115293",
  },
  color: "#fff",
};

export const finishButton: SxProps<Theme> = {
  ...stepButton,
  backgroundColor: "#4caf50",
  "&:hover": {
    backgroundColor: "#388e3c",
  },
};

export const stepIndicatorContainer: SxProps<Theme> = {
  position: "absolute",
  width: "100%",
  marginBottom: "250px",
  display: "flex",
  justifyContent: "center",
};

export const buttonsStyle: SxProps<Theme> = {
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  justifyContent: "center",
  borderRadius: "12px",
};

export const errorStyle: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  mb: 2,
};
