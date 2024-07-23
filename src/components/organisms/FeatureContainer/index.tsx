import React from "react";
import { Box } from "@mui/material";
import DetailedSection from "../../atoms/DetailedSection";
import { featuresData } from "../../../constants/featuresData";
import { featureContainerStyle } from "./styles";

const FeaturePage: React.FC = () => {
  return (
    <Box sx={featureContainerStyle}>
      {featuresData.map((feature, index) => (
        <DetailedSection
          key={index}
          title={feature.title}
          description={feature.description}
          imageUrl={feature.imageUrl}
          isFlipped={feature.isFlipped}
        />
      ))}
    </Box>
  );
};

export default FeaturePage;
