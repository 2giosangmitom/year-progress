import { configureStore } from "@reduxjs/toolkit";
import progressReducer from "./slices/progressSlice";

export const store = configureStore({
	reducer: progressReducer,
});
