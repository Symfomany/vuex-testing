import store from "../../src/store";
import Vue from "vue";
import Vuex from "vuex";
import Home from "@/containers/Home.vue";
import Bonjour from "@/components/Bonjour.vue";
import mutations from "./mutations.js"

Vue.use(Vuex);
import { shallowMount, createLocalVue,mount } from '@vue/test-utils'


describe("test user ", () => {

  it("adds a user to the state", () => {
    const reset = 5
    const user = {
         nom:  "Boyer",
    }
    store.commit("storeUser", user)
    expect(store.state).toEqual(  {"books": [],  "message": "", "nb": 8, "user": {"nom": "Boyer"}})
  })

  
  it("increase number ", () => {
    let   newStore = new Vuex.Store({
      state:{
          nb: 3
      }
    })
    const localVue = createLocalVue()
    localVue.use(Vuex)
    shallowMount(Bonjour, {
        localVue,
        newStore
    })
    expect(newStore.state.nb).toEqual(3)
    
  })

   it("adds a post to the state", () => {
    const post = { id: 1, title: "Post" }
    const state = {
      postIds: [],
      posts: {}
    }

    mutations.SET_POST(state, { post })

    expect(state).toEqual({
      postIds: [1],
      posts: { "1": post }
    })
  })


})
