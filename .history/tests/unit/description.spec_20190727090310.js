import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuetify from "vuetify";
import Vue from "vue";

import Description from "@/components/Description.vue";

describe("Description.vue", () => {
  let wrapper;
  beforeEach(() => {
    const localVue = createLocalVue();
    Vue.use(Vuetify);
    wrapper = shallowMount(Description, {
      localVue,
      propsData: {}
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders a vue instance", () => {
    expect(shallowMount(Description).isVueInstance()).toBe(true);
  });
  it("Has h3", () => {
    expect(wrapper.contains("h3")).toBe(true);
  });

  it("Has span invisible", () => {
    expect(wrapper.contains("span")).toBe(false);
  });

  it("Has span visible", () => {
    wrapper.setData({ seen: true });
    expect(wrapper.contains("span")).toBe(true);
    let span = wrapper.find("span");
    expect(span.text()).toBe("Now you see me");
  });

  it("Has array props ", () => {
    expect(wrapper.find("li")).to.have.length(3);
  });

  it("Has array props empty", () => {
    wrapper.setData({ todos: [] });
    expect(wrapper.contains("li")).toBe(false);
    let span = wrapper.find("ol");
  });

  it("Has the good render props", () => {
    let txt = wrapper.find("h3");
    expect(txt.text()).toBe("Je suis la description");
  });
});
