import { createLocalVue, mount, shallowMount } from "@vue/test-utils";
import Vuetify from "vuetify";
import Vue from "vue";

import Liste from "@/components/Liste.vue";

describe("Liste.vue", () => {
  let wrapper;
  beforeEach(() => {
    const localVue = createLocalVue();
    Vue.use(Vuetify);
    wrapper = shallowMount(Liste, {
      localVue,
      propsData: {
        books: []
      }
    });
    //expect(wrapper.element).toMatchSnapshot();
  });

  it("renders a vue instance", () => {
    expect(shallowMount(Liste).isVueInstance()).toBe(true);
  });
  it("No books", () => {
    expect(wrapper.text()).toContain("Aucun book");
  });
  it("Has books", () => {
    expect(wrapper.props().books).isArray([]);
  });

  // it("Has the good render props", () => {
  //   let txt = wrapper.find("#nb");
  //   expect(txt.text()).toBe("5");

  //   let title = wrapper.find("h3");
  //   expect(title.text()).toBe("Résultats");
  // });

  // it("renders a v-layout", () => {
  //   expect(wrapper.contains("v-container-stub")).toBe(true);
  // });
});
