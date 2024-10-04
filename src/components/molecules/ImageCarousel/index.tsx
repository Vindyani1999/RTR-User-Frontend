import React from "react";
import { Box, Link, Typography } from "@mui/material";
import Carousel from "../../atoms/SliderImages";
import DownArrow from "../../atoms/DownArrow";
import {
  overlayContainer,
  overlayButton,
  overlayTextStyle,
  imageOverlayStyle,
  overlayDescriptionStyle,
  overlayButtonContainer,
} from "./styles";

export interface CarouselSlide {
  src: string;
}

interface ImageCarouselProps {
  slides: CarouselSlide[];
  overlayText: string;
  overlayDescription: string;
  buttonText: string;
  isHomePage: boolean;
  isBookNowPage: boolean;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  slides,
  overlayText,
  overlayDescription,
  buttonText,
  isHomePage,
  isBookNowPage,
}) => {
  const handleArrowClick = () => {
    window.scrollBy({
      top: isHomePage ? 700 : 250,
      behavior: "smooth",
    });
  };

  const carouselHeight = isHomePage
    ? { xs: "180px", sm: "450px", md: "600px", lg: "710px", xl: "770px" }
    : isBookNowPage
    ? { xs: "100px", sm: "200px", md: "250px", lg: "200px", xl: "200px" }
    : { xs: "100px", sm: "200px", md: "250px", lg: "300px", xl: "300px" };

  const overlayTextSize = isHomePage
    ? { xs: 20, sm: 35, md: 45, lg: 55, xl: 60 }
    : { xs: 20, sm: 25, md: 28, lg: 30, xl: 32 };

  const overlayTextMargin = isHomePage ? 0 : 1;

  // Define animation styles
  const animationStyles = {
    transition: "transform 0.5s ease-in-out",
    transform: "translateX(0)",
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Carousel>
        {slides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              ...imageOverlayStyle,
              height: carouselHeight,
              ...(isHomePage && animationStyles), // Apply animation only if isHomePage is true
            }}
          >
            <Box
              component="img"
              src={slide.src}
              alt={`Slide ${index}`}
              sx={{
                width: "100%",
                height: "auto",
                maxHeight: carouselHeight,
                objectFit: "cover",
                ...(isHomePage && {
                  animation: `slideAnimation ${slides.length * 2}s infinite`,
                }), // Add animation to images only for the homepage
              }}
            />
          </Box>
        ))}
      </Carousel>
      <Box sx={{ ...overlayContainer, marginTop: isHomePage ? 0 : "50px" }}>
        <Typography
          sx={{
            ...overlayTextStyle,
            fontSize: overlayTextSize,
            marginBottom: overlayTextMargin,
          }}
        >
          {overlayText}
        </Typography>
        {isHomePage && (
          <Typography sx={overlayDescriptionStyle}>
            {overlayDescription}
          </Typography>
        )}

        {isHomePage && (
          <Box sx={overlayButtonContainer}>
            <Link underline="none">
              <Typography sx={overlayButton}>{buttonText}</Typography>
            </Link>
          </Box>
        )}
      </Box>
      <DownArrow onClick={handleArrowClick} />
    </Box>
  );
};

export default ImageCarousel;
