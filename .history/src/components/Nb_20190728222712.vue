<template>
  <div>
    <v-alert class="nb">
      {{ nb }}
    </v-alert>
    <v-btn id="btn" :disabled="!positif" color="success">Nombre positif</v-btn>
    <v-text-field v-model="nb" id="inputNb" required label="Nom"></v-text-field>
  </div>
</template>

<script>
export default {
  name: "Nb",
  created(){
      console.log(this.$store.state.nb);
  },
  data() {
    return {
      nb: this.$store.state.nb
    }
  },
  computed: {
    positif() {
      return this.$store.getters.getPos
    }
  }
}
</script>