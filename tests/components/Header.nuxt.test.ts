import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import Header from "~/components/Header.vue";

describe("Header", () => {
  it("renders", () => {
    const wrapper = mount(Header);
    expect(wrapper.html()).toContain("Year progress");
  });
});
