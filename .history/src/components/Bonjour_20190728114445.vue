<template>
<div>
    <h3>Bonjour {{  prenom }}</h3>
    <p>Je suis le composant enfant</p>
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
    mounted(){
        console.log(this.$el);
    }
}
</script>
