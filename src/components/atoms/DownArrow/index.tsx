import React from "react";
import { IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { downArrowStyle } from "./styles";

interface DownArrowProps {
  onClick: () => void;
}

const DownArrow: React.FC<DownArrowProps> = ({ onClick }) => {
  return (
    <IconButton onClick={onClick} sx={downArrowStyle}>
      <KeyboardArrowDownIcon sx={{ color: "#000000", height: 45, width: 45 }} />
    </IconButton>
  );
};

export default DownArrow;
