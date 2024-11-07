import { createAsyncThunk } from "@reduxjs/toolkit";
import { BookingDataType } from "../../constants/types/bookingDataType";
import { createBooking } from "../../services/bookingService";

export const createBookingAction = createAsyncThunk(
  "booking/createBooking",
  async (bookingData: BookingDataType, { rejectWithValue }) => {
    try {
      const response = await createBooking(bookingData);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
