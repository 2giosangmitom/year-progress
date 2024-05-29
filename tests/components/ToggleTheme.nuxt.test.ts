import { mount } from "@vue/test-utils";
import ToggleTheme from "@/components/ToggleTheme.vue";
import { createTestingPinia } from "@pinia/testing";
import { useThemeStore } from "@/stores/theme";
import { describe, it, expect, afterEach, vi, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";

describe("ToggleTheme", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("initializes the theme based on local storage", () => {
    Storage.prototype.getItem = vi.fn(() => "dark");

    mount(ToggleTheme, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });

    const themeStore = useThemeStore();
    expect(themeStore.theme).toBe("dark");
    expect(window.localStorage.getItem("theme")).toBe("dark");
    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });

  it("initializes the theme based on system preference if no local storage", () => {
    Storage.prototype.getItem = vi.fn(() => null);
    window.matchMedia = vi.fn().mockImplementation((query) => ({
      matches: query === "(prefers-color-scheme: dark)",
    }));

    mount(ToggleTheme, { global: { plugins: [createTestingPinia({ createSpy: vi.fn })] } });

    const themeStore = useThemeStore();
    expect(themeStore.theme).toBe("dark");
    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });

  it("toggles the theme on button click", () => {
    const wrapper = mount(ToggleTheme, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });
    wrapper.find("button").trigger("click");

    const themeStore = useThemeStore();
    expect(themeStore.toggle).toHaveBeenCalled();
    expect(themeStore.theme).toBe("dark");
    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });
});
