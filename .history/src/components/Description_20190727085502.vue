<template>
  <div>
    <h3>Je suis la description</h3>
    <span v-if="seen">Now you see me</span>
  </div>
</template>

<script>
export default {
  data: () => ({
    seen: false
  })
};
</script>