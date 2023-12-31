<template>
    <LoadingView :active="isLoading"></LoadingView>
    <div class="container px-0 mt-6 mb-6">
        <div class="row productInfo">
            <div class="col-8 px-0">
                <img :src="product.imageUrl" alt="" class="w-100">
            </div>
            <div class="col-4 ps-4 pe-0 d-flex flex-column justify-content-center">
                <div>
                    <h2 class="fw-bold">{{ product.title }}</h2>
                    <p>{{ product.description }}</p>
                    <p>{{ `NT$${$filters.currency(product.price)}` }}</p>
                </div>
                <div class="d-flex">
                    <input type="number" class="border-primary border-1 rounded-0 rounded-start py-3 ps-4 w-50" min="1"
                        v-model="qty" oninput="this.value=this.value.replace(/[^0-9.]+/g,'');">
                    <button type="button" class="btn btn-primary p-0 rounded-0 rounded-end py-3 w-50" @click="addCart">
                        <div class="spinner-border spinner-border-sm text-dark me-1" role="status" v-if="this.btnLoading">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        加入購物車
                    </button>
                </div>
                <div>
                    <button type="button" class="btn text-primary p-0 mt-3 me-2 w-50 border-0" v-if="wishbtn" disabled>
                        <i class="bi bi-heart-fill me-1"></i>
                        已在願望清單中
                    </button>
                    <button type="button" class="btn text-primary p-0 mt-3 me-2 w-50" @click="addWish" v-else>
                        <i class="bi bi-heart-fill me-1"></i>
                        加入願望清單
                    </button>
                </div>
                <div class="d-flex flex-column mt-6">
                    <h3 class="fs-5 fw-bold">商品購買須知</h3>
                    <p class="fs-5">商品情境照為示意用，不包含其他配件，商品外觀以廠商實際出貨為主。任何訂單變動均會在出貨訊息內更新。</p>
                    <h3 class="fs-5 fw-bold">退換貨須知</h3>
                    <p class="fs-5">依《消費者保護法》規定，全站購物皆享有【七日猶豫期】（含例假日）之權益。若商品有任何問題，可於猶豫期內申請退貨。</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapWritableState, mapActions } from 'pinia'
import wishListStore from '@/stores/wishList'
import cartStore from '@/stores/cart'

export default {
    data() {
        return {
            product: {},
            id: '',
            qty: 1,
            isLoading: false,
            btnLoading: false,
            wishbtn: false
        }
    },
    computed: {
        ...mapState(wishListStore, ['wishList']),
        ...mapWritableState(cartStore, ['cartNum'])
    },
    methods: {
        getProduct() {
            this.isLoading = true
            const api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/product/${this.id}`
            this.$http.get(api).then((res) => {
                if (res.data.success) {
                    this.product = res.data.product
                }
                this.isLoading = false
            })
        },
        addCart() {
            const api = `${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/cart`
            const cart = {
                product_id: this.id,
                qty: this.qty
            }
            this.btnLoading = true
            this.$http.post(api, { data: cart }).then((res) => {
                if (res.data.success) {
                    this.$http.get(api).then((res) => {
                        if (res.data.success) {
                            this.cartNum = res.data.data.carts.length
                            this.btnLoading = false
                        }
                    })
                }
            })
        },
        addWish() {
            this.wishList.push(this.product)
            window.localStorage.setItem('wishList', JSON.stringify(this.tempWishList))
            this.wishCheck()
        },
        wishCheck() {
            this.wishList.find((item) => {
                if (item.id === this.id) {
                    this.wishbtn = true
                }
            })
        },
        ...mapActions(wishListStore, ['wishListUpdate'])
    },
    created() {
        this.id = this.$route.params.productId
        this.getProduct()
        this.wishCheck()
    }
}
</script>