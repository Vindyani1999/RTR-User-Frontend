import React from "react";
import { Box } from "@mui/material";
import Navbar from "../../molecules/mainNavbar";
import Footer from "../../molecules/Footer";
//import ImageCarousel from "../../atoms/ImageCarousel";

const HomePage: React.FC = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <Navbar />
      {/*<ImageCarousel />*/}
      <Footer />
    </Box>
  );
};

export default HomePage;
