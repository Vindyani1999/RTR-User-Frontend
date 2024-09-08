import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { mainContainer, tableBox, popupBox } from "./styles";
import SquareBigTable from "../../../assets/icons/Tables/squareBig.svg";
import SquareMediumTable from "../../../assets/icons/Tables/squareMedium.svg";
import RoundSmallTable from "../../../assets/icons/Tables/squareSmall.svg";
import RoundBigTable from "../../../assets/icons/Tables/circleBig.svg";
import RoundMediumTable from "../../../assets/icons/Tables/circleMedium.svg";
import RectangleTable from "../../../assets/icons/Tables/rectangle.svg";

const tables = [
  { id: 1, type: "squareBig", chairs: 8, status: "Available", x: 100, y: 50 },
  { id: 2, type: "roundSmall", chairs: 2, status: "Pending", x: 280, y: 70 },
  { id: 3, type: "roundBig", chairs: 10, status: "Seated", x: 400, y: 50 },
  { id: 4, type: "roundSmall", chairs: 2, status: "Available", x: 570, y: 70 },
  { id: 5, type: "roundSmall", chairs: 2, status: "Seated", x: 680, y: 70 },
  { id: 6, type: "roundBig", chairs: 10, status: "Available", x: 800, y: 50 },
  { id: 7, type: "squareBig", chairs: 8, status: "Seated", x: 980, y: 50 },
  {
    id: 8,
    type: "roundMedium",
    chairs: 4,
    status: "Available",
    x: 50,
    y: 170,
  },
  {
    id: 9,
    type: "roundMedium",
    chairs: 4,
    status: "Pending",
    x: 50,
    y: 300,
  },
  { id: 10, type: "rectangle", chairs: 16, status: "Seated", x: 210, y: 180 },
  {
    id: 11,
    type: "rectangle",
    chairs: 16,
    status: "Available",
    x: 530,
    y: 180,
  },
  {
    id: 11,
    type: "roundMedium",
    chairs: 4,
    status: "Available",
    x: 840,
    y: 170,
  },
  {
    id: 12,
    type: "roundMedium",
    chairs: 4,
    status: "Pending",
    x: 840,
    y: 300,
  },
  {
    id: 13,
    type: "roundMedium",
    chairs: 4,
    status: "Available",
    x: 970,
    y: 170,
  },
  {
    id: 14,
    type: "roundMedium",
    chairs: 4,
    status: "Pending",
    x: 970,
    y: 300,
  },
  { id: 15, type: "squareBig", chairs: 8, status: "Available", x: 100, y: 500 },

  { id: 16, type: "squareMedium", chairs: 6, status: "Seated", x: 290, y: 450 },
  { id: 17, type: "squareMedium", chairs: 6, status: "Seated", x: 290, y: 560 },
  { id: 18, type: "squareMedium", chairs: 6, status: "Seated", x: 410, y: 450 },
  { id: 19, type: "squareMedium", chairs: 6, status: "Seated", x: 410, y: 560 },
  { id: 20, type: "squareMedium", chairs: 6, status: "Seated", x: 530, y: 450 },
  { id: 21, type: "squareMedium", chairs: 6, status: "Seated", x: 530, y: 560 },
  { id: 22, type: "squareMedium", chairs: 6, status: "Seated", x: 650, y: 450 },
  { id: 23, type: "squareMedium", chairs: 6, status: "Seated", x: 650, y: 560 },
  { id: 24, type: "squareMedium", chairs: 6, status: "Seated", x: 770, y: 450 },
  { id: 25, type: "squareMedium", chairs: 6, status: "Seated", x: 770, y: 560 },
  { id: 26, type: "squareMedium", chairs: 6, status: "Seated", x: 870, y: 510 },
  { id: 27, type: "squareBig", chairs: 8, status: "Available", x: 970, y: 500 },
];

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

const TableSetup: React.FC = () => {
  const [hoveredTable, setHoveredTable] = useState<number | null>(null);
  const [selectedTable, setSelectedTable] = useState<(typeof tables)[0] | null>(
    tables[0]
  );

  return (
    <Box sx={mainContainer}>
      {/* Table view taking 75% of the width */}
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
              onClick={() => setSelectedTable(table)} // Set the selected table on click
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

      {/* Table details taking 25% of the width */}
      <Box
        sx={{
          width: "15%",
          padding: "16px",
          borderLeft: "1px solid #ccc",
          backgroundColor: "#f9f9f9",
        }}
      >
        {selectedTable ? (
          <>
            <Typography variant="h6">Table {selectedTable.id}</Typography>
            <Typography variant="body2">Type: {selectedTable.type}</Typography>
            <Typography variant="body2">
              Chairs: {selectedTable.chairs}
            </Typography>
            <Typography variant="body2">
              Status: {selectedTable.status}
            </Typography>
            <Typography variant="body2">Booking Date: --</Typography>{" "}
            {/* Add dynamic date if available */}
            <Typography variant="body2">Booking Time: --</Typography>{" "}
            {/* Add dynamic time if available */}
          </>
        ) : (
          <Typography variant="body1">Select a table to see details</Typography>
        )}
      </Box>
    </Box>
  );
};

export default TableSetup;
