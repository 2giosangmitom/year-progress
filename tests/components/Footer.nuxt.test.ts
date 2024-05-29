import { describe, expect, it, beforeEach } from "vitest";
import { mount, type VueWrapper } from "@vue/test-utils";
import Footer from "~/components/TheFooter.vue";

describe("Footer Component", () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(Footer);
  });

  it("should render the footer text correctly", () => {
    expect(wrapper.html()).toContain("Find the source code on");
  });

  it("should have a link with the correct href attribute", () => {
    const link = wrapper.find("a");
    expect(link.exists()).toBe(true);
    expect(link.attributes("href")).toBe("https://github.com/2giosangmitom/year-progress");
  });
});
