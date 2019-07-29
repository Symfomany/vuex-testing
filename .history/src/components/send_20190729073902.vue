<template>
  <div>
    <v-form v-model="valid" @submit.prevent="handleSubmit">
      <input v-model="username" data-username>
      <input type="submit">
    </v-form>

    <div 
      class="message" 
      v-if="submitted"
    >
      Thank you for your submission, {{ username }}.
    </div>
  </div>
</template>
<script>
  export default {
    name: "FormSubmitter",

    data() {
      return {
        valid: false,
        username: '',
        submitted: false
      }
    },

    methods: {
      handleSubmit() {
        this.submitted = true
      }
    }
  }
</script>