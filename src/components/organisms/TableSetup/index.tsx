import React, { Dispatch, useState } from "react";
import { Box, Typography } from "@mui/material";
import { slideIn, mainContainer, tableBox, popupBox } from "./styles";
import SquareBigTable from "../../../assets/icons/Tables/squareBig.svg";
import SquareMediumTable from "../../../assets/icons/Tables/squareMedium.svg";
import RoundSmallTable from "../../../assets/icons/Tables/squareSmall.svg";
import RoundBigTable from "../../../assets/icons/Tables/circleBig.svg";
import RoundMediumTable from "../../../assets/icons/Tables/circleMedium.svg";
import RectangleTable from "../../../assets/icons/Tables/rectangle.svg";
import { tables } from "./mockData";

const getColorFilter = (status: string) => {
  switch (status) {
    case "Available":
      return "#AEE2B2"; // Greenish
    case "Pending":
      return "#FDFD96"; // Yellow
    case "Seated":
      return "#FF6961"; // Red
    default:
      return "";
  }
};

const commonBoxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";

const getTableSVG = (type: string, status: string, isSelected: boolean) => {
  const filter = getColorFilter(status);
  const commonStyle: React.CSSProperties = {
    color: filter,
    filter: `drop-shadow(${commonBoxShadow})`,
    stroke: isSelected ? "#000000" : "none", // Add stroke if selected
    strokeWidth: isSelected ? "0.4px" : "0", // Set stroke width if selected
  };
  switch (type) {
    case "squareBig":
      return (
        <SquareBigTable width="130px" height="130px" style={commonStyle} />
      );
    case "squareMedium":
      return (
        <SquareMediumTable width="130px" height="130px" style={commonStyle} />
      );
    case "roundMedium":
      return (
        <RoundMediumTable width="200px" height="200px" style={commonStyle} />
      );
    case "roundBig":
      return <RoundBigTable width="120px" height="120px" style={commonStyle} />;
    case "roundSmall":
      return (
        <RoundSmallTable width="240px" height="240px" style={commonStyle} />
      );
    case "rectangle":
      return (
        <RectangleTable width="350px" height="260px" style={commonStyle} />
      );
    default:
      return null;
  }
};

interface TableProps {
  selectedTable: any;
  onTableSelect: Dispatch<any>;
}

const TableSetup: React.FC<TableProps> = ({ selectedTable, onTableSelect }) => {
  const [hoveredTable, setHoveredTable] = useState<number | null>(null);

  return (
    <Box sx={mainContainer}>
      <Box sx={{ width: "85%", position: "relative" }}>
        {tables.map((table) => {
          const isSelected = selectedTable && selectedTable.id === table.id;
          return (
            <Box
              key={table.id}
              sx={{
                ...tableBox,
                position: "absolute",
                left: `${table.x}px`,
                top: `${table.y}px`,
                cursor: "pointer",
              }}
              onMouseEnter={() => setHoveredTable(table.id)}
              onMouseLeave={() => setHoveredTable(null)}
              onClick={() => onTableSelect(table)}
            >
              {getTableSVG(table.type, table.status, isSelected ?? false)}
              {hoveredTable === table.id && (
                <Box sx={popupBox}>
                  <Typography variant="h6">Table {table.id}</Typography>
                  <Typography variant="body2">
                    Chairs: {table.chairs}
                  </Typography>
                  <Typography
                    variant="body2"
                    color={
                      table.status === "Available"
                        ? "green"
                        : table.status === "Pending"
                        ? "orange"
                        : "red"
                    }
                  >
                    {table.status}
                  </Typography>
                </Box>
              )}
            </Box>
          );
        })}
      </Box>

      {selectedTable && (
        <Box
          sx={{
            width: "15%",
            padding: "16px",
            borderLeft: "1px solid #ccc",
            backgroundColor: "#f9f9f9",
            animation: `${slideIn} 0.5s ease-out`,
          }}
        >
          <Typography variant="h5">Table Details</Typography>
          <Typography variant="body1">Table ID: {selectedTable.id}</Typography>
          <Typography variant="body1">
            Chairs: {selectedTable.chairs}
          </Typography>
          <Typography variant="body1">
            Status: {selectedTable.status}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default TableSetup;
