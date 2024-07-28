import { SxProps, Theme } from "@mui/system";

export const overlayContainer: SxProps<Theme> = {
  position: "absolute",
  top: { xs: "40%", sm: "45%", md: "45%", lg: "45%", xl: "45%" },
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  zIndex: 1,
  color: "#fff",
};

export const StyledBox: SxProps<Theme> = {
  position: "relative",
  width: "100%",
  height: "100%",
};

export const TableWrapper: SxProps<Theme> = {
  position: "absolute",
  textAlign: "center",
  transform: "translate(-50%, -50%)",
  cursor: "pointer",
  borderRadius: "20px",
  p: 0.5,
};

export const TableImageSQ8: SxProps<Theme> = {
  width: { xs: "60px", sm: "100px", md: "120px", lg: "140px" }, 
  height: { xs: "60px", sm: "100px", md: "120px", lg: "140px" }, 
  display: "block",
  margin: "0 auto",
};

export const TableImageSQ12: SxProps<Theme> = {
  width: { xs: "160px", sm: "200px", md: "220px", lg: "240px" }, 
  height: { xs: "90px", sm: "130px", md: "150px", lg: "170px" }, 
  display: "block",
  margin: "0 auto",
};

export const TableImageRD8: SxProps<Theme> = {
  width: { xs: "60px", sm: "100px", md: "120px", lg: "140px" }, 
  height: { xs: "60px", sm: "100px", md: "120px", lg: "140px" }, 
  display: "block",
  margin: "0 auto",
};

export const TableImageRD4: SxProps<Theme> = {
  width: { xs: "60px", sm: "90px", md: "100px", lg: "110px" }, 
  height: { xs: "60px", sm: "90px", md: "100px", lg: "110px" }, 
  display: "block",
  margin: "0 auto",
};

export const TableImageSQ2: SxProps<Theme> = {
  width: { xs: "20px", sm: "50px", md: "60px", lg: "60px" }, 
  height: { xs: "40px", sm: "70px", md: "80px", lg: "90px" }, 
  display: "block",
  margin: "0 auto",
};
