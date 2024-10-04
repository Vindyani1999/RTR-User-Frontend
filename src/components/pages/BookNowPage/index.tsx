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
import dayjs, { Dayjs } from "dayjs";
import PersonalDetailsForm from "../../organisms/PersonalDetailsForm";
import TableSetup from "../../organisms/TableSetup";
import { steps } from "../../../constants/stringConstants";
import MenuItems from "../../organisms/MenuItems";
import MenuDialog from "../../atoms/MenuDialogPopup";
import CartPopup from "../../atoms/CartItemPopup";

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
      if (!selectedDate) {
        setError("Please select a date for your reservation.");
      } else if (
        dayjs(`${selectedDate.format("YYYY-MM-DD")} ${startTime}`).isAfter(
          dayjs(`${selectedDate.format("YYYY-MM-DD")} ${endTime}`)
        )
      ) {
        setError("End time must be after start time.");
      } else {
        setError(null);
        if (currentStep < steps.length - 1) {
          setCurrentStep(currentStep + 1);
        }
      }
    } else if (currentStep === 1) {
      if (!confirmDetails || !personalDetails) {
        setError("Please confirm your personal details.");
      } else {
        setError(null);
        if (currentStep < steps.length - 1) {
          setCurrentStep(currentStep + 1);
        }
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
        <Box sx={buttonsStyle}>
          {currentStep > 0 && (
            <Button variant="contained" onClick={handlePreviousStep}>
              Previous
            </Button>
          )}
          <Button variant="contained" onClick={handleNextStep} sx={{ ml: 2 }}>
            {currentStep === steps.length - 1 ? "Finish" : "Next"}
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
