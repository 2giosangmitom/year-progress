import { mount } from "@vue/test-utils";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import App from "~/app.vue";
import { createTestingPinia } from "@pinia/testing";
import { setActivePinia, createPinia } from "pinia";

describe("App Component", () => {
  let wrapper: ReturnType<typeof mount>;

  beforeEach(() => {
    setActivePinia(createPinia());
    wrapper = mount(App, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it("renders four Progress components with correct titles", () => {
    const progressComponents = wrapper.findAllComponents({ name: "Progress" });
    expect(progressComponents.length).toBe(4);
    expect(progressComponents[0].props("title")).toBe("Year");
    expect(progressComponents[1].props("title")).toBe("Month");
    expect(progressComponents[2].props("title")).toBe("Day");
    expect(progressComponents[3].props("title")).toBe("Hour");
  });

  it("renders ToggleTheme component", () => {
    expect(wrapper.findComponent({ name: "ToggleTheme" }).exists()).toBe(true);
  });
});
