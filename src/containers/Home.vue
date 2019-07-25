<template>
  <div class="home">
    <h1>Welcome Julien</h1>
    <HelloWorld
      @decrease="decrease"
      @increase="increase"
      @reset="reset"
      :nb="getNb"
      msg="Welcome to Your Vue.js App"
    />
    <Liste
      @randomListe="randomListe"
      @reloadListe="loadBooks"
      @resetListe="resetListe"
      :books="getBooks"
    ></Liste>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Liste from "@/components/Liste.vue";

import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "home",
  components: {
    HelloWorld,
    Liste
  },
  methods: {
    ...mapActions([
      "increase",
      "decrease",
      "reset",
      "loadBooks",
      "resetListe",
      "randomListe"
    ])
  },
  created() {
    this.loadBooks();
  },
  computed: {
    // rajouter les accesseurs dans `computed` avec l'opérateur de décomposition
    ...mapGetters(["getNb", "getBooks"])
  }
};
</script>
