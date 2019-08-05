<template>
  <div class="hello">
    <template v-if="books.length > 0">
      <h3>Les bouquins</h3>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-card class="mx-auto" max-width="400">
            <v-list id="books" :flat="false" :dense="false">
              <v-list-item :key="book.id" v-for="book in books">
                <v-list-item-content>
                  <v-list-item-title v-text="book.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
      <v-btn @click="$emit('reloadListe')">Reload The liste</v-btn>
      <v-btn @click="$emit('resetListe')">Reset The liste</v-btn>
      <v-btn @click="$emit('randomListe')">Random The liste</v-btn>
    </template>
    <template v-else>
      <p>Aucun book.</p>
    </template>
  </div>
</template>

<script>
export default {
  name: "Liste",
  props: {
    books: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
