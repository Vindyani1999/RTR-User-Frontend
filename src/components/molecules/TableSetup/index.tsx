import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import TableImageMap from "../../atoms/TableImageMap";
import TableDialog from "../../atoms/TableDialog";
import {
  TableComponent,
  TableStatus,
  tables as initialTables,
} from "../../../constants/tableConstants";
import { StyledBox } from "./styles";

const fetchTableData = () => {
  return Promise.resolve(
    initialTables.map((table) => ({
      ...table,
      component: table.component as TableComponent,
      status: table.status as TableStatus,
      x: table.x,
      y: table.y,
    }))
  );
};

const TableLayout: React.FC = () => {
  const [tables, setTables] = useState<
    {
      id: number;
      component: TableComponent;
      status: TableStatus;
      x: number;
      y: number;
    }[]
  >([]);
  const [open, setOpen] = useState(false);
  const [selectedTableId, setSelectedTableId] = useState<number | null>(null);

  useEffect(() => {
    fetchTableData().then((data) => setTables(data));
  }, []);

  const handleClick = (id: number) => {
    setSelectedTableId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedTableId(null);
  };

  return (
    <Box sx={{ ...StyledBox, position: "relative" }}>
      {tables.map((table) => (
        <TableImageMap
          key={table.id}
          id={table.id}
          component={table.component}
          status={table.status}
          x={table.x}
          y={table.y}
          onClick={handleClick}
        />
      ))}
      <TableDialog
        open={open}
        onClose={handleClose}
        selectedTableId={selectedTableId}
        tables={tables}
      />
    </Box>
  );
};

export default TableLayout;
