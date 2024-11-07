import { AxiosError } from "axios";
import axiosClient from "../api/axiosClient";
import { BookingDataType } from "../constants/types/bookingDataType";

export const createBooking = async (bookingData: BookingDataType) => {
  try {
    const response = await axiosClient.post(
      "/bookings/reservation",
      bookingData
    );
    return response.data;
  } catch (error: unknown) {
    console.error(error); // Debug: Error details
    if (error instanceof AxiosError && error.response?.data) {
      return Promise.reject(error.response.data.message);
    } else if (error instanceof Error) {
      return Promise.reject(error.message);
    }
    return Promise.reject("An unknown error occurred");
  }
};
