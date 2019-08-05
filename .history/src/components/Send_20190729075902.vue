<template>
  <div>
    <v-form v-model="valid" @submit="handleSubmit">
        <v-container grid-list-xl>
            <v-layout wrap>
                <v-flex xs12 md4>
                    <v-text-field
                        v-model="username"
                        data-username
                        label="Username"
                    ></v-text-field>
                    <v-btn @click="handleSubmit" color="primary" type="submit" >Envoyer</v-btn>
                </v-flex>
            </v-layout>
        </v-container>
    </v-form>

    <div 
    id="mess"
      class="message" 
      v-if="submitted"
    >
      Thank you for your submission, {{ username }}.
    </div>
  </div>
</template>
<script>
  export default {
    name: "Send",

    data() {
      return {
        valid: false,
        username: '',
        submitted: false
      }
    },

    methods: {
      handleSubmit() {
        console.log("submited ! ");
        this.submitted = true
      }
    }
  }
</script>