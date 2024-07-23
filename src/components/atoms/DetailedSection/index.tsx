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
  textContainer,
  titleText,
} from "./style";

interface DetailedSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  isFlipped: boolean; // New prop for flipping
}

const DetailedSection: React.FC<DetailedSectionProps> = ({
  title,
  description,
  imageUrl,
  isFlipped,
}) => {
  return (
    <Box sx={mainDetailedContainer}>
      <Box
        sx={{
          ...mainContainer,
          flexDirection: isFlipped ? "row-reverse" : "row", // Conditionally set flex direction
        }}
      >
        <Box sx={textContainer}>
          <Typography
            sx={{
              ...titleText,
              ml: isFlipped ? 0 : { xs: 3, sm: 5, md: 8, lg: 10, xl: 10 },
            }}
          >
            {title}
          </Typography>

          <Container maxWidth="lg">
            <Box
              sx={{
                ...descriptionTextContainer,
                borderLeft: isFlipped ? "0px solid orange" : "4px solid orange",
                borderRight: isFlipped
                  ? "4px solid orange"
                  : "0px solid orange",
                pr: isFlipped
                  ? { xs: 2, sm: 3, md: 5, lg: 4, xl: 5 }
                  : { xs: 1, sm: 2, md: 3, lg: 4, xl: 7 },
                pl: isFlipped
                  ? { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }
                  : { xs: 2, sm: 3, md: 5, lg: 4, xl: 5 },
                mr: isFlipped ? { xs: 1, sm: 2, md: 8, lg: 7, xl: 8 } : 0,
                ml: isFlipped
                  ? { xs: 1, sm: 2, md: 2, lg: 2, xl: 2 }
                  : { xs: 1, sm: 2, md: 8, lg: 7, xl: 7 },
              }}
            >
              <FormatQuoteIcon sx={rotateIcon} />
              <Typography sx={descriptionText}>{description}</Typography>
              <FormatQuoteIcon sx={iconStyle} />
            </Box>
          </Container>
        </Box>

        <Box
          component="img"
          src={imageUrl}
          alt="Detailed"
          sx={{
            ...imageStyles,
            mr: isFlipped ? 0 : { xs: 1, sm: 2, md: 2, lg: 4, xl: 5 },
            ml: isFlipped ? { xs: 1, sm: 2, md: 2, lg: 4, xl: 8 } : 0,
          }}
        />
      </Box>
    </Box>
  );
};

export default DetailedSection;
