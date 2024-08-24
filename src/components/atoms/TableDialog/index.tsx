// TableDialog.tsx
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";
import { TableComponent, TableStatus } from "../../../constants/tableConstants";
import { dialogBox } from "./styles";

interface TableDialogProps {
  open: boolean;
  onClose: () => void;
  selectedTableId: number | null;
  tables: { id: number; component: TableComponent; status: TableStatus }[];
}

const TableDialog: React.FC<TableDialogProps> = ({
  open,
  onClose,
  selectedTableId,
  tables,
}) => {
  const getTableById = (id: number) => {
    return tables.find((table) => table.id === id);
  };

  return (
    <Dialog open={open} onClose={onClose} sx={dialogBox}>
      <DialogTitle>Table Details</DialogTitle>
      <DialogContent>
        {selectedTableId !== null && (
          <Typography>
            Table {selectedTableId}: {getTableById(selectedTableId)?.component}{" "}
            - {getTableById(selectedTableId)?.status}
          </Typography>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default TableDialog;
