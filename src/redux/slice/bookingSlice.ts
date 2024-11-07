import { createSlice } from "@reduxjs/toolkit";
import { createBookingAction } from "../action/bookingAction";

interface BookingState {
  loading: boolean;
  error: string | null;
  booking: any | null;
}

const initialState: BookingState = {
  loading: false,
  error: null,
  booking: null,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createBookingAction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createBookingAction.fulfilled, (state, action) => {
        state.loading = false;
        state.booking = action.payload;
      })
      .addCase(createBookingAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default bookingSlice.reducer;
