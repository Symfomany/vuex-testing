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

  it("Has the good render props", () => {
    let txt = wrapper.find("h3");
    expect(txt.text()).toBe("Je suis la description");
  });
});
