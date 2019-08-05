<template>
  <div>
    <header>
      <slot name="titledefault">
        <h6>Je suis le contenu par defaut</h6>
      </slot>
    </header>
    <h3 class="title">Bonjour {{ prenom }}</h3>
    <p class="text">Je suis les composants enfants</p>
  </div>
</template>

<script>
export default {
  props: {
    prenom: {
      type: String,
      default: "Julien"
    }
  },
  mounted() {
    // console.log(this.$el);
    // this.$el.style.display="block"
    // this.$el.firstChild.style.color="red"
    // this.$el.childNodes[1].style.color="blue"
    // console.log(this.$el.childNodes[1].getAttribute("classe"))
  }
};
</script>
