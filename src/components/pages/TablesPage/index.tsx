import React from "react";
import { Box } from "@mui/material";
import Navbar from "../../molecules/mainNavbar";
import Footer from "../../molecules/Footer";
import ImageCarousel from "../../molecules/ImageCarousel";

import Image1 from "../../../assets/icons/HomePage/home.png";
import Image2 from "../../../assets/icons/HomePage/home2.png";
import Image3 from "../../../assets/icons/HomePage/home3.jpeg";

import TableSetup from "../../organisms/TableSetup";
import { homePageContainer, tableMainContainer } from "./styles";

const slides = [{ src: Image1 }, { src: Image2 }, { src: Image3 }];

const overlayText = "Table Setup & Live Bookings";
const overlayDescriptionText = "";
const buttonText = "";

const TablePage: React.FC = () => {
  return (
    <Box sx={homePageContainer}>
      <Navbar />
      <ImageCarousel
        isHomePage={false}
        slides={slides}
        overlayText={overlayText}
        overlayDescription={overlayDescriptionText}
        buttonText={buttonText}
      />
      <Box sx={tableMainContainer}>
        <TableSetup />
      </Box>
      <Footer />
    </Box>
  );
};

export default TablePage;
