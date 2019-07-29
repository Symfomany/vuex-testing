<template>
  <div>
    <v-form v-model="valid" @submit="handleSubmit">
        <v-container grid-list-xl>
            <v-layout wrap>
                <v-flex xs12 md4>
                    <v-text-field
                        v-model="username"
                        data-username
                        :rules="nameRules"
                        :counter="10"
                        label="Username"
                        required
                    ></v-text-field>
                    <v-btn color="primary" type="submit" >Envoyer</v-btn>
                </v-flex>
            </v-layout>
        </v-container>
    </v-form>

    <div 
    id="mess"
      class="message" 
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