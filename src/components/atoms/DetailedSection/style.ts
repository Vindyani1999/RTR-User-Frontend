import { SxProps } from "@mui/material";

export const mainContainer: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "row",
  position: "relative",
  width: "100%",
  borderLeft: "2px solid orange", // Added border-left for mainContainer
};

export const mainDetailedContainer: SxProps = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  justifyContent: "center",
};

export const descriptionTextContainer: SxProps = {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  flexDirection: "column",
  pl: { xs: 2, sm: 3, md: 5 },
  ml: { xs: 3, sm: 5, md: 10 },
  borderLeft: "4px solid orange",
};

export const titleText: SxProps = {
  fontWeight: "bold",
  fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
  marginBottom: "20px",
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
  position: "relative",
  marginTop: "5px",
  marginBottom: "5px",
  width: { xs: "200px", sm: "250px", md: "350px", lg: "450px" },
  height: { xs: "200px", sm: "250px", md: "350px", lg: "450px" },
  objectFit: "cover",
  pr: 12,
  pt: 8,
  pb: 8,
};
