import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { options } from "../helpers/constant";
export const getFlights = createAsyncThunk("getFlight", async () => {
  // Api'ye istek atma
  const res = await axios.request(options);
  //   Bize gelen dizileri objelere çevirme
  const newData = res.data.aircraft.map((flight) => ({
    id: flight[0],
    code: flight[1],
    lat: flight[2],
    lan: flight[3],
  }));
  //   Veriyi slice'a aktarma
  return newData;
});
