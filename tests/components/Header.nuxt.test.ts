import { describe, expect, it } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import Header from "~/components/Header.vue";

describe("Header Component", () => {
  it("should render", () => {
    const wrapper: VueWrapper<any> = mount(Header);
    expect(wrapper.html()).toContain("Year progress");
  });
});
