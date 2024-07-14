import React from "react";
import { Box } from "@mui/material";
import Navbar from "../../molecules/mainNavbar";
//import sliderImage1 from "../../../assets/icons/HomePage/home.png";
//import { sliderImageStyle } from "./styles";

const HomePage: React.FC = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <Navbar />
    </Box>
  );
};

export default HomePage;
