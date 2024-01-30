import { createSlice } from "@reduxjs/toolkit";
import { getDayProgress } from "../utils/day";
import { getHourProgress } from "../utils/hour";
import { getMonthProgress } from "../utils/month";
import { getYearProgress } from "../utils/year";

export const progressSlice = createSlice({
	name: "progress",
	initialState: {
		value: {
			hourProgress: 0,
			dayProgress: 0,
			monthProgress: 0,
			yearProgress: 0,
		},
	},
	reducers: {
		update(state) {
			state.value.yearProgress = getYearProgress();
			state.value.dayProgress = getDayProgress();
			state.value.monthProgress = getMonthProgress();
			state.value.hourProgress = getHourProgress();
		},
	},
});

export default progressSlice.reducer;

export const { update } = progressSlice.actions;
