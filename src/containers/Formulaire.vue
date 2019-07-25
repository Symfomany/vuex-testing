<template>
  <div class="form">
    <h1>Register</h1>
    <form method="post">
      Nom:
      <input v-model="nom" type="text" name="nom" required>
      Prénom:
      <input type="text" v-model="prenom" name="prenom" required>
      <button>Valider</button>
    </form>

    <HelloWorld @decrease="decrease" @increase="increase" @reset="reset" :nb="getNb"></HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "formulaire",
  data: () => ({
    nom: "Boyer",
    prenom: ""
  }),
  methods: {
    ...mapActions(["increase", "decrease", "reset"])
  },
  computed: {
    // rajouter les accesseurs dans `computed` avec l'opérateur de décomposition
    ...mapGetters(["getNb"])
  },
  components: {
    HelloWorld
  }
};
</script>
