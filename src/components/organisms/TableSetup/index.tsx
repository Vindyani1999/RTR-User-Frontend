import React, { Dispatch } from "react";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom"; // Import useLocation to check the current route
import { mainContainer, tableBox } from "./styles";
import SquareBigTable from "../../../assets/icons/Tables/squareBig.svg";
import SquareMediumTable from "../../../assets/icons/Tables/squareMedium.svg";
import RoundSmallTable from "../../../assets/icons/Tables/squareSmall.svg";
import RoundBigTable from "../../../assets/icons/Tables/circleBig.svg";
import RoundMediumTable from "../../../assets/icons/Tables/circleMedium.svg";
import RectangleTable from "../../../assets/icons/Tables/rectangle.svg";
import { tables } from "./mockData";
import { ROUTES } from "../../../constants/routeConstants"; // Assuming you have route constants

const getColorFilter = (status: string) => {
  switch (status) {
    case "Available":
      return "#2b8b25";
    case "Seated":
      return "#ce1f16";
    default:
      return "";
  }
};

const commonBoxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";

const getTableSVG = (
  type: string,
  status: string,
  price: number,
  isSelected: boolean,
  route: string
) => {
  const filter = getColorFilter(status);
  const commonStyle: React.CSSProperties = {
    color: filter,
    filter: `drop-shadow(${commonBoxShadow})`,
    stroke: isSelected && route !== ROUTES.TABLE_SETUP ? "#000000" : "none",
    strokeWidth: isSelected && route !== ROUTES.TABLE_SETUP ? "1px" : "0",
  };

  switch (type) {
    case "squareBig":
      return (
        <SquareBigTable width="130px" height="130px" style={commonStyle} />
      );
    case "squareMedium":
      return (
        <SquareMediumTable width="70px" height="70px" style={commonStyle} />
      );
    case "roundMedium":
      return (
        <RoundMediumTable width="95px" height="95px" style={commonStyle} />
      );
    case "roundBig":
      return <RoundBigTable width="120px" height="120px" style={commonStyle} />;
    case "roundSmall":
      return (
        <RoundSmallTable width="240px" height="240px" style={commonStyle} />
      );
    case "rectangle":
      return (
        <RectangleTable width="210px" height="200px" style={commonStyle} />
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
  const location = useLocation(); // Get the current route

  const handleTable = (table: any) => {
    onTableSelect(table);
    console.log("selected table", table);
  };
  return (
    <Box sx={mainContainer}>
      {tables.map((table) => {
        const isSelected =
          selectedTable && selectedTable.id === table.tableNumber;
        return (
          <Box
            key={table.tableNumber}
            sx={{
              ...tableBox,
              position: "absolute",
              left: `${table.x + 150}px`,
              top: `${table.y}px`,
              cursor: "pointer",
              backgroundColor: "transparent",
            }}
            onClick={() => handleTable(table)}
          >
            {getTableSVG(
              table.tableType,
              table.status,
              table.tablePrice,
              isSelected ?? false,
              location.pathname
            )}
          </Box>
        );
      })}
    </Box>
  );
};

export default TableSetup;
