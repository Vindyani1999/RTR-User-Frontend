import { SxProps, Theme } from "@mui/material";

import { keyframes } from "@mui/system";

// Define the slideIn animation
export const slideIn = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0%);
    opacity: 1;
  }
`;

export const mainContainer = {
  position: "relative",
  display: "flex",
  minHeight: "86vh",
  with: "100%",
  margin: "20px 20px 0 20px",
  border: "1px solid #e0e0e0",
  borderRadius: "4px",
};

export const tableBox: SxProps<Theme> = {
  display: "flex",
  textAlign: "center",
  backgroundColor: "transparent",
};

export const popupBox = {
  position: "absolute",
  top: "-60px",
  left: "0px",
  background: "#fff",
  padding: "10px",
  borderRadius: "4px",
  boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
  zIndex: 1,
};
