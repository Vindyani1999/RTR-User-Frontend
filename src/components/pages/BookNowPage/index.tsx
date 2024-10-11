import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import Navbar from "../../molecules/mainNavbar";
import Footer from "../../molecules/Footer";
import {
  homePageContainer,
  datePickerContainer,
  stepIndicatorContainer,
  buttonsStyle,
  errorStyle,
  personalDetailsContainer,
  tableDetailsContainer,
} from "./styles";
import DateTimePicker from "../../organisms/DateTimePicker";
import StepIndicator from "../../atoms/StepperComponent";
import ImageCarousel from "../../molecules/ImageCarousel";
import Image1 from "../../../assets/icons/FeaturePage/banner.png";
import Image2 from "../../../assets/icons/FeaturePage/banner2.png";
import Image3 from "../../../assets/icons/HomePage/home3.jpeg";
import { Dayjs } from "dayjs";
import PersonalDetailsForm from "../../organisms/PersonalDetailsForm";
import TableSetup from "../../organisms/TableSetup";
import { steps } from "../../../constants/stringConstants";
import MenuItems from "../../organisms/MenuItems";
import MenuDialog from "../../atoms/ConfirmationDialogPopup";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { FormData } from "../../organisms/PersonalDetailsForm";
import TableDetails from "../../atoms/TableDetails";

import PaymentPage from "../../organisms/PaymentDetails";

const slides = [{ src: Image1 }, { src: Image2 }, { src: Image3 }];

const overlayText = "Book Your Table Now";
const overlayDescriptionText = "";
const buttonText = "";

const BookNowPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [startTime, setStartTime] = useState<string | null>(null);
  const [endTime, setEndTime] = useState<string | null>(null);
  const [personalDetails, setPersonalDetails] = useState<FormData>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    numberOfPeople: 1,
  });
  const [selectedTable, setSelectedTable] = useState<any>(null);
  const [selectedMenuItems, setSelectedMenuItems] = useState<any[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  const [isDateTimeConfirmed, setIsDateTimeConfirmed] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleNextStep = () => {
    if (currentStep === 0) {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      }
    } else if (currentStep === 1) {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      }
    } else if (currentStep === 2) {
      if (selectedTable) {
        if (currentStep < steps.length - 1) {
          setCurrentStep(currentStep + 1);
        }
      }
    } else if (currentStep === 3) {
      if (selectedMenuItems.length > 0) {
        if (currentStep < steps.length - 1) {
          setCurrentStep(currentStep + 1);
        }
      } else if (selectedMenuItems.length === 0) {
        setIsDialogOpen(true);
      }
    } else if (currentStep === 4) {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handlePersonalDetailsSubmit = (details: FormData) => {
    console.log(details);
    setPersonalDetails(details);
  };

  const handleMenuItemsChange = (items: any[]) => {
    setSelectedMenuItems(items);

    console.log(selectedMenuItems);
  };

  const handleDialogConfirm = () => {
    setIsDialogOpen(false);
    setCurrentStep(currentStep + 1);
  };

  const handleDialogCancel = () => {
    setIsDialogOpen(false);
  };

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

      <Box sx={{ mt: 5, mb: 5 }}>
        <Box sx={stepIndicatorContainer}>
          <StepIndicator currentStep={currentStep} steps={steps} />
        </Box>

        {currentStep === 0 && (
          <Box sx={datePickerContainer}>
            <Box sx={{ mt: 1 }}>
              <DateTimePicker
                selectedDate={selectedDate}
                onDateChange={setSelectedDate}
                startTime={startTime}
                onStartTimeChange={setStartTime}
                endTime={endTime}
                onEndTimeChange={setEndTime}
                onDateTimeConfirm={() => setIsDateTimeConfirmed(true)}
              />
            </Box>
          </Box>
        )}

        {currentStep === 1 && (
          <Box sx={personalDetailsContainer}>
            <Box>
              <PersonalDetailsForm
                onPersonalDetailsSubmit={handlePersonalDetailsSubmit}
                data={personalDetails}
              />
            </Box>
          </Box>
        )}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          {currentStep === 2 && (
            <>
              <Box
                sx={{
                  position: "absolute",
                  width: 800,
                  height: 452,
                  backgroundColor: "transparent",

                  boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",

                  left: "11%",
                  top: "30.5%",
                }}
              />
              <Box
                sx={{
                  transform: "scale(0.75)",
                  maxHeight: "400px",
                  mt: 1,
                  mb: 8,
                  display: "flex",
                }}
              >
                <TableSetup
                  selectedTable={selectedTable}
                  onTableSelect={setSelectedTable}
                />
              </Box>
            </>
          )}
          {currentStep === 2 && selectedTable && (
            <Box
              sx={{
                transform: "scale(0.8)",
                position: "absolute",

                borderRadius: "8px",
                left: "68%",
                top: "25%",

                width: "fit-content",
              }}
            >
              <TableDetails selectedTable={selectedTable} />
            </Box>
          )}
        </Box>
        {currentStep === 3 && (
          <Box sx={tableDetailsContainer}>
            <MenuItems
              onMenuItemsChange={handleMenuItemsChange}
              selectedMenuItems={selectedMenuItems}
            />
          </Box>
        )}
        {currentStep === 4 && (
          <Box sx={tableDetailsContainer}>
            <PaymentPage
              selectedDate={selectedDate?.format("YYYY-MM-DD") || ""}
              startTime={startTime}
              endTime={endTime}
              personalDetails={personalDetails}
              selectedTable={selectedTable}
              selectedMenuItems={selectedMenuItems}
              handleNextStep={handleNextStep}
            />
          </Box>
        )}
        <Box sx={errorStyle}>
          {/* {error && (
            <Typography color="error" variant="body2" mt={2}>
              {error}
            </Typography>
          )} */}
        </Box>
        <Box
          sx={{
            ...buttonsStyle,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "end",
            mr: 5,
          }}
        >
          {currentStep !== 5 && (
            <>
              {currentStep > 0 && (
                <Button
                  variant="contained"
                  onClick={handlePreviousStep}
                  sx={{
                    backgroundColor: "white",
                    color: "black",
                    border: "1px solid gray",
                    borderRadius: "8px",
                    textTransform: "none",
                    fontSize: "16px",
                    "&:hover": {
                      backgroundColor: "white", // Same as default
                      color: "black", // Same as default
                      border: "1px solid gray", // Same as default // Optional: Change to your desired hover border color
                    },
                  }}
                >
                  <ArrowBackIcon
                    sx={{ fontSize: "20px", marginRight: "4px" }}
                  />
                  Previous
                </Button>
              )}

              {/* Show Next button only when currentStep is not 4 */}
              {currentStep !== 4 && (
                <Button
                  variant="contained"
                  onClick={handleNextStep}
                  disabled={
                    (currentStep === 0 && !isDateTimeConfirmed) ||
                    (currentStep === 1 &&
                      (!personalDetails.firstName ||
                        !personalDetails.lastName ||
                        !personalDetails.phoneNumber ||
                        personalDetails.numberOfPeople <= 0)) ||
                    (currentStep === 2 &&
                      (!selectedTable || selectedTable.status === "Seated"))
                  }
                  sx={{
                    ml: 1,
                    backgroundColor: "darkorange",
                    border: "1px solid gray",
                    borderRadius: "8px",
                    textTransform: "none",
                    fontSize: "16px",
                    "&:hover": {
                      backgroundColor: "darkorange",
                      border: "1px solid gray",
                    },
                  }}
                >
                  Next
                  <ArrowForwardIcon
                    sx={{ fontSize: "20px", marginLeft: "4px" }}
                  />
                </Button>
              )}
            </>
          )}
        </Box>
      </Box>
      <Footer />

      <MenuDialog
        text="Your cart is empty. Do you really want to continue without adding any menu items?"
        label="Proceed"
        isDialogOpen={isDialogOpen}
        handleDialogCancel={handleDialogCancel}
        handleDialogConfirm={handleDialogConfirm}
      />
    </Box>
  );
};

export default BookNowPage;
