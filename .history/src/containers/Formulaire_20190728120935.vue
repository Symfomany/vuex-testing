<template>
  <div class="form">
    <h1>Register</h1>
    <v-form ref="form" v-model="valid">
      <v-container grid-list-xl>
        <v-layout wrap>
          <v-flex xs12>
            <v-radio-group v-model="user.sexe">
              <v-radio class="sexe" label="Homme" value="homme"></v-radio>
              <v-radio class="sexe" label="Femme" value="Femme"></v-radio>
            </v-radio-group>
          </v-flex>

          <v-flex>
            <v-checkbox class="loisir" v-model="user.sports" label="Cheval" value="Cheval"></v-checkbox>
            <v-checkbox class="loisir" v-model="user.sports" label="Boxe" value="Boxe"></v-checkbox>
            <v-checkbox class="loisir" v-model="user.sports" label="Tennis" value="Tennis"></v-checkbox>
            <v-checkbox class="loisir" v-model="user.sports" label="Basket" value="Basket"></v-checkbox>
            <v-checkbox class="loisir" v-model="user.sports" label="Football" value="Football"></v-checkbox>
          </v-flex>

          <v-flex xs12 sm6 md3>
            <v-text-field id="nom" :rules="rules" v-model="user.nom" required label="Nom"></v-text-field>
          </v-flex>

          <v-flex xs12 sm6 md3>
            <v-text-field id="prenom" :rules="rules" v-model="user.prenom" required label="Prénom"></v-text-field>
          </v-flex>

          <v-flex xs12 sm12 md6>
            <v-textarea id="biographie" v-model="user.biography" required label="Biographie"></v-textarea>
          </v-flex>

          <v-flex>
            <v-select
              class="loisirs"
              v-model="user.item"
              :items="user.items"
              :rules="[v => !!v || 'Loisir est obligatoire']"
              label="Loisirs"
              required
            ></v-select>
          </v-flex>
        </v-layout>
      </v-container>

      <v-btn
        id="submission"
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="validate"
      >Enregistrer</v-btn>
    </v-form>

    <HelloWorld @decrease="decrease" @increase="increase" @reset="reset" :nb="getNb"></HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "formulaire",

      mounted(){
         const elt = this.$el.childNodes[0];
        // console.log(elt.innerHTML);
        console.log(elt.text);
        const form = this.$el.childNodes[1];
        // console.log(form.querySelector("#nom"));
        // console.log(form.querySelector("#nom").value);
        // console.log(form.querySelector("#nom").getAttribute("placeholder"));
    },


  data: () => ({
    valid: true,
    rules: [
      v => !!v || "Field is required",
      v => v.length > 2 || "Name must be more than 2 characters"
    ],
    user: {
      nom: "",
      prenom: "",
      sexe: "homme",
      biography: "",
      sports: [],
      items: ["Le violon", "Le cinéma", "La lecture", "le théâtre"],
      item: ["Le violon"]
    }
  }),
  methods: {
    ...mapActions(["increase", "decrease", "reset", "storeUser"]),
    validate() {
      if (this.$refs.form.validate()) {
        ("Le formulaire est bon!");
        this.storeUser(this.user);
        this.$router.push("/");
      }
    }
  },
  computed: {
    // rajouter les accesseurs dans `computed` avec l'opérateur de décomposition
    ...mapGetters(["getNb"])
  },
  components: {
    HelloWorld
  }
};
</script>
