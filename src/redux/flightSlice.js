import { createSlice } from "@reduxjs/toolkit";
import { getFlights } from "./action";

const initialState = {
  flights: [],
  isLoading: true,
  isError: false,
};

const flightSlice = createSlice({
  name: "flightSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      // cevap beklerken
      .addCase(getFlights.pending, (state) => {
        state.isLoading = true;
      })
      // olumlu cevap geldiğinde
      .addCase(getFlights.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.flights = action.payload;
      })
      // olumsuz cevap geldiğinde
      .addCase(getFlights.rejected, (state) => {
        state.isLoading = false;
        state.isError = "Uçuş verilerini alırken bir hata oluştu";
      });
  },
});

export default flightSlice.reducer;
/*   [getFlights.pending]: (state) => {
    state.isLoading = true;
},
[getFlights.fulfilled]: (state, action) => {
  state.isLoading = false;
  (state.isEror = false), (state.flights = action.payload);
},
[getFlights.rejected]: (state) => {
  state.isLoading = false;
  state.isEror = "Uçuş Verilerini alırken bir hata oluştu ";
}, */
