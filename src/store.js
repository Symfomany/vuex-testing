import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nb: 8,
    books: []
  },
  getters: {
    getNb(state) {
      return state.nb;
    },
    getBooks(state) {
      return state.books;
    }
  },
  mutations: {
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
    }
  },
  actions: {
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
