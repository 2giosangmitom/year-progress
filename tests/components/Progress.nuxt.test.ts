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
});
