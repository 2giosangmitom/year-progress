import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import Footer from "~/components/TheFooter.vue";

describe("Footer", () => {
  it("renders correctly", () => {
    const wrapper = mount(Footer);
    expect(wrapper.html()).toContain("Find the source code on");
    const link = wrapper.find("a");
    expect(link.exists()).toBe(true);
    expect(link.attributes("href")).toBe("https://github.com/2giosangmitom/year-progress");
  });
});
