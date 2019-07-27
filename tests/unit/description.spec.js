import { createLocalVue, mount, shallowMount } from "@vue/test-utils";
import Vuetify from "vuetify";
import Vue from "vue";

import Bonjour from "@/components/Bonjour.vue";

import Description from "@/components/Description.vue";

describe("Description.vue", () => {
  let wrapper;
  beforeEach(() => {
    const localVue = createLocalVue();
    Vue.use(Vuetify);
    wrapper = mount(Description, {
      localVue,
      propsData: {
        age: 20
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it("renders a vue instance", () => {
    expect(shallowMount(Description).isVueInstance()).toBe(true);
  });

  it("renders a Bonjour Child", () => {
    expect(wrapper.contains(Bonjour)).toBe(true);
  });

  
  it('Find input- type text ', ()=>{
    expect(wrapper.contains('[data-test="zipCodeText"]')).toBe(true)
  })

  it("Has h4 title", () => {
    let span = wrapper.find("#age");
    expect(span.text()).toBe("Votre age est de 20 ans");
  });

  it("Has h3", () => {
    expect(wrapper.contains("h3")).toBe(true);
  });

  it("Has span invisible", () => {
    expect(wrapper.find("#see").isVisible()).toBe(false);
  });

  it("Has span visible", () => {
    wrapper.setData({ seen: true });
    expect(wrapper.contains("#see")).toBe(true);
    let span = wrapper.find("#see");
    expect(span.text()).toBe("Now you see me");
  });

  it("Has array props ", () => {
    expect(wrapper.findAll("li")).toHaveLength(3);
    expect(wrapper.vm.todos).toHaveLength(3);
  });

  it("Has little array ", () => {
    wrapper.setData({ todos: [{ text: "Learn Vue" }] });
    expect(wrapper.vm.todos).toHaveLength(1);
    expect(wrapper.vm.showTwo).toBe(true);
    expect(wrapper.contains(".error")).toBe(true);
  });

  it("Has big array empty", () => {
    wrapper.setData({
      todos: [
        { text: "Learn JavaScript" },
        { text: "Learn Vue" },
        { text: "Learn react" },
        { text: "Build something awesome" }
      ]
    });
    expect(wrapper.vm.todos).toHaveLength(4);
    expect(wrapper.vm.show).toBe(true);
    expect(wrapper.contains(".success")).toBe(true);
  });

  it("Has array props empty", () => {
    wrapper.setData({ todos: [] });
    expect(wrapper.contains("li")).toBe(false);
  });

  it("Trigger click button", () => {
    wrapper.find("button").trigger("click");
    expect(wrapper.vm.message).toBe("ujuj");
    wrapper.find("button").trigger("click");
    expect(wrapper.vm.message).toBe("juju");
  });

  
  it("set Value of message", () => {
     wrapper.setData({ message: "Coucou" });
      expect(wrapper.vm.message).toBe('Coucou')
     const input = wrapper.find('#txtMessage');
     input.setValue('84102');
    expect(wrapper.vm.message).toBe('84102')
  });


  it("Has the good render props", () => {
    let txt = wrapper.find("h3");
    expect(txt.text()).toBe("Bonjour Julien");
  });
});
