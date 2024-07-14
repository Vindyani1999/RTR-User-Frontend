// Footer.tsx
import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import Logo from "../../../assets/icons/Logo/logo.png";
import {
  footerContainer,
  footerContent,
  footerTopic,
  logoStyles,
  socialMediaIcon,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routeConstants";

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate(ROUTES.HOME);
  };
  return (
    <Box sx={footerContainer}>
      <Container>
        <Grid
          container
          spacing={5}
          ml={{ xs: 0.5, md: 3 }}
          mr={{ xs: 5, md: 1 }}
        >
          {/* Service Hours Column */}
          <Grid item xs={6} sm={6} md={3}>
            <Typography sx={footerTopic}>Service Hours</Typography>
            <Typography sx={footerContent}>Open: Monday-Saturday</Typography>
            <Typography sx={footerContent}>Close: Special Holidays</Typography>
            <Typography sx={footerContent}>Lunch: 6 PM - 3 PM</Typography>
            <Typography sx={footerContent}>Dinner: 6 PM - 11 PM</Typography>
          </Grid>

          {/* Features Column */}
          <Grid item xs={6} sm={6} md={3}>
            <Typography sx={footerTopic}>Features</Typography>
            <Link href={ROUTES.FEATURES} underline="none">
              <Typography sx={footerContent}>Online Reservations</Typography>
            </Link>
            <Link href={ROUTES.FEATURES} underline="none">
              <Typography sx={footerContent}>Table Setup</Typography>
            </Link>
            <Link href={ROUTES.FEATURES} underline="none">
              <Typography sx={footerContent}>Live Bookings</Typography>
            </Link>
            <Link href={ROUTES.FEATURES} underline="none">
              <Typography sx={footerContent}>Mobile Version</Typography>
            </Link>
          </Grid>

          {/* Connect Column */}
          <Grid item xs={6} sm={6} md={3}>
            <Typography sx={footerTopic}>Connect</Typography>
            <IconButton href="https://www.facebook.com" sx={socialMediaIcon}>
              <FacebookIcon />
            </IconButton>
            <IconButton href="https://www.instagram.com" sx={socialMediaIcon}>
              <InstagramIcon />
            </IconButton>
            <IconButton href="https://www.telegram.com" sx={socialMediaIcon}>
              <TelegramIcon />
            </IconButton>
            {/* Add other icons similarly */}
          </Grid>

          {/* Logo Column */}
          <Grid item xs={6} sm={6} md={2}>
            <Box
              component="img"
              src={Logo}
              alt="Logo"
              sx={logoStyles}
              onClick={handleClickHome}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
