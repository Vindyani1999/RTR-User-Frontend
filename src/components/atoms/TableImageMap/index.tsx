import React from "react";
import { Box } from "@mui/material";
import { TableComponent, TableStatus } from "../../../constants/tableConstants";
import { SxProps, Theme } from "@mui/system";

import RoundTable8 from "../../../assets/icons/Tables/Availabe/rd-green-8.png";
import RectangleTable2 from "../../../assets/icons/Tables/Availabe/sq-green-2.png";
import RectangleTable8 from "../../../assets/icons/Tables/Availabe/sq-green-8.png";
import RectangleTable12 from "../../../assets/icons/Tables/Availabe/sq-green-12.png";
import RoundTable4 from "../../../assets/icons/Tables/Availabe/rd-green-4.png";

import UpcomingRoundTable8 from "../../../assets/icons/Tables/Upcoming/rd-yel-8.png";
import UpcomingRectangleTable2 from "../../../assets/icons/Tables/Upcoming/rd-yel-2.png";
import UpcomingRectangleTable8 from "../../../assets/icons/Tables/Upcoming/sq-yel-8.png";
import UpcomingRectangleTable12 from "../../../assets/icons/Tables/Upcoming/sq-yel-12.png";
import UpcomingRoundTable4 from "../../../assets/icons/Tables/Upcoming/rd-yel-4.png";

import SeatedRoundTable8 from "../../../assets/icons/Tables/Seated/rd-rd-8.png";
import SeatedRectangleTable2 from "../../../assets/icons/Tables/Seated/sq-rd-2.png";
import SeatedRectangleTable8 from "../../../assets/icons/Tables/Seated/sq-rd-8.png";
import SeatedRectangleTable12 from "../../../assets/icons/Tables/Seated/sq-rd-12.png";
import SeatedRoundTable4 from "../../../assets/icons/Tables/Seated/rd-rd-4.png";

import {
  TableImageSQ12,
  TableImageSQ8,
  TableImageRD8,
  TableImageRD4,
  TableImageSQ2,
} from "./styles"; 


const imageMap: Record<TableStatus, Record<TableComponent, string>> = {
  available: {
    RoundTable8: RoundTable8,
    RectangleTable2: RectangleTable2,
    RectangleTable8: RectangleTable8,
    RectangleTable12: RectangleTable12,
    RoundTable4: RoundTable4,
  },
  upcoming: {
    RoundTable8: UpcomingRoundTable8,
    RectangleTable2: UpcomingRectangleTable2,
    RectangleTable8: UpcomingRectangleTable8,
    RectangleTable12: UpcomingRectangleTable12,
    RoundTable4: UpcomingRoundTable4,
  },
  seated: {
    RoundTable8: SeatedRoundTable8,
    RectangleTable2: SeatedRectangleTable2,
    RectangleTable8: SeatedRectangleTable8,
    RectangleTable12: SeatedRectangleTable12,
    RoundTable4: SeatedRoundTable4,
  },
};

const shapeMap: Record<TableComponent, SxProps<Theme>> = {
  RectangleTable12: TableImageSQ12,
  RoundTable8: TableImageRD8,
  RectangleTable8: TableImageSQ8,
  RoundTable4: TableImageRD4,
  RectangleTable2: TableImageSQ2,
};

interface TableImageMapProps {
  component: TableComponent;
  status: TableStatus;
  onClick: (id: number) => void;
  id: number;
  x: number;
  y: number;
}

const TableImageMap: React.FC<TableImageMapProps> = ({
  component,
  status,
  onClick,
  id,
  x,
  y,
}) => {
  const tableImage = imageMap[status][component];
  const tableImageStyle = shapeMap[component];

  return (
    <Box
      onClick={() => onClick(id)}
      sx={{
        ...tableImageStyle,
        cursor: "pointer",
        position: "absolute",
        left: `${x}px`,
        top: `${y}px`,
      }}
    >
      <Box
        component="img"
        src={tableImage}
        alt={component}
        sx={{ ...tableImageStyle, width: "100%", height: "100%" }}
      />
    </Box>
  );
};

export default TableImageMap;
