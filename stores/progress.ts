import { getDayProgress } from "~/lib/utils/day";
import { getHourProgress } from "~/lib/utils/hour";
import { getMonthProgress } from "~/lib/utils/month";
import { getYearProgress } from "~/lib/utils/year";

export const useProgressStore = defineStore("progress", {
  state: () => ({
    year: 0,
    month: 0,
    day: 0,
    hour: 0,
  }),
  actions: {
    updateYear() {
      this.year = getYearProgress();
    },
    updateMonth() {
      this.month = getMonthProgress();
    },
    updateDay() {
      this.day = getDayProgress();
    },
    updateHour() {
      this.hour = getHourProgress();
    },
  },
});
