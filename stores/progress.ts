import { getDayProgress, getHourProgress, getMonthProgress, getYearProgress } from "~/lib/utils";

export const useProgressStore = defineStore("progress", {
  state: () => ({
    year: 0,
    month: 0,
    day: 0,
    hour: 0,
  }),
  actions: {
    update() {
      this.year = getYearProgress();
      this.month = getMonthProgress();
      this.day = getDayProgress();
      this.hour = getHourProgress();
    },
  },
});
