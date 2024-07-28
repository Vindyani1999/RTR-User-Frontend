import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
} from "@mui/material";
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
  StyledBox,
  TableWrapper,
  TableImageSQ12,
  TableImageSQ8,
  TableImageRD8,
  TableImageRD4,
  TableImageSQ2,
} from "./styles";

const TableLayout: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [tableId, setTableId] = useState<number | null>(null);
  const [selectedTableId, setSelectedTableId] = useState<number | null>(null);

  const tables = [
    { id: 1, x: 180, y: 120, component: "RoundTable8", status: "available" },
    { id: 2, x: 180, y: 280, component: "RoundTable8", status: "upcoming" },
    { id: 3, x: 180, y: 440, component: "RoundTable8", status: "seated" },
    {
      id: 4,
      x: 370,
      y: 135,
      component: "RectangleTable8",
      status: "available",
    },
    { id: 5, x: 370, y: 325, component: "RoundTable8", status: "upcoming" },
    { id: 6, x: 370, y: 515, component: "RectangleTable8", status: "seated" },
    { id: 7, x: 560, y: 115, component: "RoundTable4", status: "available" },
    {
      id: 8,
      x: 620,
      y: 285,
      component: "RectangleTable12",
      status: "upcoming",
    },
    { id: 9, x: 530, y: 555, component: "RectangleTable2", status: "seated" },
    {
      id: 10,
      x: 530,
      y: 440,
      component: "RectangleTable2",
      status: "available",
    },
    {
      id: 11,
      x: 630,
      y: 555,
      component: "RectangleTable2",
      status: "upcoming",
    },
    { id: 12, x: 630, y: 440, component: "RectangleTable2", status: "seated" },
    {
      id: 13,
      x: 730,
      y: 440,
      component: "RectangleTable2",
      status: "available",
    },
    {
      id: 14,
      x: 730,
      y: 555,
      component: "RectangleTable2",
      status: "upcoming",
    },
    { id: 15, x: 710, y: 115, component: "RoundTable4", status: "seated" },
    { id: 16, x: 900, y: 130, component: "RoundTable8", status: "available" },
    { id: 17, x: 1095, y: 130, component: "RoundTable8", status: "upcoming" },
    { id: 18, x: 930, y: 520, component: "RectangleTable12", status: "seated" },
    {
      id: 19,
      x: 880,
      y: 320,
      component: "RectangleTable8",
      status: "available",
    },
    { id: 20, x: 1095, y: 295, component: "RoundTable8", status: "upcoming" },
    { id: 21, x: 1125, y: 555, component: "RectangleTable2", status: "seated" },
    {
      id: 22,
      x: 1125,
      y: 440,
      component: "RectangleTable2",
      status: "available",
    },
    {
      id: 23,
      x: 1305,
      y: 140,
      component: "RectangleTable8",
      status: "upcoming",
    },
    { id: 24, x: 1305, y: 330, component: "RectangleTable8", status: "seated" },
    {
      id: 25,
      x: 1305,
      y: 530,
      component: "RectangleTable8",
      status: "available",
    },
  ];

  const handleClick = (id: number) => {
    setTableId(id);
    setSelectedTableId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTableId(null);
  };

  const getTableImage = (component: string, status: string) => {
    switch (status) {
      case "available":
        switch (component) {
          case "RoundTable8":
            return RoundTable8;
          case "RectangleTable2":
            return RectangleTable2;
          case "RectangleTable8":
            return RectangleTable8;
          case "RectangleTable12":
            return RectangleTable12;
          case "RoundTable4":
            return RoundTable4;
          default:
            return RoundTable8;
        }
      case "upcoming":
        switch (component) {
          case "RoundTable8":
            return UpcomingRoundTable8;
          case "RectangleTable2":
            return UpcomingRectangleTable2;
          case "RectangleTable8":
            return UpcomingRectangleTable8;
          case "RectangleTable12":
            return UpcomingRectangleTable12;
          case "RoundTable4":
            return UpcomingRoundTable4;
          default:
            return UpcomingRoundTable8;
        }
      case "seated":
        switch (component) {
          case "RoundTable8":
            return SeatedRoundTable8;
          case "RectangleTable2":
            return SeatedRectangleTable2;
          case "RectangleTable8":
            return SeatedRectangleTable8;
          case "RectangleTable12":
            return SeatedRectangleTable12;
          case "RoundTable4":
            return SeatedRoundTable4;
          default:
            return SeatedRoundTable8;
        }
      default:
        return RoundTable8;
    }
  };

  const getTableImageStyle = (component: string) => {
    switch (component) {
      case "RectangleTable12":
        return TableImageSQ12;
      case "RoundTable8":
        return TableImageRD8;
      case "RectangleTable8":
        return TableImageSQ8;
      case "RoundTable4":
        return TableImageRD4;
      case "RectangleTable2":
        return TableImageSQ2;
      default:
        return TableImageSQ8;
    }
  };

  const getTableById = (id: number) => {
    return tables.find((table) => table.id === id);
  };

  const selectedTable = tableId ? getTableById(tableId) : null;

  return (
    <Box sx={StyledBox}>
      {tables.map((table) => (
        <Box
          key={table.id}
          sx={{
            ...TableWrapper,
            top: {
              xs: `${table.y * 0.3}px`,
              sm: `${table.y * 0.4}px`,
              md: `${table.y * 0.6}px`,
              lg: `${table.y * 0.8}px`,
              xl: `${table.y}px`,
            },
            left: {
              xs: `${table.x * 0.3}px`,
              sm: `${table.x * 0.4}px`,
              md: `${table.x * 0.6}px`,
              lg: `${table.x * 0.8}px`,
              xl: `${table.x}px`,
            },
            border: selectedTableId === table.id ? "3px solid gray" : "none",
          }}
          onClick={() => handleClick(table.id)}
        >
          <Box
            component="img"
            src={getTableImage(table.component, table.status)}
            alt={`Table ${table.id}`}
            sx={getTableImageStyle(table.component)}
          />
        </Box>
      ))}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Table Information</DialogTitle>
        <DialogContent>
          {selectedTable && (
            <>
              <Typography>Table No {selectedTable.id}</Typography>
              <Typography>Status: {selectedTable.status}</Typography>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default TableLayout;
