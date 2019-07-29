import Vuex from "vuex"
import Vue from "vue"
import { shallowMount, mount, createLocalVue } from "@vue/test-utils"
import Nb from "@/components/Nb.vue"

import Vuetify from "vuetify";
Vue.use(Vuetify)

const localVue = createLocalVue()
localVue.use(Vuetify);
localVue.use(Vuex)

describe("Nb", () => {
  it("renders a nb  mocks store global", () => {
    const wrapper = shallowMount(Nb, { 
      localVue ,
        mocks: {
          $store: {
               getters: {
              getPos: true
            },
            state: { nb: 2 }
          }
       }
    })
    expect(wrapper.find(".nb").text()).toBe("2")
    expect(wrapper.find("#inputNb").attributes().value).toBe("2")
  })
})


describe("Nb", () => {
  it("renders a nb  mocks store global", () => {
    const wrapper = shallowMount(Nb, { 
      localVue ,
        mocks: {
          $store: {
            getters: {
              getPos: true
            },
            state: { nb: -2 },
          }
       }
    })
      expect(wrapper.find(".nb").text()).toBe("-2")
    console.log(wrapper.vm.$refs.btn.$el);
    // expect(wrapper.find("#btn").attributes().disabled).toBe(true)
  })
})
