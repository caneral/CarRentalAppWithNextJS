import {  createSlice } from "@reduxjs/toolkit";
import { infoData } from "../fakedb/data";
const initialState = {
    data: [],
    loading: false,
    error: "",
  };
  
const infoSlice = createSlice({
  name: "informations",
  initialState,
  reducers: {
    get: (state, action) => {
      const data = infoData;
      state.data = data
    }
  },
  
});

export default infoSlice.reducer;
export const { get } = infoSlice.actions; 
