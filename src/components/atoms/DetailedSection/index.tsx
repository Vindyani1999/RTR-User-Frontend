import React from "react";
import { Box, Container, Typography } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import {
  descriptionText,
  descriptionTextContainer,
  iconStyle,
  imageStyles,
  mainContainer,
  mainDetailedContainer,
  rotateIcon,
  titleText,
} from "./style";

interface DetailedSectionProps {
  title: string;
  description: string;
  bgColor: string;
  imageUrl: string; // New prop for the image URL
}

const DetailedSection: React.FC<DetailedSectionProps> = ({
  title,
  description,
  bgColor,
  imageUrl, // Accept imageUrl as a prop
}) => {
  return (
    <Box sx={mainDetailedContainer}>
      <Box
        sx={{
          ...mainContainer,
          bgcolor: bgColor,
        }}
      >
        <Box>
          <Typography sx={titleText}>{title}</Typography>

          <Container maxWidth="md">
            <Box sx={descriptionTextContainer}>
              <FormatQuoteIcon sx={rotateIcon} />
              <Typography sx={descriptionText}>{description}</Typography>
              <FormatQuoteIcon sx={iconStyle} />
            </Box>
          </Container>
        </Box>

        <Box
          component="img"
          src={imageUrl} // Use the image URL prop
          alt="Detailed"
          sx={imageStyles}
        />
      </Box>
    </Box>
  );
};

export default DetailedSection;
