// styles.ts
import { SxProps, Theme } from "@mui/system";

export const StyledBox: SxProps<Theme> = {
  position: "relative",
  width: "100%",
  height: "100vh", // Adjust as needed
  overflow: "hidden",
};

export const TableStyle: SxProps<Theme> = {
  position: "absolute",
  transform: "translate(-50%, -50%)", // Center the tables based on their coordinates
};
