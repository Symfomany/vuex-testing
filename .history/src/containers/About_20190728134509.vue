<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Description @save="essai" :age="31">
        <template name="titledefault">
            <h5>Je suis un autre titre </h5>
        </template>

    </Description>
  </div>
</template>

<script>
import Description from "@/components/Description.vue";

export default {
  components: {
    Description
  },
  methods: {
    essai(){
      console.log("save")
    }
  }
};
</script>
