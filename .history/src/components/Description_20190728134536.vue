<template>
  <div>
    <Bonjour :prenom="message" >
   <template name="titledefault">
            <h5>Je suis un autre titre </h5>
        </template>
    </Bonjour>
    <p>{{ message }}</p>
    <h4 id="age">Votre age est de {{ age }} ans</h4>
    <button @click="reverseMessage">Reverse Message</button>

     <v-container grid-list-xl>
      <v-layout wrap>
        <v-flex xs12 sm6 md3>
          <v-text-field
          type="input"
          placeholder="Enter US Zip code"
            id="txtMessage"
            v-model="message"
            label="Votre Message"
            data-test="zipCodeText"
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>


    <v-alert v-model="show" type="success" class="mb-4 success">Il y a trop de todos!</v-alert>
    <v-alert v-model="showTwo" type="error" class="mb-4 error">Il y a pas assez de todos!</v-alert>
    <v-alert v-model="showThree" type="info" id="inform" class="mb-4 inform"><h2>Hello todos!</h2></v-alert>

    <h3>Je suis la description</h3>
    <span id="see" v-show="seen">Now you see me</span>
    <ol>
      <li :key="todo.text" v-for="todo in todos">{{ todo.text }}</li>
    </ol>
  </div>
</template>

<script>
import Bonjour from "@/components/Bonjour.vue";

export default {
  props:{
    age: Number,
    save: {
      type: Function,
      default: function(){
        return null;
      }
    }
  },
  methods: {
    reverseMessage() {
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    }
  },
  data() {
    return{
    message: "juju",
    seen: false,
    showThree: false,
    todos: [
      { text: "Learn JavaScript" },
      { text: "Learn Vue" },
      { text: "Build something awesome" }
    ]
    }
  },
  computed: {
    showTwo() {
      return this.todos.length < 2;
    },
    show() {
      return this.todos.length >= 4;
    }
  },
  watch: {

    message(val) {
      if(val.length > 8){
        this.showThree = true;
      }else{
         this.showThree = false;
      }
    }
  },
  components: {
    Bonjour
  }
};
</script>