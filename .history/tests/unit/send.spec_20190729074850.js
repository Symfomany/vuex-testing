import { shallowMount, mount } from "@vue/test-utils"
import Send from "@/components/Send.vue";

import Vuetify from "vuetify";
import Vue from "vue";
describe("Send", () => {
  it("reveals a notification when submitted", () => {
        Vue.use(Vuetify);

      const wrapper = mount(Send)

    // expect(wrapper.find(".message").text())
    //   .toBe("Thank you for your submission, alice.")
    wrapper.find("[data-username]").setValue("alice")
    wrapper.find("form").trigger("submit.prevent")
          expect(wrapper.element).toMatchSnapshot();

    expect(wrapper.find(".message").text())
      .toBe("Thank you for your submission, alice.")
  })
})