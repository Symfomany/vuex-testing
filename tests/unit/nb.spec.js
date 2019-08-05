import Vuex from "vuex"
import Vue from "vue"
import { shallowMount, mount, createLocalVue } from "@vue/test-utils"
import Nb from "@/components/Nb.vue"

import Vuetify from "vuetify";
Vue.use(Vuetify)

const localVue = createLocalVue()
localVue.use(Vuetify);
localVue.use(Vuex)

const store = new Vuex.Store({
  state: {
    nb: 5
  },
    mutations: {
        increase(state){
            state.nb++;
        }
    },
    actions: {
        increase(context){
            context.commit('increase')
        }
    }
})


describe("Nb", () => {
  it("renders a nb using a real Vuex store", () => {
    store.commit("increase")

    const wrapper = shallowMount(Nb, { 
      store, 
      localVue 
    })
    expect(wrapper.find(".nb").text()).toBe("6")
    expect(wrapper.find("#inputNb").attributes().value).toBe("6")
  })
})