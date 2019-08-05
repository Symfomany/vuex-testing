<template>
    <h3>Bonjour {{  prenom }}</h3>
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
