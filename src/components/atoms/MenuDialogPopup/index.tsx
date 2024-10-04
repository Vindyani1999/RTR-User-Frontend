import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

interface MenuDialogProps {
  isDialogOpen: boolean;
  handleDialogCancel: () => void;
  handleDialogConfirm: () => void;
}

const MenuDialog: React.FC<MenuDialogProps> = ({
  isDialogOpen,
  handleDialogCancel,
  handleDialogConfirm,
}) => {
  return (
    <Dialog open={isDialogOpen} onClose={handleDialogCancel}>
      <DialogTitle>{"Proceed Without Menu Items?"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Your cart is empty. Do you really want to continue without adding any
          menu items?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDialogCancel} color="primary">
          Cancel
        </Button>
        <Button onClick={handleDialogConfirm} color="primary" autoFocus>
          Proceed
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MenuDialog;
