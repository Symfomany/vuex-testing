import { shallowMount } from "@vue/test-utils"
import Send from "@/components/Send.vue"

describe("Send", () => {
  it("reveals a notification when submitted", () => {
      const wrapper = shallowMount(Send)
      
    // expect(wrapper.find(".message").text())
    //   .toBe("Thank you for your submission, alice.")
    wrapper.find("[data-username]").setValue("alice")
    wrapper.find("form").trigger("submit.prevent")

    expect(wrapper.find(".message").text())
      .toBe("Thank you for your submission, alice.")
  })
})