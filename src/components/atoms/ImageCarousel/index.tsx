// Carousel.tsx
import React from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import Image1 from "../../../assets/icons/HomePage/image1.jpg"; // Update the path to your images
import Image2 from "../../../assets/icons/HomePage/image2.jpg"; // Update the path to your images
import Image3 from "../../../assets/icons/HomePage/home.png"; // Update the path to your images

const images = [Image1, Image2, Image3]; // Add more images as needed

const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <Box
          key={index}
          component="img"
          src={image}
          alt={`Slide ${index}`}
          sx={{ width: "100%", height: "auto" }}
        />
      ))}
    </Slider>
  );
};

export default Carousel;
