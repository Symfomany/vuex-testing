<template>
  <div>
    <v-alert v-model="show" type="success" class="mb-4 success">Il y a trop de todos!</v-alert>
    <v-alert v-model="showTwo" type="error" class="mb-4 error">Il y a pas assez de todos!</v-alert>
    <h3>Je suis la description</h3>
    <span v-if="seen">Now you see me</span>
    <ol>
      <li v-for="todo in todos">{{ todo.text }}</li>
    </ol>
  </div>
</template>

<script>
export default {
  data: () => ({
    seen: false,
    todos: [
      { text: "Learn JavaScript" },
      { text: "Learn Vue" },
      { text: "Build something awesome" }
    ]
  }),
  computed: {
    showTwo() {
      return this.todos.length < 2;
    },
    show() {
      return this.todos.length >= 4;
    }
  },
  watch: {}
};
</script>