import React from "react";
import { Box } from "@mui/material";
import Navbar from "../../molecules/mainNavbar";
import Footer from "../../molecules/Footer";
import ImageCarousel from "../../molecules/ImageCarousel";

import Image1 from "../../../assets/icons/HomePage/home.png";
import Image2 from "../../../assets/icons/HomePage/home2.png";
import Image3 from "../../../assets/icons/HomePage/home3.jpeg";
import { homePageContainer } from "../HomePage/styles";
import FeatureContainer from "../../organisms/FeatureContainer";
import { featureMainContainer } from "./styles";

const slides = [{ src: Image1 }, { src: Image2 }, { src: Image3 }];

const overlayText = "Features";
const overlayDescriptionText =
  "Where Fine Food, Friends, and Family Come Together";
const buttonText = "Reserve Now";

const FeaturePage: React.FC = () => {
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
      <Box sx={featureMainContainer}>
        <FeatureContainer />
      </Box>
      <Footer />
    </Box>
  );
};

export default FeaturePage;
