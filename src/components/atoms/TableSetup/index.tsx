import React, { useState } from "react";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import RoundTable4 from "../../../assets/icons/Tables/round4.svg";
import RoundTable8 from "../../../assets/icons/Tables/round8.svg";
import RectangleTable2 from "../../../assets/icons/Tables/rectangle2.svg";
import RectangleTable4 from "../../../assets/icons/Tables/square4.svg";
import RectangleTable8 from "../../../assets/icons/Tables/square8.svg";
import RectangleTable12 from "../../../assets/icons/Tables/rectangle12.svg";

const StyledBox = styled(Box)({
  position: "relative",
  width: "100%",
  height: "100%",
  background: "transparent",
});

const TableWrapper = styled(Box)({
  position: "relative",
  display: "inline-block",
  textAlign: "center",
});

const TableLayout: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [tableId, setTableId] = useState<number | null>(null);

  const tables = [
    { id: 1, x: 180, y: 120, component: <RectangleTable4 /> },
    { id: 2, x: 180, y: 280, component: <RectangleTable4 /> },
    { id: 3, x: 180, y: 440, component: <RectangleTable4 /> },
    { id: 4, x: 370, y: 135, component: <RectangleTable8 /> },
    { id: 5, x: 370, y: 325, component: <RoundTable8 /> },
    { id: 6, x: 370, y: 515, component: <RectangleTable8 /> },
    { id: 7, x: 560, y: 115, component: <RoundTable4 /> },
    { id: 8, x: 620, y: 285, component: <RectangleTable12 /> },
    { id: 9, x: 530, y: 555, component: <RectangleTable2 /> },
    { id: 10, x: 530, y: 440, component: <RectangleTable2 /> },
    { id: 11, x: 630, y: 555, component: <RectangleTable2 /> },
    { id: 12, x: 630, y: 440, component: <RectangleTable2 /> },
    { id: 13, x: 730, y: 440, component: <RectangleTable2 /> },
    { id: 14, x: 730, y: 555, component: <RectangleTable2 /> },
    { id: 15, x: 710, y: 115, component: <RoundTable4 /> },
    { id: 16, x: 900, y: 130, component: <RoundTable8 /> },
    { id: 17, x: 1095, y: 130, component: <RoundTable8 /> },
    { id: 18, x: 930, y: 520, component: <RectangleTable12 /> },
    { id: 19, x: 880, y: 320, component: <RectangleTable8 /> },
    { id: 20, x: 1095, y: 310, component: <RoundTable8 /> },
    { id: 21, x: 1125, y: 565, component: <RectangleTable2 /> },
    { id: 22, x: 1125, y: 450, component: <RectangleTable2 /> },
    { id: 23, x: 1305, y: 140, component: <RectangleTable8 /> },
    { id: 24, x: 1305, y: 330, component: <RectangleTable8 /> },
    { id: 25, x: 1305, y: 530, component: <RectangleTable8 /> },
  ];

  const handleClick = (id: number) => {
    setTableId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTableId(null);
  };

  return (
    <StyledBox>
      {tables.map((table) => (
        <TableWrapper
          key={table.id}
          sx={{
            position: "absolute",
            top: { xs: `${table.y * 0.5}px`, md: `${table.y}px` },
            left: { xs: `${table.x * 0.5}px`, md: `${table.x}px` },
            transform: "translate(-50%, -50%)",
            cursor: "pointer",
          }}
          onClick={() => handleClick(table.id)}
        >
          {table.component}
          <Typography
            variant="body2"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "black",
              backgroundColor: "transparent",
              padding: "2px 4px",
              borderRadius: "4px",
              fontWeight: "bold",
            }}
          >
            {table.id}
          </Typography>
        </TableWrapper>
      ))}

      {/* Dialog Component for Popup Message */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Table Info</DialogTitle>
        <DialogContent>
          <p>Table ID: {tableId}</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </StyledBox>
  );
};

export default TableLayout;
