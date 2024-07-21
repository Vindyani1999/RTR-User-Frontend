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
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  slides,
  overlayText,
  overlayDescription,
  buttonText,
  isHomePage,
}) => {
  const handleArrowClick = () => {
    window.scrollBy({
      top: isHomePage ? 700 : 250,
      behavior: "smooth",
    });
  };

  const carouselHeight = isHomePage ? "770px" : "300px";
  const overlayTextSize = isHomePage
    ? { xs: 30, sm: 35, md: 45, lg: 55, xl: 60 }
    : { xs: 20, sm: 25, md: 28, lg: 30, xl: 32 };

  const overlayTextMargin = isHomePage
    ? 0
    : { xs: 1, sm: 1, md: 1, lg: 1, xl: 1 };

  return (
    <Box sx={{ position: "relative" }}>
      <Carousel>
        {slides.map((slide, index) => (
          <Box
            key={index}
            sx={{ ...imageOverlayStyle, height: carouselHeight }}
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
