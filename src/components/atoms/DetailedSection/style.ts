import { SxProps } from "@mui/material";

export const mainContainer: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "row",
  position: "relative",
  width: "100%",
  overflow: "hidden", // Ensuring content doesn't overflow
};

export const mainDetailedContainer: SxProps = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  justifyContent: "center",
  p: 3,
  boxSizing: "border-box",
  pr:2
};

export const descriptionTextContainer: SxProps = {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  flexDirection: "column",
  pl: { xs: 2, sm: 3, md: 5 },
  ml: { xs: 1, sm: 2, md: 5 },
  borderLeft: "4px solid orange",
  boxSizing: "border-box",
};

export const titleText: SxProps = {
  fontWeight: "bold",
  fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
  marginBottom: "30px",
  textAlign: "center",
  fontFamily: 'Raleway-bold, sans-serif',
  ml: { xs: 3, sm: 5, md: 10 },
};

export const descriptionText: SxProps = {
  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" },
  marginBottom: "20px",
  textAlign: "justify",
};

export const rotateIcon: SxProps = {
  transform: "rotate(180deg)",
  fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
  marginBottom: "10px",
  alignSelf: "flex-start",
};

export const iconStyle: SxProps = {
  fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
  marginTop: "5px",
  alignSelf: "flex-end",
};

export const imageStyles: SxProps = {
  width: "100%", // Ensures the image takes full width of the container
  maxWidth: { xs: "200px", sm: "250px", md: "350px", lg: "380px", xl: "400px" }, // Max width to control size
  height: "auto", // Maintain aspect ratio
  objectFit: "cover",
  mx: "auto", 
  pt: 5,
  pb: 5,
};
