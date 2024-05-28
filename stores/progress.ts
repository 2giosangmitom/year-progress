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
    update() {
      this.year = getYearProgress();
      this.month = getMonthProgress();
      this.day = getDayProgress();
      this.hour = getHourProgress();
    },
  },
});
