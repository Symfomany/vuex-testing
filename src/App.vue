<template>
  <v-app>
    <v-content>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/form">Form</router-link>

      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    //
  })
};
</script>
