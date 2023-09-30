<template>
    <navBar></navBar>
    <router-view></router-view>
    <footerBar></footerBar>
</template>
<script>
import navBar from '../components/NavBar.vue'
import footerBar from '../components/FooterBar.vue'
import emitter from '../methods/emitter';

export default {
    components: {
        navBar,
        footerBar
    },
    provide() {
        return {
            emitter
        }
    },
    created() {
        this.$router.push('/user/D-Perfume')
    },
}
</script>