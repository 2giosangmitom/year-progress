import { TypedUseSelectorHook, useSelector } from "react-redux";
import { store } from "../store";

export type ReduxState = ReturnType<typeof store.getState>;

const selectProgress: TypedUseSelectorHook<ReduxState> = useSelector;

export default function useProgressStore() {
	const progress = selectProgress((state) => state.value);
	const yearProgress = progress.yearProgress;
	const monthProgress = progress.monthProgress;
	const dayProgress = progress.dayProgress;
	const hourProgress = progress.hourProgress;

	return { yearProgress, monthProgress, dayProgress, hourProgress };
}
