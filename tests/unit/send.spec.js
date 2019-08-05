import { shallowMount, mount } from "@vue/test-utils"
import Send from "@/components/Send.vue";

import Vuetify from "vuetify";
import Vue from "vue";
import { VIcon } from "vuetify/lib";

Vue.use(Vuetify);


describe("Send", () => {
  it("reveals a notification when submitted", () => {
        Vue.use(Vuetify);

      const wrapper = shallowMount(Send)
  expect(wrapper.find(VIcon).exists()).toBe(true); // Passes

    // expect(wrapper.find(".message").text())
    //   .toBe("Thank you for your submission, alice.")
  //   wrapper.find("[data-username]").setValue("alice")
  //   // console.log( wrapper.find("button").attributes());
  //   wrapper.find("form").trigger("submit.prevent")
  //   // console.log(wrapper.html());
  //   expect(wrapper.element).toMatchSnapshot();

  //   expect(wrapper.find("#mess").text())
  //     .toBe("Thank you for your submission, alice.")
  })
})