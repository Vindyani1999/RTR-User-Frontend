import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import Navbar from "../../molecules/mainNavbar";
import Footer from "../../molecules/Footer";
import ImageCarousel from "../../molecules/ImageCarousel";
import Image1 from "../../../assets/icons/HomePage/home.png";
import Image2 from "../../../assets/icons/HomePage/home2.png";
import Image3 from "../../../assets/icons/HomePage/home3.jpeg";
import TableSetup from "../../organisms/TableSetup";
import { homePageContainer, tableMainContainer } from "./styles";
import { Link } from "react-router-dom";
import GradientButton from "../../atoms/GradientButton";
import { ROUTES } from "../../../constants/routeConstants";
import LiveLabel from "../../../assets/icons/Tables/liveBookings.svg";
import BookingLeftSEction from "../../../assets/icons/Tables/bookingLeft.png";
import BookingRightSection from "../../../assets/icons/Tables/bookingRight.png";

const slides = [{ src: Image1 }, { src: Image2 }, { src: Image3 }];

const overlayText = "Table Setup & Live Bookings";
const overlayDescriptionText = "";
const buttonText = "";

const TablePage: React.FC = () => {
  const [selectedTable, setSelectedTable] = useState<any>(null);
  return (
    <Box sx={homePageContainer}>
      <Navbar />
      <ImageCarousel
        isHomePage={false}
        isBookNowPage={true}
        slides={slides}
        overlayText={overlayText}
        overlayDescription={overlayDescriptionText}
        buttonText={buttonText}
      />
      <Box sx={tableMainContainer}>
        <Box
          component="img"
          src={BookingLeftSEction}
          alt="Table Setup"
          sx={{
            position: "absolute",
            right: "89%",
            top: "1%",
            opacity: 0.5,
          }}
        />

        <TableSetup
          selectedTable={selectedTable}
          onTableSelect={setSelectedTable}
        />
        <Box
          component="img"
          src={BookingRightSection}
          alt="Table Setup"
          sx={{
            position: "absolute",
            left: "89%",
            //top: "0%",
            bottom: "-22%",

            opacity: 0.5,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            fontFamily: "Raleway, sans-serif",
            top: -17.1,
            right: 157,
            //backgroundColor: "red",
            color: "white",
            padding: "15px 20px",
            fontWeight: "bold",
            //transform: "rotate(42deg)",
            transformOrigin: "top right",
            zIndex: 10,
            borderRadius: "10px",
            opacity: 0.85,
            //boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",
            fontSize: "0.75rem",
          }}
        >
          <LiveLabel />
        </Box>
      </Box>

      <Box
        sx={{
          justifyContent: "center",
          display: "flex",
          position: "absolute",
          top: "72%",
          left: "47%",
        }}
      >
        <Link to={ROUTES.DATE_TIME}>
          <GradientButton label="Book Now" variant="contained" />
        </Link>
      </Box>
      <Footer />
    </Box>
  );
};

export default TablePage;
