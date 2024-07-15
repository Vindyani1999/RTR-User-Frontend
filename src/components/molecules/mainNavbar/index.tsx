import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Link,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../../../assets/icons/Logo/logo.png";
import LogoMini from "../../../assets/icons/Logo/mini-logo.png";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routeConstants";
import {
  appBarStyles,
  appBarScrolledStyles,
  logoStyles,
  linkStyles,
  logoMiniStyles,
  linkTextStyles,
  drawerStyles,
  drawerItemStyles,
} from "./styles";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:700px)");

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClickHome = () => {
    navigate(ROUTES.HOME);
    if (isMobile) {
      setDrawerOpen(false);
    }
  };

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box>
      <AppBar sx={scrolled ? appBarScrolledStyles : appBarStyles} elevation={0}>
        <Toolbar>
          {isMobile ? (
            <Box
              component="img"
              src={LogoMini}
              alt="Logo"
              sx={logoMiniStyles}
              onClick={handleClickHome}
            />
          ) : (
            <Box
              component="img"
              src={Logo}
              alt="Logo"
              sx={logoStyles}
              onClick={handleClickHome}
            />
          )}

          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer(true)}
              edge="end"
              sx={{ ml: "auto" }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <>
              <Box sx={{ flexGrow: 1 }} />
              <Link href={ROUTES.FEATURES} sx={linkStyles}>
                <Typography sx={linkTextStyles}>Features</Typography>
              </Link>

              <Link href={ROUTES.MENU} sx={linkStyles}>
                <Typography sx={linkTextStyles}>Menu</Typography>
              </Link>

              <Link href={ROUTES.TABLE_SETUP} sx={linkStyles}>
                <Typography sx={linkTextStyles}>Current Bookings</Typography>
              </Link>

              <Link href={ROUTES.DATE_TIME} sx={linkStyles}>
                <Typography sx={linkTextStyles}>Book Now</Typography>
              </Link>

              <Link href={ROUTES.HOME} sx={linkStyles}>
                <Typography sx={linkTextStyles}>Contact us</Typography>
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile view */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={drawerStyles}>
          <Toolbar>
            <IconButton onClick={toggleDrawer(false)} sx={{ ml: "auto" }}>
              <CloseIcon />
            </IconButton>
          </Toolbar>
          <List>
            <ListItem button onClick={handleClickHome}>
              <ListItemText primary="Home" sx={drawerItemStyles} />
            </ListItem>
            <ListItem
              button
              component="a"
              href={ROUTES.FEATURES}
              onClick={toggleDrawer(false)}
            >
              <ListItemText primary="Features" sx={drawerItemStyles} />
            </ListItem>
            <ListItem
              button
              component="a"
              href={ROUTES.MENU}
              onClick={toggleDrawer(false)}
            >
              <ListItemText primary="Menu" sx={drawerItemStyles} />
            </ListItem>
            <ListItem
              button
              component="a"
              href={ROUTES.TABLE_SETUP}
              onClick={toggleDrawer(false)}
            >
              <ListItemText primary="Current Bookings" sx={drawerItemStyles} />
            </ListItem>
            <ListItem
              button
              component="a"
              href={ROUTES.DATE_TIME}
              onClick={toggleDrawer(false)}
            >
              <ListItemText primary="Book Now" sx={drawerItemStyles} />
            </ListItem>
            <ListItem
              button
              component="a"
              href={ROUTES.HOME}
              onClick={toggleDrawer(false)}
            >
              <ListItemText primary="Contact us" sx={drawerItemStyles} />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;
