import React from "react";
import { Box } from "@mui/material";
import Navbar from "../../molecules/mainNavbar";
import Footer from "../../molecules/Footer";
import ImageCarousel from "../../molecules/ImageCarousel";

import Image1 from "../../../assets/icons/HomePage/home.png";
import Image2 from "../../../assets/icons/HomePage/home6.jpg";
import Image3 from "../../../assets/icons/HomePage/home3.jpeg";
import { homePageContainer } from "./styles";
import AboutSection from "../../molecules/AboutUsSection";

const slides = [{ src: Image1 }, { src: Image2 }, { src: Image3 }];

const overlayText = "Online Table Reservation";
const overlayDescriptionText =
  "Where Fine Food, Friends, and Family Come Together";
const buttonText = "Reserve Now";

const HomePage: React.FC = () => {
  return (
    <Box sx={homePageContainer}>
      <Navbar />
      <ImageCarousel
        isHomePage={true}
        isBookNowPage={false}
        slides={slides}
        overlayText={overlayText}
        overlayDescription={overlayDescriptionText}
        buttonText={buttonText}
      />
      <Box>
        <AboutSection />
      </Box>
      <Footer />
    </Box>
  );
};

export default HomePage;
