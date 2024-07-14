import React from "react";
import { AppBar, Toolbar, Typography, Box, Link } from "@mui/material";
import Logo from "../../../assets/icons/Logo/logo.png";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routeConstants";
import { appBarStyles, logoStyles, linkStyles } from "./styles";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate(ROUTES.HOME);
  };

  return (
    <AppBar sx={appBarStyles} elevation={0}>
      <Toolbar>
        <Box
          component="img"
          src={Logo}
          alt="Logo"
          sx={logoStyles}
          onClick={handleClickHome}
        />
        <Box sx={{ flexGrow: 1 }} />

        <Link href={ROUTES.FEATURES} sx={linkStyles}>
          <Typography variant="h6">Features</Typography>
        </Link>

        <Link href={ROUTES.MENU} sx={linkStyles}>
          <Typography variant="h6">Menu</Typography>
        </Link>

        <Link href={ROUTES.TABLE_SETUP} sx={linkStyles}>
          <Typography variant="h6">Current Bookings</Typography>
        </Link>

        <Link href={ROUTES.DATE_TIME} sx={linkStyles}>
          <Typography variant="h6">Book Now</Typography>
        </Link>

        <Link href={ROUTES.HOME} sx={linkStyles}>
          <Typography variant="h6">Contact us</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
