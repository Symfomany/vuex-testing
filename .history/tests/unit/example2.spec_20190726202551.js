import { createLocalVue, mount, shallowMount } from "@vue/test-utils";
import Vuetify from "vuetify";
import Vue from "vue";

import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  const nb = 8;
  let wrapper;
  beforeEach(() => {
    const localVue = createLocalVue();
    Vue.use(Vuetify);
    wrapper = shallowMount(HelloWorld, {
      localVue,
      propsData: { nb: 5 }
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders a vue instance", () => {
    expect(shallowMount(HelloWorld).isVueInstance()).toBe(true);
  });
  it("Has p", () => {
    expect(wrapper.contains("p")).toBe(true);
  });

  it("Has the good render props", () => {
    let txt = wrapper.find("#nb");
    expect(txt.text()).toBe("5");

    let title = wrapper.find("h3");
    expect(title.text()).toBe("Résultats");
  });

  it("renders a v-layout", () => {
    expect(wrapper.contains("v-container-stub")).toBe(true);
  });
});
