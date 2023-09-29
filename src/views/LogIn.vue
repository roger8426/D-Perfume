<template>
    <div class="container">
        <div class="row mt-6 mb-6">
            <div class="col">
                <img src="../assets/images/login1.jpg" alt="" class="w-100">
            </div>
            <div class="col">
                <form @submit.prevent="signIn" class="h-100">
                    <div class="d-flex flex-column justify-content-center h-100">
                        <h1 class="h3 mb-3 fw-bold">Log in</h1>
                        <div class="mb-2">
                            <label for="inputEmail" class="sr-only">Email address</label>
                            <input type="email" id="inputEmail" class="form-control" placeholder="Email address"
                                v-model="user.username" required autofocus />
                        </div>
                        <div class="mb-2">
                            <label for="inputPassword" class="sr-only">Password</label>
                            <input type="password" id="inputPassword" class="form-control" placeholder="Password"
                                v-model="user.password" required />
                        </div>
                        <div class="text-end mt-4">
                            <button class="btn btn-lg btn-primary btn-block" type="submit">登入</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        signIn() {
            const api = `${import.meta.env.VITE_API}admin/signin`
            this.$http.post(api, this.user)
                .then((res) => {
                    if (res.data.success) {
                        const { token, expired } = res.data
                        document.cookie = `perfumeToken=${token}; expired=${new Date(expired)}`
                        this.$router.push('/dashboard/productlist')
                    }
                })
        }
    }
}
</script>