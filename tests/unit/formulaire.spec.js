import { createLocalVue, mount, shallowMount } from "@vue/test-utils";
import { render } from '@vue/server-test-utils'
import Vuetify from "vuetify";
import Vue from "vue";
import Vuex from 'vuex';
import HelloWorld from "@/components/HelloWorld.vue";
import Formulaire from "@/containers/Formulaire.vue";

import store from "../../src/store";
Vue.use(Vuex);

// const getters =  {
//       getNb: jest.fn()
// };
 

// const store = new Vuex.Store({
//   state: {
//     nb: 8,
//     books: []
//   },
//   ...getters
// })

// console.log(store);

describe("Formulaire.vue", () => {
  let wrapper;
  beforeEach(() => {
    const localVue = createLocalVue();
    Vue.use(Vuetify);
    wrapper = shallowMount(Formulaire, {
      store,
      localVue,
        propsData: {
 }
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders a vue instance", () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });
  
  it("renders a Bonjour Child", () => {
    expect(wrapper.contains(HelloWorld)).toBe(true);
  });

  
  it('Find input- type text ', ()=>{
    expect(wrapper.contains('#nom')).toBe(true)
  })

  it("Has h1 title", () => {
      expect(wrapper.contains("h1")).toBe(true);
      let span = wrapper.find("h1");
      expect(span.text()).toBe("Register");
  });
  
  it("set Formulaire at false", () => {
      expect(wrapper.vm.valid).toBe(true)
      expect(wrapper.contains('[data-test="nom"]')).toBe(true)
  });

  //   it("set User nom error ", () => {
  //        wrapper.setData({ user: {nom: 'Ju'} });
  //       expect(wrapper.contains('Name must be more than 2 characters')).toBe(true)
  // });

});
