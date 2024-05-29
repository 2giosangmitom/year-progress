import { setActivePinia, createPinia } from "pinia";
import { createTestingPinia } from "@pinia/testing";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { mount } from "@vue/test-utils";
import Progress from "~/components/Progress.vue";

describe("Progress.vue", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("initializes store correctly", () => {
    const progress = useProgressStore();
    expect(progress.year).toBe(0);
    expect(progress.month).toBe(0);
    expect(progress.day).toBe(0);
    expect(progress.hour).toBe(0);
  });

  it("renders correctly with props", () => {
    const wrapper = mount(Progress, {
      props: {
        title: "Year",
        progress: 75.12345,
      },
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
          }),
        ],
      },
    });
    expect(wrapper.find("p").text()).toBe("Year: 75.12345%");
    const progressBar = wrapper.find("[role='progressbar']");
    expect(progressBar.attributes("aria-valuenow")).toBe("75.12345");
    expect(progressBar.attributes("aria-label")).toBe("Year progress");
    expect(progressBar.find("div").element.style.width).toBe("75.12345%");
  });

  it("updates store progress", () => {
    const mockDate = new Date(2023, 0, 1, 12, 30, 15, 500); // January 1, 2023 12:30:15.500
    vi.setSystemTime(mockDate);
    const expectedHourProgress = (30 / 60 + 15 / 3600 + 500 / 3600000) * 100;
    const expectedDayProgress = ((12 + expectedHourProgress / 100) / 24) * 100;
    const expectedMonthProgress = (expectedDayProgress / 100 / 31) * 100;
    const expectedYearProgress = (2 / 365) * 100;

    const store = useProgressStore();
    store.update();
    expect(store.hour).toBe(expectedHourProgress);
    expect(store.day).toBe(expectedDayProgress);
    expect(store.month).toBe(expectedMonthProgress);
    expect(store.year).toBe(expectedYearProgress);

    vi.useRealTimers();
  });
});
