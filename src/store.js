import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nb: 2,
    books: [],
    message: "Je suis le message"
  },
  getters: {
    getPos(state) {
      return state.nb >= 0;
    },
    getNb(state) {
      return state.nb;
    },
    getBooks(state) {
      return state.books;
    }
  },
  mutations: {
    testMutation(state, message) {
      state.message = message;
    },
    increase(state) {
      state.nb++;
    },
    decrease(state) {
      state.nb--;
    },
    reset(state, nb) {
      state.nb = nb;
    },
    modifyBooks(state, books = []) {
      state.books = books;
    },
    randomBooks(state) {
      state.books.sort(() => 0.5 - Math.random());
    },
    storeUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    testAction(context, msg) {
      context.commit("testMutation", msg);
    },
    storeUser(context, user) {
      context.commit("storeUser", user);
    },
    randomListe(context) {
      context.commit("randomBooks");
    },
    resetListe(context) {
      context.commit("modifyBooks");
    },
    loadBooks(context) {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(json => context.commit("modifyBooks", json));
    },
    increase(context) {
      context.commit("increase");
    },
    decrease(context) {
      context.commit("decrease");
    },
    reset(context) {
      const nb = Math.floor(Math.random() * 9 + 1);
      context.commit("reset", nb);
    }
  }
});
