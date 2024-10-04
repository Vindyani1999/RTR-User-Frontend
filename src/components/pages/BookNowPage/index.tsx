import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
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
import MenuDialog from "../../atoms/MenuDialogPopup";
import CartPopup from "../../atoms/CartItemPopup";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const slides = [{ src: Image1 }, { src: Image2 }, { src: Image3 }];

const overlayText = "Book Your Table Now";
const overlayDescriptionText = "";
const buttonText = "";

const BookNowPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [startTime, setStartTime] = useState<string | null>(null);
  const [endTime, setEndTime] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [personalDetails, setPersonalDetails] = useState<any>(null);
  const [selectedTable, setSelectedTable] = useState<any>(null);
  const [confirmDetails, setConfirmDetails] = useState<boolean>(false);
  const [selectedMenuItems, setSelectedMenuItems] = useState<any[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);
  const [isDateTimeConfirmed, setIsDateTimeConfirmed] = useState(false);

  const handleNextMenu = () => {
    const hasItemsInCart = Object.values(quantities).some(
      (quantity) => quantity > 0
    );
    if (!hasItemsInCart) {
      setIsDialogOpen(true);
    }
  };
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
        } else {
          setError("Please select a table.");
        }
      }
    } else if (currentStep === 3) {
      if (selectedMenuItems.length > 0) {
        setError(null);
        if (currentStep < steps.length - 1) {
          setCurrentStep(currentStep + 1);
        }
      } else {
        handleNextMenu();
      }
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handlePersonalDetailsSubmit = (details: any) => {
    setPersonalDetails(details);
    setConfirmDetails(true);
  };

  const handleMenuNext = () => {
    if (selectedMenuItems.length > 0) {
      handleNextStep();
    } else {
      setError("Please select at least one menu item.");
    }
  };
  const handleDialogConfirm = () => {
    setIsDialogOpen(false);
    handleNextStep();
  };

  const handleDialogCancel = () => {
    setIsDialogOpen(false);
  };

  const handleCartPopupProceed = () => {
    setIsCartPopupOpen(false);
    handleNextStep(); // Proceed to the next step
  };

  const handleCartPopupEdit = () => {
    setIsCartPopupOpen(false); // Close the cart popup to edit items
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
              />
            </Box>
          </Box>
        )}

        <Box>
          {currentStep === 2 && (
            <Box sx={{ ...tableDetailsContainer, pt: 0 }}>
              <Box
                sx={{
                  transform: "scale(0.55)",
                  maxHeight: "480px",
                }}
              >
                <TableSetup
                  selectedTable={selectedTable}
                  onTableSelect={setSelectedTable}
                />
              </Box>
            </Box>
          )}
        </Box>
        {currentStep === 3 && (
          <Box sx={tableDetailsContainer}>
            <MenuItems
              selectedItems={selectedMenuItems}
              onSelect={(item) =>
                setSelectedMenuItems((prev) => [...prev, item])
              }
              onNext={handleMenuNext}
            />
          </Box>
        )}
        <Box sx={errorStyle}>
          {error && (
            <Typography color="error" variant="body2" mt={2}>
              {error}
            </Typography>
          )}
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
              <ArrowBackIcon sx={{ fontSize: "20px", marginRight: "4px" }} />
              Previous
            </Button>
          )}
          <Button
            variant="contained"
            onClick={handleNextStep}
            disabled={!isDateTimeConfirmed}
            sx={{
              ml: 1,
              backgroundColor: "darkorange",
              border: "1px solid gray",
              borderRadius: "8px",
              textTransform: "none",
              fontSize: "16px",
              "&:hover": {
                backgroundColor: "darkorange", // Same as default

                border: "1px solid gray", // Same as default // Optional: Change to your desired hover border color
              },
            }}
          >
            {currentStep === steps.length - 1 ? (
              "Finish"
            ) : (
              <>
                Next
                <ArrowForwardIcon
                  sx={{ fontSize: "20px", marginLeft: "4px" }}
                />{" "}
                {/* Only for "Next" */}
              </>
            )}
          </Button>
        </Box>
      </Box>

      <Footer />

      <MenuDialog
        isDialogOpen={isDialogOpen}
        handleDialogCancel={handleDialogCancel}
        handleDialogConfirm={handleDialogConfirm}
      />

      <CartPopup
        isCartPopupOpen={isCartPopupOpen}
        onClose={() => setIsCartPopupOpen(false)}
        items={Object.entries(quantities)
          .filter(([_, quantity]) => quantity > 0)
          .map(([itemId, quantity]) => {
            const item = selectedMenuItems.find((i) => i.id === Number(itemId));
            return {
              name: item.name,
              price: item.price,
              quantity: quantity,
            };
          })}
        onProceed={handleCartPopupProceed}
        onEdit={handleCartPopupEdit}
      />
    </Box>
  );
};

export default BookNowPage;
