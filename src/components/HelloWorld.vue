<template>
  <v-container>
    <v-layout wrap>
      <v-btn @click="$emit('increase')" color="primary">Augmenter</v-btn>
      <v-btn @click="$emit('decrease')" color="secondary">Diminuer</v-btn>
      <v-btn @click="$emit('reset')" color="success">Remise à zero</v-btn>
      <p>
        Nombre :
        <span id="nb">{{ nb }}</span>
      </p>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({}),
  props: {
    nb: Number,
    increase: Function,
    decrease: Function,
    reset: Function
  }
};
</script>
