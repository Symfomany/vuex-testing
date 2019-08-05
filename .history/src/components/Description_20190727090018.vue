<template>
  <div>
    <h3>Je suis la description</h3>
    <span v-if="seen">Now you see me</span>

    <ol>
      <li :key="todo.text.length" v-for="todo in todos">{{ todo.text }}</li>
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
  })
};
</script>