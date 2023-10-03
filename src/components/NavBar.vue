<template>
    <div class="container">
        <div class="row py-2">
            <div class="col-6">
                <RouterLink to="/user/D-Perfume"><img src="../assets/images/d’Perfume.png" alt="LOGO"></RouterLink>
            </div>
            <div class="col-6">
                <ul class="h-100 d-flex justify-content-end align-items-center mb-0">
                    <li>
                        <RouterLink to="/user/products">
                            <a href="#" class="d-flex link-secondary me-sm-3">
                                <i class="bi bi-shop me-1"></i>
                                <p class="mb-0 d-sm-none d-md-inline">Products</p>
                            </a>
                        </RouterLink>
                    </li>
                    <li>
                        <a class="d-flex link-secondary ms-md-3 me-sm-3" data-bs-toggle="offcanvas" href="#offcanvasExample"
                            role="button" aria-controls="offcanvasExample" @click="test">
                            <i class="bi bi-heart-fill me-1">
                                <span class="bg-primary text-light rounded px-1 fst-normal icon-num d-md-none"
                                    v-if="wishList">{{ wishList.length }}</span>
                            </i>
                            <div class="d-sm-none d-md-inline">
                                <p class="mb-0" v-if="!wishList.length">Wishlist</p>
                                <p class="mb-0" v-else-if="wishList.length">{{ `Wishlist(${wishList.length})` }}</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <router-link to="/user/cart">
                            <a href="#" class="d-flex link-secondary ms-md-3 me-sm-3 me-md-0">
                                <i class="bi bi-cart2 me-1">
                                    <span class="bg-primary text-light rounded px-1 fst-normal icon-num d-md-none"
                                        v-if="cartNum">{{ cartNum }}</span>
                                </i>
                                <div class="d-sm-none d-md-inline">
                                    <p class="mb-0" v-if="cartNum">{{ `Cart(${cartNum})` }}</p>
                                    <p class="mb-0" v-else>Cart</p>
                                </div>
                            </a>
                        </router-link>
                    </li>
                    <li class="d-md-none">
                        <RouterLink to="/user/login">
                            <a href="#" class="d-flex link-secondary ms-md-3 me-sm-3 me-md-0">
                                <i class="bi bi-person-circle"></i>
                            </a>
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header text-primary">
            <i class="bi bi-heart-fill me-1"></i>
            <h5 class="offcanvas-title fw-bold" id="offcanvasExampleLabel">Your Wishlist</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">品名</th>
                            <th scope="col">單價</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, key) in wishList" :key="item.id">
                            <th scope="row">
                                <button type="button" class="btn btn-outline-danger btn-sm" @click="delWish(key)">
                                    <i class="bi bi-x"></i>
                                </button>
                            </th>
                            <td><button type="button" class="btn p-0" @click="getProduct(item.id)">{{ item.title }}</button></td>
                            <td>{{ item.price }}</td>
                            <td>
                                <button type="button" class="btn text-primary p-0 ms-1" @click="addCart(item.id)">
                                    <i class="bi bi-cart2 me-1"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cartNum: 0,
            wishNum: 0,
            tempWish: {},
            wishList: [],
            btnLoading: false
        }
    },
    inject: ['emitter'],
    methods: {
        cartNumber() {
            const api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/cart`
            this.$http.get(api).then((res) => {
                this.cartNum = res.data.data.carts.length
            })
        },
        addCart(id) {
            const api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/cart`
            const cart = {
                product_id: id,
                qty: 1
            }
            this.btnLoading = true
            this.$http.post(api, { data: cart }).then((res) => {
                if (res.data.success) {
                    this.$http.get(api).then((res) => {
                        this.cartNum = res.data.data.carts.length
                        this.emitter.emit('cart-num', this.cartNum)
                        this.btnLoading = false
                    })
                }
            })
        },
        delWish(key) {
            this.wishList.splice(key, 1)
        },
        getProduct(id) {
            this.$router.push(`/user/product/${id}`)
        }
    },
    created() {
        this.emitter.on('cart-num', (num) => {
            this.cartNum = num
        })
        this.cartNumber()
        this.emitter.on('emit-wish-from-nav', (products) => {
            this.wishList = products
        })
        this.emitter.on('emit-wish-from-info', (product) => {
            this.tempWish = product
        })
    },
}
</script>