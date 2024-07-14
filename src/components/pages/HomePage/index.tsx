import React from "react";
import { Box } from "@mui/material";
import Navbar from "../../molecules/mainNavbar";
import Footer from "../../molecules/Footer";
//import sliderImage1 from "../../../assets/icons/HomePage/home.png";
//import { sliderImageStyle } from "./styles";

const HomePage: React.FC = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <Navbar />
      <Footer />
    </Box>
  );
};

export default HomePage;
