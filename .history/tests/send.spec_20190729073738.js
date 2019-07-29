import { shallowMount } from "@vue/test-utils"
import Send from "@/components/send.vue"

describe("Send", () => {
  it("reveals a notification when submitted", () => {
    const wrapper = shallowMount(Send)

    wrapper.find("[data-username]").setValue("alice")
    wrapper.find("form").trigger("submit.prevent")

    expect(wrapper.find(".message").text())
      .toBe("Thank you for your submission, alice.")
  })
})