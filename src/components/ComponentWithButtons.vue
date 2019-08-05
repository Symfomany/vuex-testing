<template>
  <div>
    <button class="commit" @click="handleCommit">Commit ceci</button>

    <button class="dispatch" @click="handleDispatch">Dispatch cela</button>
  </div>
</template>

<script>
export default {
  name: "ComponentWithButtons",

  methods: {
    handleCommit() {
      this.$store.commit("testMutation", { msg: "Test Commit" });
    },

    handleDispatch() {
      this.$store.dispatch("testAction", { msg: "Test Dispatch" });
    }
  }
};
</script>