<template>
  <div>
    <v-alert v-model="show" type="success" class="mb-4">Il y a trop de todos!</v-alert>

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
    show: false,
    todos: [
      { text: "Learn JavaScript" },
      { text: "Learn Vue" },
      { text: "Build something awesome" }
    ]
  })
};
</script>