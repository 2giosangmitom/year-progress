import { describe, expect, it } from "vitest";
import type { VueWrapper } from "@vue/test-utils";
import { mount } from "@vue/test-utils";
import Header from "~/components/TheHeader.vue";

describe("Header Component", () => {
  it("should render", () => {
    const wrapper: VueWrapper = mount(Header);
    expect(wrapper.html()).toContain("Year progress");
  });
});
