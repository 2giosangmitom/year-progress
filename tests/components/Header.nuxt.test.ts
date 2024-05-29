import { describe, expect, it } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import Header from "~/components/Header.vue";

describe("Header", () => {
  it("renders", async () => {
    const wrapper = await mountSuspended(Header);
    expect(wrapper.html()).toContain("Year progress");
  });
});
