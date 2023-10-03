<template>
    <div class="container">
        <div class="row py-2">
            <div class="col-6">
                <RouterLink to="/user/D-Perfume"><img src="../assets/images/d’Perfume.png" alt="LOGO"></RouterLink>
            </div>
            <div class="col-6">
                <ul class="h-100 d-md-flex d-sm-none justify-content-end align-items-center mb-0">
                    <li>
                        <RouterLink to="/user/products">
                            <a href="#" class="d-flex link-secondary me-3">
                                <i class="bi bi-shop me-1"></i>
                                <p class="mb-0">Products</p>
                            </a>
                        </RouterLink>
                    </li>
                    <li>
                        <a class="d-flex link-secondary ms-3 me-3" data-bs-toggle="offcanvas" href="#offcanvasExample"
                            role="button" aria-controls="offcanvasExample">
                            <i class="bi bi-heart-fill me-1"></i>
                            <p class="mb-0" v-if="!wishList.length">Wishlist</p>
                            <p class="mb-0" v-else-if="wishList.length">{{ `Wishlist(${wishList.length})` }}</p>
                        </a>
                    </li>
                    <li class="d-flex">
                        <router-link to="/user/cart">
                            <a href="#" class="d-flex link-secondary ms-3">
                                <i class="bi bi-cart2 me-1"></i>
                                <p class="mb-0" v-if="cartNum">{{ `Cart(${cartNum})` }}</p>
                                <p class="mb-0" v-else>Cart</p>
                            </a>
                        </router-link>
                    </li>
                </ul>
                <div class="d-flex justify-content-end d-md-none">
                    <router-link to="/user/cart">
                        <button class="btn py-0 fs-5" type="button">
                            <i class="bi bi-cart2 me-1">
                                <span class="bg-primary text-light rounded px-1 cart-num fst-normal" v-if="cartNum">{{
                                    cartNum }}</span>
                            </i>
                        </button>
                    </router-link>
                    <div class="dropdown text-end d-md-none dropend">
                        <button class="btn py-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <i class="bi bi-list fs-2"></i>
                        </button>
                        <ul class="dropdown-menu bg-gray rounded-0 py-0 text-center" aria-labelledby="dropdownMenuButton1">
                            <li class="border-top border-1 border-light">
                                <a class="dropdown-item text-light my-1" href="#">Products</a>
                            </li>
                            <li class="border-top border-1 border-light">
                                <a class="dropdown-item text-light my-1" href="#">Wishlist</a>
                            </li>
                            <li class="border-top border-bottom border-1 border-light">
                                <a class="dropdown-item text-light my-1" href="#">Dev Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
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
                            <td>{{ item.title }}</td>
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
            wishList: {},
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
        }
    },
    created() {
        this.emitter.on('cart-num', (num) => {
            this.cartNum = num
        })
        this.cartNumber()
        this.emitter.on('wishList', (products) => {
            this.wishList = products
        })
    },
}
</script>