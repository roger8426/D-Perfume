<template>
    <div class="container px-0">
        <div class="row py-2">
            <div class="col-6">
                <img src="../assets/images/d’Perfume.png" alt="LOGO" />
            </div>
            <div class="col-6">
                <ul class="h-100 d-flex justify-content-end align-items-center mb-0">
                    <li>
                        <RouterLink to="/dashboard/productlist">
                            <a href="#" class="d-flex link-secondary me-3">
                                <p class="mb-0">商品</p>
                            </a>
                        </RouterLink>
                    </li>
                    <li class="d-flex">
                        <RouterLink to="/dashboard/orderlist">
                            <a href="#" class="d-flex link-secondary ms-3 me-3">
                                <p class="mb-0">訂單</p>
                            </a>
                        </RouterLink>
                    </li>
                    <li class="d-flex">
                        <RouterLink to="/dashboard/couponlist">
                            <a href="#" class="d-flex link-secondary ms-3">
                                <p class="mb-0">優惠券</p>
                            </a>
                        </RouterLink>
                    </li>
                    <li class="d-flex">
                        <a href="#" class="d-flex link-secondary ms-3 me-3" @click.prevent="logOut">
                            <p class="mb-0">登出</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        logOut() {
            const api = `${import.meta.env.VITE_API}logout`
            this.$http.post(api, this.user)
                .then((res) => {
                    if (res.data.success) {
                        this.$router.push('/login')
                    }
                })
        }
    }
}
</script>