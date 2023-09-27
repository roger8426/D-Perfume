<template>
    <NavBar></NavBar>
    <ToastList></ToastList>
    <router-view></router-view>
</template>

<script>
import NavBar from '../components/NavBarEmp.vue'
import emitter from '../methods/emitter'
import ToastList from '../components/ToastList.vue'

export default {
    components: {
        NavBar,
        ToastList
    },
    provide() {
        return {
            emitter
        }
    },
    created() {
        const token = document.cookie.replace(/(?:(?:^|.*;\s*)perfumeToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
        this.$http.defaults.headers.common.Authorization = token
        const api = `${import.meta.env.VITE_API}api/user/check`
        this.$http.post(api, this.user)
            .then((res) => {
                if(!res.data.success) {
                    this.$router.push('/login')
                }
            })
    }
}
</script>