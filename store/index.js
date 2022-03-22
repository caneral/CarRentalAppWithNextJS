import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk'

import carSlice from "../features/carSlice";
import infoSlice from "../features/infoSlice";

const store = configureStore({
	reducer: {
        car: carSlice,
        info: infoSlice
        
    },
    middleware: [thunk]
})

export default store;