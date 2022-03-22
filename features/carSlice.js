import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createApi } from "unsplash-js";

const initialState = {
    data: null,
    loading: false,
    error: "",
  };
  
  const api = new createApi({
    accessKey: "RmlY6GEU5ONnZvTf4n6ut_UuUxjg6Z24iNQPQMoZcpg",
  });

export const fetchCars = createAsyncThunk("fetchCars", async () => {
    const response = await api.search.getPhotos({query: "car", orientation: "landscape"}).then(res => res)
    return response
})



const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCars.pending, (state, action) => {
		state.loading = true;
		state.error = " "; 
	});
	builder.addCase(fetchCars.fulfilled, (state, action) => {
		state.data = action.payload;
		state.loading = false;
	});
	builder.addCase(fetchCars.rejected, (state, action) => { 
		 state.loading = false;
		 state.error = "Error fetching car data"
	})
  }
});

export default carSlice.reducer;
