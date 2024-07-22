import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { SxProps } from "@mui/system";

interface OverlappingImageProps {
  title: string;
  description: string;
  imageUrl: string;
  rectangleWidth?: string;
  rectangleHeight?: string;
  imageOffsetLeft?: string;
}

const OverlappingImage: React.FC<OverlappingImageProps> = ({
  title,
  description,
  imageUrl,
  rectangleWidth = "400px",
  rectangleHeight = "200px",
  imageOffsetLeft = "-100px",
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Rectangle with title and description */}
        <Box
          sx={{
            width: rectangleWidth,
            height: rectangleHeight,
            backgroundColor: "#f0f0f0",
            borderRadius: "10px",
            padding: "20px",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Typography variant="h4" component="h2" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {description}
          </Typography>
        </Box>

        {/* Image overlapping the rectangle */}
        <Box
          sx={{
            position: "absolute",
            left: imageOffsetLeft,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 0,
            "& img": {
              width: "300px", // Adjust image size as needed
              height: "auto",
              borderRadius: "10px",
              boxShadow: "0px 0px 10px rgba(0,0,0,0.2)", // Optional: add shadow for depth
            },
          }}
        >
          <Box component="img" src={imageUrl} alt="Overlapping" />
        </Box>
      </Box>
    </Box>
  );
};

export default OverlappingImage;
